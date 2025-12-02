import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import {
    addNote,
    removeNote,
    getAll,
    getNote,
    logNote,
} from "./note.js";


yargs(hideBin(process.argv)).version("1.0.0");
// for add note
yargs(hideBin(process.argv))
    .command(
        "add",
        "Add a new note",
        {
            title: {
                describe: "Note title",
                demandOption: true,
                type: "string",
            },
            body: {
                describe: "Note body",
                demandOption: true,
                type: "string",
            },
        },
        (argv) => {
            const result = addNote(argv.title, argv.body);
            if (result.success) {
                console.log("Note added successfully!");
                logNote(result.note);
            } else {
                console.log(result.message);
            }
        }
    )

// for remove note 
    .command(
        "remove",
        "Remove a note",
        {
            title: {
                describe: "Note title",
                demandOption: true,
                type: "string",
            },
        },
        (argv) => {
            const result = removeNote(argv.title);
            console.log(result.success ? "Note removed!" : result.message);
        }
)
    
// for read note 
    .command(
        "read",
        "Read a note",
        {
            title: {
                describe: "Note title",
                demandOption: true,
                type: "string",
            },
        },
        (argv) => {
            const result = getNote(argv.title);
            if (result.success) {
                logNote(result.note);
            } else {
                console.log(result.message);
            }
        }
    )
    .demandCommand(1, "Please specify an action").argv;
