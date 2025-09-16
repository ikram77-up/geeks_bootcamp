let fr = document.querySelector("form");
console.log(fr.innerHTML);



const btn =  document.getElementById("submit");
let inpfname = document.getElementById("fname");
let inplname = document.getElementById("lname");  
 btn.addEventListener("click",function(event){
    event.preventDefault();
    
if(inpfname.value.trim() === "" || inplname.value.trim() === ""){
    console.log("aucum name saisie ")

}else{
   console.log(inpfname.value);
    console.log(inplname.value); 
let list = document.querySelector(".usersAnswer");
let lifname = document.createElement("li");
lifname.textContent = inpfname.value;
console.log(lifname); 
let lilname = document.createElement("li");
lilname.textContent = inplname.value;
console.log(lilname);
list.appendChild(lifname);
list.appendChild(lilname);
console.log(list.outerHTML);
}
});