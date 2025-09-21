function abbrevName (str){
if(!str) return "";
let partofstr = str.trim().split(" ");
if(partofstr.length === 1){return partofstr[0]
}
 return partofstr[0] + " " +partofstr[1][0].toUpperCase();
}
console.log(abbrevName("Robin Singh"));