import express from "express";
import {
    gettodos,
    gettodo,
    createtodo,
    updatetodo,
    deletetodo
} from "../controllers/todoControllers.js";
const router = express.Router();
router.get('/todos', gettodos);
router.get('/todos/:id', gettodo);
router.post('/todos', createtodo);
router.put('/todos/:id', updatetodo);
router.delete('/todos/:id', deletetodo);

export default router;

