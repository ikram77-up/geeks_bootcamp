import express from "express";
import cors from "cors";
import router from "./routers/questionRouters";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);
const port = 5000;
app.listen(port, () =>
    console.log(`Server is running on  http://localhost:${port}`));