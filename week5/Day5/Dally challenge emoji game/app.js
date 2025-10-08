import express from "express";
import cors from "cors";


const app = express();
const router = express.Router();
const port = 3000;

const emojis = [
    { id: 1, emoji: '😀', name: 'Smile' },
    { id: 2, emoji: '🐶', name: 'Dog' },
    { id: 3, emoji: '🌮', name: 'Taco' },
    { id: 4, emoji: '🎉', name: 'Party' },
    { id: 5, emoji: '🌸', name: 'Flower' },
    { id: 6, emoji: '🚗', name: 'Car' }
]
let boardleader = [];

function getRandomEmoji() {
    const correctEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const mauvaisOptions = emojis.filter((emoji) => emoji.name !== correctEmoji.name)
        .sort(() => 0.5 - Math.random()).slice(0, 5);
    const AllOptions = [...mauvaisOptions
        .map((emoji) => emoji.name), correctEmoji.name].sort(() => 0.5 - Math.random());
    return {
        answer: correctEmoji.name,
        options: AllOptions,
        emoji: correctEmoji.emoji
    };
}

router.get("/game", (req, res) => {
    const question = getRandomEmoji();
    res.status(200).json(question);
});

router.post("/game", (req, res) => {
    try {
        const { guess, answer, score } = req.body;
        let newscore = score;
        if (guess === answer) {
            newscore++;
            res.status(200).json({ correct: guess === answer, newscore, message: "correct" });
        }
        else {
            res.status(200).json({ correct: false, newscore, message: "incorrect" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/boardleader", (req, res) => {
    try {
        const { playername, score } = req.body;
        boardleader.push({ playername, score });
        boardleader.sort((a, b) => b.score - a.score);
        boardleader = boardleader.slice(0, 3);
        res.status(200).json(boardleader);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


router.get("/boardleader", (req, res) => {
    res.status(200).json({ message: "boardleader", boardleader });
});

app.use(cors());
app.use(express.json());
app.use("/api", router);
app.listen(port, () => {
    console.log(`server running on port: http://localhost:${port}`);
});