import express from "express";
const router = express.Router();
import {
    getAllBooks,
    getBookById,
    createNewBook
} from "../controllers/booksControllers.js";
router.get("/books", getAllBooks);
router.get("/books/:id", getBookById);
router.post("/books", createNewBook);
export default router;

