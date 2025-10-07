import express from "express";
const router = express.Router();
const todos = [
    { id: 1, title: "todo 1", completed: false },
    { id: 2, title: "todo 2", completed: false },
    { id: 3, title: "todo 3", completed: true },
];

router.get("/", (req, res) => {
    res.send("API todo is running ");
});

router.post("/todos", (req, res) => {
    try {
        const { title, completed } = req.body;
        if (!title || completed === undefined) {
            return res.status(400).json({ message: "title and completed are required" });
        }
        const newTodo = { id: todos.length + 1, title, completed };
        todos.push(newTodo);
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/todos", (req, res) => {
    res.status(200).json(todos);
});

router.get("/todos/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const todo = todos.find((todo) => todo.id === id);
        if (!todo) return res.status(404).json({ message: "todo not found" });
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put("/todos/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const todo = todos.find((todo) => todo.id === id);
        if (!todo) return res.status(404).json({ message: "todo not found" });
        const { title, completed } = req.body;
        if (!title || completed === undefined) {
            return res.status(400).json({ message: "title and completed are required" });
        }
        todo.title = title;
        todo.completed = completed;
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete("/todos/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const index = todos.findIndex((todo) => todo.id === id);
        if (index === -1) return res.status(404).json({ message: "todo not found" });
        const deletedtodo = todos.splice(index, 1)[0];
        res.status(200).json(deletedtodo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;


