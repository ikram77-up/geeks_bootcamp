import "dotenv/config";
import express from "express";
import cors from "cors";
import router from "./routes/index.js";
const app = express();
const port = process.env.PORT;


app.use(cors());
app.use(express.json());
app.use("/api", router);
app.listen(port, () => console.log(`Server is running on  http://localhost:${port}`));