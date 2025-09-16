let element = document.getElementById("navBar");
element.setAttribute("id","socialNetworkNavigation");
console.log(element.innerHTML);

let list = document.createElement("li");
let elelogout = document.createTextNode("logout");
list.appendChild(elelogout);

let listul = document.querySelector("ul");
listul.appendChild(list);
console.log(listul.outerHTML);

let malistul = document.querySelector("ul");
let fistli = malistul.firstElementChild;
let secdli = malistul.lastElementChild;

console.log("the first element child is : ",fistli.textContent);
console.log("the last element child is : ",secdli.textContent );

