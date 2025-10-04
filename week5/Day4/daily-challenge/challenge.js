import { greet } from "./greeting.js";
import { colorfulMessage } from "./colorful-message.js";
import { readFileContent } from "./read-file.js";

function main() {
    console.log(greet("Ikram"));
    console.log();

    console.log(colorfulMessage());
    console.log();

    console.log("File Content:");
    console.log(readFileContent());
}

main();
