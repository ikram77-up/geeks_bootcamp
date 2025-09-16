let arry = ["red","blue","gray","yellow","black","pink"];
let mouseover = false;
let pallete = document.getElementById("pallete");
let colordessign = 'white';
arry.forEach(color =>{
    let button = document.createElement("button");
    button.style.background = color;
    button.style.width = '35px';
    button.style.height = '35px';
    button.addEventListener("click",function(event){
         colordessign = color;
    })
    pallete.appendChild(button);
})

let grid = document.getElementById("grid");
function gridDessign(){
    grid.innerHTML = '';
    grid.style.display = "grid";
    grid.style.gridTemplateColumns ="repeat(20,35px)";
    grid.style.gridTemplateRows ="repeat(20,35px)";
    grid.style.gap= "5px";

    for(let i=0; i< 20*20 ;i++){
        let div = document.createElement("div");
        div.style.border ="2px solid gray";
        div.style.width = "35px";
        div.style.height = "35px";

        div.addEventListener("click",function()
    {
        div.style.background = colordessign;
        mouseover =true;

    });
    div.addEventListener("mouseover",function()
    {
        
        if(mouseover){
            div.style.background = colordessign;
        }
    });grid.appendChild(div);
    }
}
gridDessign()

let btn = document.getElementById("clear");
btn.style.fontSize ="20px";

btn.addEventListener("click",function(){
    let divgrid  = grid.querySelectorAll("div");
    divgrid.forEach(divg => {
        divg.style.background = "white";
        mouseover = false;
    })
})