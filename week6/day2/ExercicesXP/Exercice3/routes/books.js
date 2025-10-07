import express from "express";

const router = express.Router();

const books = [
    { id: 1, title: "book 1", author: "author 1", publishedYear: 2000 },
    { id: 2, title: "book 2", author: "author 2", publishedYear: 2015 },
    { id: 3, title: "book 3", author: "author 3", publishedYear: 1999 },
]

router.get("/books", (req, res) => {
    res.status(200).json(books);
});

router.get("/books/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const book = books.find((book) => book.id === id);
        if (!book) return res.status(404).json({ message: "book not found" });
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/books", (req, res) => {
    try {
        const { title, author, publishedYear } = req.body;
        if (!title || !author || !publishedYear) {
            return res.status(400).json({ message: "title, author and publishedYear are required" });
        }
        const book = { id: books.length + 1, title, author, publishedYear };
        books.push(book);
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.put("/books/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const book = books.find((book) => book.id === id);
        if (!book) return res.status(404).json({ message: "book not found" });
        const { title, author, publishedYear } = req.body;
        if (!title || !author || !publishedYear) {
            return res.status(400).json({ message: "title, author and publishedYear are required" });
        }
        book.title = title;
        book.author = author;
        book.publishedYear = publishedYear;
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete("/books/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const index = books.findIndex((book) => book.id === id);
        if (index === -1) return res.status(404).json({ message: "book not found" });
        const deletedBook = books.splice(index, 1)[0];
        res.status(200).json({ message: "Book deleted successfully", deletedBook });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

export default router