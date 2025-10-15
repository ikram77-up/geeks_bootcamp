import express from "express";
import {
    getallpostsController,
    getpostController,
    createpostController,
    deletepostController,
    updatepostController
} from "../controllers/posts.controllers.js";
const router = express.Router();
router.get("/posts", getallpostsController);
router.get("/posts:id", getpostController);
router.post("/posts", createpostController);
router.delete("/posts:id", deletepostController);
router.put("/posts:id", updatepostController);
export default router;

