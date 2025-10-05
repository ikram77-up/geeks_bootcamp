import fs from "fs/promises";

export async function read(filename) {
    try {
        const data = await fs.readFile(filename, "utf-8");
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
