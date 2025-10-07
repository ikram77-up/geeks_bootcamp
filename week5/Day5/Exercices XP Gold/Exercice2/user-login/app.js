import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const app = express();
const router = express.Router();
const port = 5000;

const users = [];
function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    return regex.test(password);
}

router.post("/api/register", async (req, res) => {
    try {
        const { email, username, password, tel } = req.body;
        if (!email || !password || !username || !tel) {
            return res.status(400).json({ message: "email and password and username and tel are required" });
        }
        const hashpassword = await bcrypt.hash(password, 8);
        const user = {
            userId: users.length + 1,
            email,
            username,
            password: hashpassword,
            tel
        };
        users.push(user);
        res.status(201).json(user);

    } catch (error) {
        res.status(500).json({ message: "failed to register" });
    }
});

router.post("/api/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "email and password are required" });
        }
        const user = users.find((user) => user.email === email);
        if (!user) return res.status(401).json({ message: "user not found" });
        const passwordValidation = await bcrypt.compare(password, user.password);
        if (!passwordValidation) return res.status(401).json({ message: "password is not valid" });
        const token = jwt.sign({ userId: user.userId }, "secret", { expiresIn: "5h" });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: "failed to login" });
    }
});

router.get("/api/profile", async (req, res) => {

    try {
        const authtoken = req.headers.authorization;
        if (!authtoken) return res.status(401).json({ message: "token is required" });
        const token = authtoken.split(" ")[1];
        const decoded = jwt.verify(token, "secret");
        const user = users.find((user) => user.userId === decoded.userId);
        if (!user) return res.status(401).json({ message: "user not found" });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "invalid token" });
    }

});
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log("server running on : http://localhost:5000");
});