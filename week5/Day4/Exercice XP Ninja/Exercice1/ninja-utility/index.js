import { greet } from "./commands/greet.js";
import { read } from "./commands/read.js";
import { fetch } from "./commands/fetch.js";
async function main() {
    greet("Ikram");
    read("./commands/text.txt");
    fetch();
}
main();