import express from "express";
const router = express.Router();

const emojis = ["😀", "🎉", "🌟", "🎈", "👋"];

router.get("/", (req, res) => {
    res.send("API is running ");
});

router.get("/emojis", (req, res) => {
    res.status(200).json(emojis);
});

router.post("/greet", (req, res) => {
    try {
        const { name, emoji } = req.body;
        if (!name || !emoji) {
            return res.status(400).json({ message: "Name and emoji are required" });
        }
        res.status(200).json({ message: `Hello ${name} ${emoji}` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router