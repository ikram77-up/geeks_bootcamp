import express from "express";
import cors from "cors";
import router from "./routes/index.js";


const app = express();
const port = 8080;



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static("public"));
app.use("/api", router);

app.listen(port, () => console.log(`Server is running on  http://localhost:${port}`));