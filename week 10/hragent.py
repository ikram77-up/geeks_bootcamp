import json
import logging
import os
import re
from datetime import datetime, timedelta
from collections import Counter, defaultdict
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()


# --- Chemins ---
DATA_DIR = os.getenv("DATA_PATH", "data")
CANDIDATES_FILE = os.path.join(DATA_DIR, "candidates.json")
JOBS_FILE = os.path.join(DATA_DIR, "jobs.json")
SHORTLISTS_FILE = os.path.join(DATA_DIR, "shortlists.json")


def load_json(path):
    if not os.path.exists(path):
        return []
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)

def save_json(path, data):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)

candidates = load_json(CANDIDATES_FILE)
jobs = load_json(JOBS_FILE)
shortlists = load_json(SHORTLISTS_FILE) if os.path.exists(SHORTLISTS_FILE) else {}

# ---------- Query Parsing ----------
def parse_query(text):
    text = text.lower()
    filters = {
        "role": None,
        "skills": [],
        "location": None,
        "minExp": None,
        "maxExp": None,
        "availabilityWindowDays": None,
    }

    # skills (simple heuristic: capitalized words or known tech terms)
    skills = re.findall(r"\b(react|python|sql|java|html|css|git|js)\b", text)
    filters["skills"] = list(set([s.capitalize() for s in skills]))

    # location
    m = re.search(r"in (\w+)", text)
    if m:
        filters["location"] = m.group(1).capitalize()

    # experience range
    m = re.search(r"(\d+)[-–](\d+)\s*y", text)
    if m:
        filters["minExp"], filters["maxExp"] = int(m.group(1)), int(m.group(2))
    else:
        m = re.search(r"(\d+)\s*y", text)
        if m:
            filters["minExp"] = int(m.group(1)) - 1
            filters["maxExp"] = int(m.group(1)) + 1

    # availability
    if "this month" in text or "available" in text:
        filters["availabilityWindowDays"] = 45

    # role/title
    m = re.search(r"(intern|engineer|developer|analyst)", text)
    if m:
        filters["role"] = m.group(1)

    return filters

# ---------- Candidate Search ----------
def score_candidate(cand, filters, job=None):
    score, reasons = 0, []

    # skill matches
    skills_required = filters["skills"] or (job["skillsRequired"] if job else [])
    matched = set(cand["skills"]) & set(skills_required)
    if matched:
        score += 2 * len(matched)
        reasons.append(f"{'+'.join(matched)} (+{2*len(matched)})")

    # location
    if filters["location"] and cand["location"].lower() == filters["location"].lower():
        score += 1
        reasons.append(f"{cand['location']} (+1)")

    # experience
    if filters["minExp"] is not None and filters["maxExp"] is not None:
        if filters["minExp"] - 1 <= cand["experienceYears"] <= filters["maxExp"] + 1:
            score += 1
            reasons.append(f"{cand['experienceYears']}y fits (±1) (+1)")

    # availability
    if filters["availabilityWindowDays"]:
        avail = datetime.fromisoformat(cand["availabilityDate"])
        if avail <= datetime.now() + timedelta(days=filters["availabilityWindowDays"]):
            score += 1
            reasons.append(f"avail {cand['availabilityDate']} (+1)")

    return score, ", ".join(reasons)

def search_candidates(filters, top_n=5):
    results = []
    for cand in candidates:
        score, reason = score_candidate(cand, filters)
        if score > 0:
            results.append({"candidate": cand, "score": score, "reason": reason})
    results.sort(key=lambda x: x["score"], reverse=True)
    return results[:top_n]

# ---------- Shortlists ----------
def save_shortlist(name, candidate_indices, last_results):
    chosen = [last_results[i]["candidate"] for i in candidate_indices if i < len(last_results)]
    shortlists[name] = chosen
    save_json(SHORTLISTS_FILE, shortlists)
    return f"Saved {len(chosen)} candidates as shortlist '{name}'."

# ---------- Email Drafting ----------
def draft_email(recipients, job_title, tone="friendly"):
    job = next((j for j in jobs if j["title"].lower() == job_title.lower()), None)
    if not job:
        return None

    subject = f"Opportunity: {job_title} in {job['location']}"
    if tone == "friendly":
        subject = f"Quick chat about a {job_title} role?"

    names = ", ".join([f"{c['firstName']} {c['lastName']}" for c in recipients])
    text = (
        f"Hi {names},\n\n"
        f"We are excited about your profile and think you could be a great fit for our {job_title} role in {job['location']}.\n"
        f"{job['jdSnippet']}\n\n"
        "Would you be open to a quick chat?\n\nBest regards,\nHR Team"
    )

    return {"subject": subject, "text": text}

def html_template(email):
    return f"""
    <html>
    <body style="font-family: Arial; line-height:1.5;">
      <h3>{email['subject']}</h3>
      <p>{email['text'].replace('\n','<br>')}</p>
    </body>
    </html>
    """

# ---------- Analytics ----------
def analytics_summary():
    stage_counts = Counter(c["stage"] for c in candidates)
    skills = Counter(s for c in candidates for s in c["skills"])
    top_skills = skills.most_common(3)
    return {"countByStage": dict(stage_counts), "topSkills": top_skills}

# -----main------
def main():
    print(" HR Agent ")
    last_results = []

    while True:
        cmd = input("\n> ").strip()

        if cmd.lower().startswith("find"):
            filters = parse_query(cmd)
            last_results = search_candidates(filters)
            for i, r in enumerate(last_results):
                c = r["candidate"]
                print(f"#{i} {c['firstName']} {c['lastName']} | {r['reason']} → score {r['score']}")

        elif cmd.lower().startswith("save"):
            m = re.match(r"save (.+) as \"(.+)\"", cmd, re.IGNORECASE)
            if m:
                indices = [int(x[1:]) for x in m.group(1).split() if x.startswith("#")]
                name = m.group(2)
                print(save_shortlist(name, indices, last_results))

        elif cmd.lower().startswith("draft"):
            m = re.match(r"draft .* \"(.+)\" .* \"(.+)\"", cmd, re.IGNORECASE)
            if m:
                sl_name, job_title = m.group(1), m.group(2)
                recipients = shortlists.get(sl_name, [])
                email = draft_email(recipients, job_title)
                if email:
                    print("\n--- Email Preview ---")
                    print("Subject:", email["subject"])
                    print(html_template(email))

        elif cmd.lower().startswith("show analytics"):
            summary = analytics_summary()
            print("Pipeline by stage:", summary["countByStage"])
            print("Top skills:", summary["topSkills"])

        elif cmd.lower() in ["quit", "exit"]:
            break

        else:
            print("Commands: Find..., Save..., Draft..., Show analytics, Quit")

if __name__ == "__main__":
    main()



