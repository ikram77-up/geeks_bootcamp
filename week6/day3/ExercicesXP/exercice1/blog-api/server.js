import express from "express";
import cors from "cors";
import { db } from "./config/db_connect.js";
import dotenv from "dotenv";
import router from "./routes/postes.routes.js";

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());
app.use("/api", router);
const port = process.env.PORT || 5000;
app.listen(port, () =>
    console.log(`Server is running on  http://localhost:${port}`));