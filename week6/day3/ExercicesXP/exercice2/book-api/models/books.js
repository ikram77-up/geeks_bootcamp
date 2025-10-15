import express from "express";
import { db } from "../config/db_connect.js";

export const getBooks = () => {
    return db.query("SELECT * FROM books")

};

export const getBook = (id) => {
    return db.query("SELECT * FROM books WHERE id = $1", [id]);
};

export const createBook = (title, author, published_year) => {
    return db.query("INSERT INTO books (title, author,published_year) VALUES ($1, $2,$3) RETURNING *",
        [title, author, published_year]);
};



