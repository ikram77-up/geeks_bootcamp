import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("API is running ");
});

router.get("/about", (req, res) => {
    res.send("about api is running ");
});
export default router