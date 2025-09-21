setTimeout(() => {
    alert("Hello world");
}, 2000);
setTimeout(() => {
    let div = document.getElementById("container");
let par = document.createElement("p");
par.textContent= "Hello World";
div.appendChild(par);
}, 2000);
let idsI;
let btn = document.getElementById("clear");
btn.addEventListener("click",function (event) {
    event.preventDefault();
if (idsI) {
    clearInterval(idsI);
}
})

    idsI = setInterval(() => {
    let div = document.getElementById("container");
    let paragraph = document.createElement("p");
paragraph.textContent= "Hello World";
div.appendChild(paragraph);
}, 2000);

let compteur =0;

let id = setInterval(() => {
let div = document.getElementById("container");
let paragraph = document.createElement("p");
paragraph.textContent= "Hello World";
div.appendChild(paragraph);
compteur++;
if (compteur ===5) {
    clearInterval(id)
    console.log("program arrete");
}
}, 2000);




