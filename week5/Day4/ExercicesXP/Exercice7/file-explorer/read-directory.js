import fs from "fs/promises";

import path from "path";
async function readAllFiles(pathfile) {
    try {
        const files = await fs.readdir(pathfile, { withFileTypes: true });
        const filesname = ["source.txt", "destination.txt"];
        files
            .filter(file => filesname.includes(file.name))
            .forEach(file => {
                console.log(path.join(pathfile, file.name));
            });
    } catch (error) {
        console.log(error);
    }
}

readAllFiles("C:/Users/user/OneDrive - Ecole Marocaine des Sciences de l'Ingénieur/Bureau/geeks_bootcamp/week5/Day4/ExercicesXP/Exercice7/file-explorer");
