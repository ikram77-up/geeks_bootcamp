const prompt = require("prompt-sync")();

let input = prompt("give me several words separated by commas");

let arry = input.split(",").map(word => word.trim());
console.log(arry);

let maxilen = 0;
for(wrd of arry){
    if(wrd.length > maxilen){
        maxilen = wrd.length;
    }
}

let frame = "*".repeat(maxilen +4);
console.log(frame);
for(wrd of arry){
    let space = " ".repeat(maxilen- wrd.length);
//maxilen - wrd.length c'est maxilen --> wrd.length pour que chaque mot prends la longeur du  grand longeur de mot dans array 
console.log("* "+ wrd + space +" *");
}
console.log(frame);