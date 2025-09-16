const prompt = require("prompt-sync")();
//1- 
function hotelCost() {
    let numberOfNights;
    let price = 140;
    let totalprice = 0 ;
    while(true){
        
    let nbr = prompt("How many nights will you stay at the hotel? ");
    numberOfNights = Number(nbr);
    // verifier si numberofnights est nombre && et nbr le prompt est vide ou non 
    if(!isNaN(numberOfNights) && nbr.trim() !== "") { 
        console.log("nights: ", numberOfNights);
        totalprice = price * numberOfNights;
        break;
         
    }else{
        console.log("please give me back How many nights will you stay at the hotel?");

    }
}// de while
console.log("totalprice is $",totalprice  );
return totalprice;

}
hotelCost();
//2- 
function planeRideCost(){
 let destination = " ";
 let location ;
 let price;
 while(true){
     destination = prompt("your destination please : ");
    if(isNaN(destination) && destination.trim() !== '') {
        location = destination.toLowerCase();
        break;
 } else{
console.log("please give me back destination : ");
 }
}

 if(location === "london"){
     price = 183;
 }else if (location === "paris") {
     price =220;
 } else {
     price = 300;
 }

 console.log("give me price of your location",destination ,+  price ,":$");
return price;
 
}
planeRideCost()

//3- 
function rentalCarCost(){
    let numberofdays;
    
    
    while(true){
        let input = prompt("SVP nombre de jours pendant lesquels vou souhaitez  louer la voiture : ");
         numberofdays = Number(input);
    // verifier si numberofdays est nombre && et input le prompt est vide ou non et que >0
    if(!isNaN(numberofdays) && input.trim() !== "" && numberofdays > 0 ) { 
        console.log("numberofdays: ", numberofdays);
        
        break;
         
    }else{
        console.log("SVP redonner nombre de jours pendant lesquels vou souhaitez  louer la voiture : ");
    }
}
let carcosts = 40;
let talprice ;
let discount= 0.05;
if(numberofdays > 10 ){
    talprice = carcosts * numberofdays;
   talprice = talprice *(1-discount) ;
    console.log("totalprice is :", talprice,"$");
}else{
    talprice = carcosts * numberofdays;
    console.log("totalprice is :", talprice, "$");
}
return talprice;
    
}
rentalCarCost()

function totalVacationCost(){
    let hotel = hotelCost();
    let plane = planeRideCost();
    let cost = rentalCarCost();
    let total;
    total = hotel + plane +cost;
    console.log("total vacation cost is : " , total);
    
}
totalVacationCost()
