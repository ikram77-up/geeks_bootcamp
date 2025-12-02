import fs from "fs";
import _ from "lodash";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dataFile = join(__dirname, "data", "notes.json");

const fetchNotes = () => {
    try {
        const dataBuffer = fs.readFileSync(dataFile, "utf-8");
        return JSON.parse(dataBuffer);
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync(dataFile, JSON.stringify(notes, null, 2));
};

export const addNote = (title, body) => {
    const notes = fetchNotes();
    const duplicateNote = _.find(notes, (n) => n.title === title);
    if (duplicateNote) {
        return { success: false, message: "note already exists" };
    }

    const note = { title, body };
    notes.push(note);
    saveNotes(notes);
    return { success: true, note };
};

export const removeNote = (title) => {
    const notes = fetchNotes();
    const filteredNotes = notes.filter((n) => n.title !== title);
    saveNotes(filteredNotes);
    if (filteredNotes.length === notes.length) {
        return { success: false, message: "note not found" };
    }
    return { success: true };
};

export const getAll = () => fetchNotes();

export const getNote = (title) => {
    const notes = fetchNotes();
    const findNote = _.find(notes, (n) => n.title === title);
    if (!findNote) {
        return { success: false, message: "note not found" };
    }
    return { success: true, note: findNote };
};

export const logNote = (note) => {
    console.log("----------");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};
