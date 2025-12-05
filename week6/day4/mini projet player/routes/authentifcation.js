import express from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const router = express.Router();


router.post("/register", async (req, res) => {
    try {
        const { username, password, email } = req.body;

        const exists = await User.findOne({ username });
        if (exists) return res.status(400).json({ msg: "Username already exists" });

        const hash = await bcrypt.hash(password, 10);

        const user = new User({
            username,
            password: hash,
            email
        });

        await user.save();

        res.json({ msg: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ msg: "User not found" });

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return res.status(400).json({ msg: "Incorrect password" });

        res.json({
            msg: "Login successful",
            username: user.username,
            email: user.email
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
