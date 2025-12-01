import express from "express"
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import router from './routes/index.js'

const app = express()
const port = 8080

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api', router)

app.listen(
    port, () => console.log(`Server is running on  http://localhost:${port}`))