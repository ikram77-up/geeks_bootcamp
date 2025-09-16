
let element = document.getElementById("container");
console.log("div is  : ",element);
let color = element.style.backgroundColor ="#ADD8E6";

if(color ==="#ADD8E6"){
    alert("Bonjour X et Y");
}else{
    console.log("background of div is not ligth blue ")
}


let listul = document.querySelectorAll(".list");
let frstlist = listul[0];
let itm = document.getElementsByTagName("li");
itm[1].textContent ='Richard';
console.log(frstlist.innerHTML);

let listli = document.querySelector(".list li:nth-child(2)");
listli.textContent = "Richard";
console.log("la modification est fait : " ,listli.textContent);

let liste = document.querySelectorAll(".list");
let secondlist = liste[1];
let item = secondlist.querySelector("li:nth-child(2)");
item.remove();
console.log(secondlist.innerHTML);  

let lsts = document.querySelectorAll(".list");
lsts.forEach(function(lst){
    let premierlist = lst.querySelector("li:first-child");
    premierlist.textContent = "ikram";
    console.log(premierlist.innerHTML);
});

let listes = document.querySelectorAll(".list");
liste.forEach(function(listeul){
    listeul.classList.add("student_list");
    console.log(listeul.innerHTML);
});

let listesul = document.querySelectorAll(".list");
let firstlistul = listul[0];
firstlistul.classList.add("university");
firstlistul.classList.add("attendance");
console.log(firstlistul.innerHTML);


let maliste = document.querySelectorAll(".list");
let secdlist = maliste[1];
let items = secdlist.querySelector("li:last-child");
items.style.display  ="none";
console.log(secdlist.innerHTML);


let myliste = document.querySelectorAll(".list");
let premlist = myliste[0];
let elm = premlist.querySelector("li:nth-child(2)");
elm.style.border = "2px solid #ADD8E6";

let corps = document.body;
corps.style.width ="100 px ";
corps.style.width ="100 px";

