function displayNumbersDivisible(){
    for(let i =0 ; i<500 ; i++){
        if(i % 23 === 0){
            console.log(i);
        }
    }
}
displayNumbersDivisible();

function displayNumbersDivisible(){
    let divisible = [];
    let somme = 0;
    for(let i = 0;i< 500 ;i++){
        if(i % 23 === 0){
            divisible.push(i);
            somme = somme +i;
        }
    }
    console.log(" Outcome :",divisible.join(" "));
    console.log("somme is" ,somme)

}

function displayNumbersDivisible(divisor = 23){
    let divisible = [];
    let somme = 0;
    for(let i = 0;i< 500 ;i++){
        if(i % divisor === 0){
            divisible.push(i);
            somme = somme +i;
        }
    }
    console.log(" Outcome :",divisible.join(" "));
    console.log("somme is" ,somme)

}
return
