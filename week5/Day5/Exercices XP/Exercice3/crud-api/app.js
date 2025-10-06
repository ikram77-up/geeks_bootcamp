import express from "express";
import cors from "cors";
import { fetchPosts } from "./data/dataService.js";


const app = express();
const router = express.Router();

router.get("/api/posts", async (req, res) => {
    try {
        const posts = await fetchPosts();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
app.use(cors());
app.use(express.json());
app.use(router);
app.listen(5000, () => {
    console.log("server running on port: http://localhost:5000");
});
