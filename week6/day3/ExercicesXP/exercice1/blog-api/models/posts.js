import express from "express";
import { db } from "../config/db_connect.js";

export const getallposts = () => {
    return db.query("SELECT * FROM posts");
}

export const getpost = (id) => {
    return db.query("SELECT * FROM posts WHERE id = $1", [id]);
}

export const createpost = (title, content) => {
    return db.query("INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *",
        [title, content]);
}

export const deletepost = (id) => {
    return db.query("DELETE FROM posts WHERE id = $1", [id]);
}

export const updatepost = (id, title, content) => {
    return db.query("UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *", [title, content, id]);
}