import { writefile, readfile } from "./fileManager.js";

async function main() {
    try {
        const content = await readfile("HelloWorld.txt");
        console.log("file content Hello World.txt :", content);

        await writefile("ByeWorld.txt", "Writing to the file");
        console.log("write in file ByeWorld.txt !");
    } catch (err) {
        console.error("Erreur :", err);
    }
}

main();
