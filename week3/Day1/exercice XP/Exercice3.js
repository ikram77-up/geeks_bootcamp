
const prompt = require("prompt-sync")();
let number;

do {
     number = Number(prompt("donner moi un numero "));
    console.log("type de numero", typeof number);
    if (isNaN(number)) {
    console.log("That's not a va7lid number! Please enter again.");
    }
} while ( isNaN(number) || number <10);

    console.log("number is  :", number);