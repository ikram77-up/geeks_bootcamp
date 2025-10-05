import fs from "fs";
import path from "path";

const pathfile = path.join("c:", "Users", "user", "OneDrive - Ecole Marocaine des Sciences de l'Ingénieur", "Bureau", "geeks_bootcamp", "week5", "Day4", "Exercices XP Gold", "Exercice1", "data", "example.txt");
if (fs.existsSync(pathfile)) {
    console.log("Le fichier existe");
} else {
    console.log("Le fichier n'existe pas");
}

const stats = fs.statSync(pathfile);
if (stats.isFile()) {
    console.log(` size of file  : ${stats.size} octets`);
    console.log(`file is created : ${stats.birthtime}`);
    console.log(` updated : ${stats.mtime}`)
} else {
    console.log("Le fichier n'est pas un fichier");
}
