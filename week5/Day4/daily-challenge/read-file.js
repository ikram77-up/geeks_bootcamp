import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function readFileContent() {
    const filePath = path.join(__dirname, "files", "file-data.txt");
    try {
        const data = fs.readFileSync(filePath, "utf-8");
        return data;
    } catch (err) {
        return `Error reading file: ${err.message}`;
    }
}