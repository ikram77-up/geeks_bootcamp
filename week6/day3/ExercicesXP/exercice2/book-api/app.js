import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/booksRouters.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
const port = process.env.PORT || 5000;
app.listen(port, () =>
    console.log(`Server is running on  http://localhost:${port}`));