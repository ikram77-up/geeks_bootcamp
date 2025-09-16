const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
const shoppingList = ["banana","orange","apple"];
function  myBill(){
    let stk ;
    let price = 0;
    for (let i =0 ; i< shoppingList.length ; i++){
        stk = shoppingList[i];
        if(stk in stock && stock[stk] > 0){
            price = price + prices[stk];
            stock[stk]--;
        }
    }
    console.log("afficher prix des articles",price)
}
myBill();


    let item;
    for (let i =0 ; i< shoppingList.length ; i++){
        item = shoppingList[i];
        if(item in stock && stock >0){
            stock[item]--;
        }
        console.log("display decrease the item’s stock by 1 ",stock[item]--);
    }
    


