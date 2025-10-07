import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
const router = express.Router();
const port = 8080;

const posts = [
    { id: 1, title: "post 1", content: "content 1" },
    { id: 2, title: "post 2", content: "content 2" },
    { id: 3, title: "post 3", content: "content 3" },
];

const API_URL = "https://jsonplaceholder.typicode.com/posts";



router.get("/posts", async (req, res) => {
    try {
        const response = await axios.get(API_URL);
        const posts = response.data;
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.post("/posts", async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({ message: "title and content are required" });
        }
        const response = await axios.post(API_URL, { title, content });
        const post = response.data;
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.get("/posts/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await axios.get(`${API_URL}/${id}`);
        const post = response.data;
        if (!post) return res.status(404).json({ message: "post not found" });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.put("/posts/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({ message: "title and content are required" });
        }
        const updatedPost = { id, title, content };
        await axios.put(`${API_URL}/${id}`, updatedPost);
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete("/posts/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await axios.delete(`${API_URL}/${id}`);
        res.status(200).json({ message: "post deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.use(cors());
app.use(express.json());
app.use(router);
app.listen(port, () => {
    console.log("server running on port: http://localhost:8080");
});