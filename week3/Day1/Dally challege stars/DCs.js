let pattern =" ";
for(let i = 0;i<6;i++){
pattern = pattern + "*";
console.log(pattern);
}

for(i=0;i<6;i++){
    let patternbellow = " ";
    for(let k =0;k<=i;k++){
         patternbellow = patternbellow +"*";
    }
    console.log(patternbellow);
}