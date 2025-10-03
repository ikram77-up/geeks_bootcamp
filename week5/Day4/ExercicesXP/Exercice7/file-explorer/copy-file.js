import fs from "fs/promises";



export async function copyfile(sourcePath, destinationPath) {
    try {
        const data = await fs.readFile(sourcePath, "utf8");
        console.log("Contenu lu :", data);

        await fs.writeFile(destinationPath, data);
        console.log("Fichier copié avec succès !");
    } catch (err) {
        console.error("Erreur :", err);
    }
}
console.log(copyfile("source.txt", "destination.txt"))