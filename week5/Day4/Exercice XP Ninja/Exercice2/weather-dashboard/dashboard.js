import { fetch } from "./weather.js";
import readline from "readline/promises";

export  async function dashboard() {
    const read = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    try {
        const city = await read.question("Enter a city: ");
        await fetch(city);

    } catch (error) {
        console.log(error);

    }
    finally {
        read.close();
    }

}
