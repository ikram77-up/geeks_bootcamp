const familly = {
    papa : "polat",
    mere: "ebru",
    enfant: "elif",
}
// afficher la cle 
let key;
for(key in familly){
    console.log("key df object familly:",key);
}
//afficher valeur 
for(let keyvalue in familly){
    console.log("value df object familly:",familly[keyvalue]);
}