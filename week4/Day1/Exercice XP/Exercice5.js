function weight(kg){
   return kg * 1000;
   
}
console.log(weight(5) + "g");

let weightfun = function(kg){
    return kg * 1000;  
}
console.log(weightfun(5) + "g");
//the difference between function declaration and function expression.
//declaration :hoisted always named  use function ,but expression : not hoisted can be anonymous use variable to store function more flexible
let weightfarrow = kg => kg * 1000;
console.log(weightfarrow(7) + "g");