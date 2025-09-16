let colors = ["black", "red", "green", "yellow","blue"];
//1-
for (let i =0;i< colors.length;i++){
    //augmentation i+1
    console.log(`my choice ${i + 1}: ${colors[i]}`);
}

//-2 
let suffixes =("st","nd","rd","th","th");
for(let i=0 ; i < colors.length;i++){
    let mychoice = i+1 ;
    let sfx = suffixes[i] ||"th";
    console.log(`my choice ${mychoice} ${sfx}: ${colors[i]}`);
}

