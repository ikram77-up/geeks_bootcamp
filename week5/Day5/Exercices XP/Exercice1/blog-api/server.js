import express from "express";
import cors from "cors";


const app = express();
const router = express.Router();

const posts = [
    { id: 1, title: "post 1", content: "content 1" },
    { id: 2, title: "post 2", content: "content 2" },
    { id: 3, title: "post 3", content: "content 3" },
];

router.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

router.post("/posts", (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({ message: "title and content are required" });
        }
        const post = { id: posts.length + 1, title, content };
        posts.push(post);
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

});
router.get("/posts/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const post = posts.find((post) => post.id === id);
        if (!post) return res.status(404).json({ message: "post not found" });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

})
router.delete("/posts/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const post = posts.find((post) => post.id === id);
        const index = posts.indexOf(post);
        if (index === -1) return res.status(404).json({ message: "post not found" });
        posts.splice(index, 1);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


router.put("/posts/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const post = posts.find((post) => post.id === id);
        if (!post) return res.status(404).json({ message: "post not found" });
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({ message: "title and content are required" });
        }
        post.title = title;
        post.content = content;

        res.status(200).json(post);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.use(cors());
app.use(express.json());
app.use(router);
app.listen(3000, () => {
    console.log("server running on port: http://localhost:3000");
});