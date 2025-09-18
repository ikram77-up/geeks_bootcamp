let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
let displayGroceries = (fruits) => {
    fruits.forEach(fruit => {
        console.log("Fruit:", fruit);
    });
}
displayGroceries(groceries.fruits);

let cloneGroceries= () => {
    let shopping = {...groceries};
    shopping.totalPrice = "35$";
    shopping.other.paid = false;
    console.log("shopping:", shopping);
    console.log("groceries:", groceries);
let user = client;
client = "Betty";
console.log("user is :", user);
console.log("client is :", client);
}
cloneGroceries();
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// non car car les variables sont indépendantes
//user st une copie de client donc va garder la valeur initiale de client
//et nous on a modifier variable client et non user 
// client c'est une valeur primitve

//totalprice ne sera pas modifié car let shopping = {...groceries}; fait une copie superficielle (shallow copy) de l'objet  shopping
//donc totalprice est une valeur primitive et sera copié dans shopping
//mais other est un objet donc la référence sera copiée dans shopping
//donc si on modifie other dans shopping cela modifiera aussi other dans groceries
