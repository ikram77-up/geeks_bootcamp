import express from "express";
import db from "../config/db.js";
import {
    register,
    login,
    getUsers,
    getUser,
    updateUser
}
    from "../controllers/usersController.js";


const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.put("/users/:id", updateUser);

export default router;
