let BT = document.querySelector("h1");
console.log(BT.innerHTML);


let art = document.querySelector("article");

if(art){
    let par = art.querySelectorAll("p");
    if(par.length >0){
            par[par.length -1].remove();
        }else{
            console.log("paragraphe non trouve");
        }
}else{
    console.log("par is not found in article")
}

//  document.querySelector("h3").addEventListener("click" ,function (){
//     this.style.display = "none";
// })
const h =  document.querySelector("h3");
h.addEventListener("click",function(){
    h.style.display ="none";
})
let paragraph = document.querySelectorAll("p");
let bttn = document.getElementById("btn");
bttn.addEventListener("click",function(){
    paragraph.forEach(function(parg){
        parg.style.fontWeight ="bold";
    });
});

let bt = document.querySelector("h1");
bt.addEventListener("mouseover",function(event){
   let police =  Math.floor(Math.random() * 101);
    console.log(police );
});


