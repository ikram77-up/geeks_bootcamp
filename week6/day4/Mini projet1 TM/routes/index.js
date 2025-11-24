import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

const pathFile = path.resolve("data/tasks.json");

function ReadTask() {
    try {
        const data = fs.readFileSync(pathFile, "utf-8");
        return JSON.parse(data);
    } catch (err) {
        throw new Error("failed to read the file");
    }
}

function WriteTask(tasks) {
    try {
        fs.writeFileSync(pathFile, JSON.stringify(tasks, null, 2));
    } catch (err) {
        throw new Error("failed to write to the file");
    }
}

router.get("/tasks", (req, res) => {
    try {
        const tasks = ReadTask();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/tasks/:id", (req, res) => {
    try {
        const tasks = ReadTask();
        const id = parseInt(req.params.id);
        const task = tasks.find((task) => task.id === id);

        if (!task)
            return res.status(404).json({ message: "task not found" });

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/tasks", (req, res) => {
    try {
        const { title, description, completed } = req.body;

        if (!title || !description || completed === undefined) {
            return res.status(400).json({
                message: " title, description and completed are required",
            });
        }

        const tasks = ReadTask();

        const newTask = {
            id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            title,
            description,
            completed,
        };

        tasks.push(newTask);
        WriteTask(tasks);

        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put("/tasks/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { title, description, completed } = req.body;

        if (!title || !description || completed === undefined) {
            return res.status(400).json({
                message: "title, description and completed are required",
            });
        }

        const tasks = ReadTask();
        const index = tasks.findIndex((task) => task.id === id);

        if (index === -1)
            return res.status(404).json({ message: "Tâche non trouvée" });

        tasks[index] = { id, title, description, completed };
        WriteTask(tasks);

        res.status(200).json(tasks[index]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.delete("/tasks/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const tasks = ReadTask();

        const index = tasks.findIndex((task) => task.id === id);

        if (index === -1)
            return res.status(404).json({ message: "task not found" });

        tasks.splice(index, 1);
        WriteTask(tasks);

        res.status(200).json({ message: "task deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
