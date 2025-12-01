import express from "express";
import bcrypt from "bcrypt";
import fs from "fs";
import path from "path";

const router = express.Router();

const pathFile = path.resolve("data/users.json");

function Readuser() {
    try {
        if (!fs.existsSync(pathFile)) return [];
        const data = fs.readFileSync(pathFile, "utf-8");
        return JSON.parse(data);
    } catch (err) {
        throw new Error("failed to read the file");
    }
}


function WriteUser(users) {
    try {
        fs.writeFileSync(pathFile, JSON.stringify(users, null, 2));
    } catch (err) {
        throw new Error("failed to write to the file");
    }
}

router.get("/users", (req, res) => {
    try {
        const users = Readuser();
        const Safeuser = users.map(({ password, ...user }) => user)
        res.status(200).json(Safeuser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/users/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const users = Readuser();
        const user = users.find(user => user.id === id);
        if (!user) return res.status(404).json({ message: "User not found" });
        const { password, ...Safeuser } = user;
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/register", (req, res) => {
    try {
        const { name, username, email, password } = req.body;
        if (!name || !username || !email || !password)
            return res.status(400).json({ message: "name, username, email and password are required" });
        const users = Readuser();
        if (users.find(user => user.email === email || user.username === username))
            return res.status(400).json({ message: "User already exists" });
        const hashedPassword = bcrypt.hashSync(password, 8);
        const newUser = {
            id: Date.now(),
            name,
            username,
            email,
            password: hashedPassword
        }
        users.push(newUser);
        WriteUser(users);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.post("/login", (req, res) => {
    try {
        const { email, password } = req.body;
        const users = Readuser();
        const user = users.find(user => user.email === email || user.username === username);
        if (!user) return res.status(404).json({ message: "User not found" });

        const isPasswordvalid = bcrypt.compareSync(password, user.password);
        if (!isPasswordvalid) {
            return res.status(401).json({ message: "Invalid password" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put("/users/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { name, username, email, password } = req.body;
        if (!name || !username || !email || !password)
            return res.status(400).json({ message: "name, username, email and password are required" });
        const users = Readuser();
        const user = users.find(user => user.id === id);
        if (!user) return res.status(404).json({ message: "User not found" });
        user.name = name;
        user.username = username;
        user.email = email;
        user.password = password;
        WriteUser(users);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

export default router