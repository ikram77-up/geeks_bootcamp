import db from "../config/db.js";
import * as users from "../model/users.js";

const saltRounds = 10;

export const register = async (req, res) => {
    try {
        const existUser = await users.getUserByUsername(req.body.username);
        if (existUser) return res.status(400).json({ error: "User already exists" });
        const { email, username, first_name, last_name, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = await users.createUser({ email, username, first_name, last_name }, hashedPassword);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userPwd = await users.getUserByUsername(username);
        if (!userPwd) return res.status(400).json({ message: "Utilisateur non trouvé" });

        const hashEntry = await users.getUserByUsername(username);
        const hashPwd = await db("hashpwd").where({ username }).first();

        const isValid = await bcrypt.compare(password, hashPwd.password);
        if (!isValid) return res.status(400).json({ message: "Mot de passe incorrect" });
        res.status(200).json({ message: "Connexion reussie" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await users.getAllUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getUser = async (req, res) => {
    try {
        const user = await users.getUserById(req.params.id);
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateUser = async (req, res) => {
    try {
        const user = await users.updateUser(req.params.id, req.body);
        if (!updateUser.length)
            return res.status(404).json({ message: "User not found" });
        res.json(useupdater[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};