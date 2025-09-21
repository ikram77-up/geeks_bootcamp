let shoppingList=[];
let div = document.getElementById("root");
let form = document.createElement("form");
let text = document.createElement("input");
text.type = "text";
let btn = document.createElement("input");
btn.type = "button";
btn.value="add";
let btn1 = document.createElement("input");
btn1.type = "button";
btn1.value="Clear All";
let listUl = document.createElement("ul");

form.appendChild(text);
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));
form.appendChild(btn);
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));
form.appendChild(btn1);
form.appendChild(document.createElement("br"));
div.appendChild(form);
div.appendChild(listUl)


function addItem(){
    let value = text.value.trim();
    if (value !== "") {
        shoppingList.push(value);
        console.log(shoppingList);

        let lisstLi = document.createElement("li");
        lisstLi.textContent = value;
        listUl.appendChild(lisstLi);

        text.value ="";
        
    }
}

btn.addEventListener("click",addItem);


function clearAll(){
   shoppingList= [];
   listUl.innerHTML="";

}
btn1.addEventListener("click",clearAll)