import express from "express";
const router = express.Router();


let posts = [
    { id: 1, title: "Post 1", content: "Content 1", timestamp: new Date() },
    { id: 2, title: "Post 2", content: "Content 2", timestamp: new Date() },
    { id: 3, title: "Post 3", content: "Content 3", timestamp: new Date() },
];

router.get("/", (req, res) => {
    res.send("API is running");
});



router.get("/posts", (req, res) => {
    res.status(200).json(posts);
});


router.get("/posts/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const post = posts.find(p => p.id === id);
        if (!post) return res.status(404).json({ message: "Post not found" });
        res.status(200).json(post);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

});
router.post("/posts", (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({ message: "Title and content are required" });
        }

        const newPost = {
            id: posts.length ? posts[posts.length - 1].id + 1 : 1,
            title,
            content,
            timestamp: new Date(),
        };

        posts.push(newPost);
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

});


router.put("/posts/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({ message: "Title and content are required" });
        }

        const post = posts.find(p => p.id === id);
        if (!post) return res.status(404).json({ message: "Post not found" });

        post.title = title;
        post.content = content;
        post.timestamp = new Date();

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.delete("/posts/:id", (req, res) => {
   try {
       const id = parseInt(req.params.id);
       const index = posts.findIndex(p => p.id === id);

       if (index === -1) {
           return res.status(404).json({ message: "Post not found" });
       }

       const deletedPost = posts.splice(index, 1)[0];
       res.status(200).json(deletedPost);
   } catch (error) {
    res.status(500).json({ message: error.message });
   }
});

export default router;
