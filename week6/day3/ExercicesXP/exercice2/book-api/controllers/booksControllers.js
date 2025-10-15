import {
    getBooks,
    getBook,
    createBook
} from "../models/books.js";

export const getAllBooks = async (req, res) => {
    try {
        const books = await getBooks();
        if (books.rows.length === 0) {
            return res.status(404).json({ message: "No books found" });
        }
        res.status(200).json(books.rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getBookById = async (req, res) => {
    try {
        const book = await getBook(req.params.id);
        if (book.rows.length === 0) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json(book.rows[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createNewBook = async (req, res) => {
    try {
        const { title, author, published_year } = req.body;
        if (!title || !author || !published_year) {
            return res.status(400).json({ message: "All fields are required" });
        }
        res.status(201).json(book.rows[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
