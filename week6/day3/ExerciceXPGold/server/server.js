import express from "express";
import cors from "cors";
import todoRoutes from "./Routes/todoRoutes.js";
import { db } from "./config/db_connect.js";

const app = express();
const port = 8080
app.use(cors());

app.use(express.json());
app.use("/api", todoRoutes);
app.listen(port, () =>
    console.log(`Server is running on  http://localhost:${port}`));