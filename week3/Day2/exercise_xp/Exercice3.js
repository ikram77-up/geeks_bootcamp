function changeEnough(itemPrice, amountOfChange){
    
const arry = [0.25,0.10,0.05,0.01];
let result =0 ;
for(i =0 ; i< amountOfChange.length;i++){
   result += amountOfChange[i] * arry[i] ;
}
   console.log("result:", result);
//verifier si amountOfChange et superieur  de itemPrice si oui true si non dalse
if(result >= itemPrice){
        return true;
    }else{
        return false;
    }
}

console.log(changeEnough(14.11, [2,100,0,0])) ;
console.log(changeEnough(0.75, [0,0,20,5])) ;