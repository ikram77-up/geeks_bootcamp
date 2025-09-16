let allBoldItems;
function getBoldItems(){
    allBoldItems = document.querySelectorAll("p strong");
    console.log(allBoldItems);
}
getBoldItems();
let paragraph = document.querySelector("p");
function highlight(){
    allBoldItems.forEach(function(str){
        str.style.color = "blue";
    });
paragraph.addEventListener("mouseover", highlight);

}
highlight();
function returnItemsToDefault(){
    allBoldItems.forEach(function(str){
        str.style.color = "black";
    });
paragraph.addEventListener("mouseout", returnItemsToDefault);
}
returnItemsToDefault();

