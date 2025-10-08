const API_URL = "http://localhost:3000/api";
let answer = "";
let score = 0;

let form = document.getElementById("form");
let emojiSelect = document.getElementById("emoji");
let result = document.getElementById("answer");
let scoreElement = document.getElementById("score");


async function fetchEmojis() {
    try {
        const response = await fetch(`${API_URL}/game`);
        const data = await response.json();

        answer = data.answer;

        result.textContent = `what's name of emoji ? ${data.emoji}`;

        emojiSelect.innerHTML = "";
        data.options.forEach(option => {
            let opt = document.createElement("option");
            opt.value = option;
            opt.textContent = option;
            emojiSelect.appendChild(opt);



        });

    } catch (error) {
        console.error(error);
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const guess = emojiSelect.value;

    if (guess === answer) {
        score++;
        result.textContent = " Correct !";
    } else {
        result.textContent = " Incorrect !";
    }

    scoreElement.textContent = `Score : ${score}`;


    fetchEmojis();
});


fetchEmojis();
let submitBtn = document.getElementById("submitScore");
let playerNameInput = document.getElementById("playername");
let leaderboardDiv = document.getElementById("leaderboard");

submitBtn.addEventListener("click", async () => {
    let playername = playerNameInput.value;
    if (!playername) return alert("Enter your name");


    try {
        const response = await fetch(`${API_URL}/boardleader`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ playername, score })
        });
        const data = await response.json();
        renderLeaderboard(data);
    } catch (error) {
        console.error(error);
    }
});

function renderLeaderboard(data) {
    leaderboardDiv.innerHTML = "<h3>Leaderboard</h3>";
    data.forEach((item, index) => {
        let div = document.createElement("div");
        div.textContent = `${index + 1}. ${item.playername} - ${item.score}`;
        leaderboardDiv.appendChild(div);
    });
}


