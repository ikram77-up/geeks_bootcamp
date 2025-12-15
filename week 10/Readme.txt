Create a virtual environment
.venv
active
 python -m venv venv
 ven/Scripts/activate

Install dependencies
pip install python-dotenv

create folder data for data json candidates.json ,
 jobs.json ,
 shortlists.json : This file is generated automatically after your first save.
create file hragent.py for
Loading environment variables
A command line interface (CLI) that helps recruiters:
Search for candidates in a JSON file
Create shortlists
Generate automated emails to contact candidates
Display statistics (analytics) on the candidate database

run program
python hragent.py

search profil
> Find top 5 React interns in Casablanca, 0–2 years, available this month
#0 ikram Habib Allah | React (+2), Casablanca (+1), 1y fits (±1) (+1), avail 2025-10-01 (+1) → score 5
#1 yahya Habib Allah | React (+2), Casablanca (+1), 1y fits (±1) (+1) → score 4
#2 cihan emirhan | Casablanca (+1), 1y fits (±1) (+1) → score 2

save candidates in shortlists
Save #1 #3 as "FE-Intern-A"
Saved 1 candidates as shortlist 'FE-Intern-A'.

Generate mail for job
> Draft an outreach email for "FE-Intern-A" using job "Frontend Intern" in friendly tone

--- Email Preview ---
Subject: Quick chat about a Frontend Intern role?

    <html>
    <body style="font-family: Arial; line-height:1.5;">
      <h3>Quick chat about a Frontend Intern role?</h3>
      <p>Hi yahya Habib Allah,<br><br>We are excited about your profile and think you could be a great fit for our Frontend Intern role in Casablanca.<br>We build UI with React and Git workflows.<br><br>Would you be open to a quick chat?<br><br>Best regards,<br>HR Team</p>
    </body>
    </html>

change the subject of mail
> Change the subject to "Quick chat about a Frontend Intern role?" and re-preview
Commands: Find..., Save..., Draft..., Show analytics, Quit

for show analytics
> Show analytics
Pipeline by stage: {'SOURCED': 2, 'INTERVIEW': 1}
Top skills: [('HTML', 3), ('React', 2), ('Spring boot', 2)]

exit for exit the program
exit or quit