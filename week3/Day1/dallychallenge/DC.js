let sentence = "The movie is not that bad, I like it";
let worldNot = sentence.indexOf("not");
let worldBad = sentence.indexOf("bad");
console.log("your string is :",sentence);
console.log("position of not is : ", worldNot);
console.log("position of bad is : ",worldBad);

let worldGood = "good";
if(worldNot !== -1 && worldBad !==  -1 )
{
   sentence = sentence.slice(0,worldNot) + worldGood +sentence.slice(worldBad+3);
}
console.log("new sentence is :",sentence);

