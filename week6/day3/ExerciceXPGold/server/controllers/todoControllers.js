import e from 'cors';
import Todo from '../models/todos.js';
import { v4 as uuidv4 } from 'uuid';
export const gettodos = async (req, res) => {
    try {
        const todos = await Todo.findAll();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
export const gettodo = async (req, res) => {
    try {
        const todo = await Todo.findByPk(req.params.id);
        if (!todo) return res.status(404).json({ message: 'Not found' });
        res.json(todo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
export const createtodo = async (req, res) => {
    try {
        const data = { id: uuidv4(), ...req.body };
        const [newTodo] = await Todo.create(data);
        res.json(newTodo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
export const updatetodo = async (req, res) => {
    try {
        const [updated] = await Todo.update(req.params.id, req.body);
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
export const deletetodo = async (req, res) => {
    try {
        await Todo.destroy(req.params.id);
        res.json({ message: 'Deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
