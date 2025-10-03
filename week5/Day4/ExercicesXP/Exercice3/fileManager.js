import fs from "fs/promises";

export async function writefile(filename, content) {
    try {
        await fs.writeFile(filename, content);
    } catch (err) {
        console.error(err);
    }
}


export async function readfile(filename) {
    try {
        const data = await fs.readFile(filename, "utf8");
        return data;
    } catch (err) {
        console.error(err);
    }
}

