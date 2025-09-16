arry =[20,70,65,80,90,40]
function findAvg(gradesList){
    let sum = 0;
    for(i=0;i<gradesList.length;i++){
        sum += gradesList[i];
    }
    let result = sum / gradesList.length;
        console.log(`votre moyen est : ${result.toFixed(2)}`);

        if(result > 65){
        console.log("felicitations vous avez reussi");
    }
    else{
        console.log("desole vous avez echoue");}
}
findAvg(arry); 

function Calculmoyen(gradesListM){
    let summ = 0;
    for(i=0;i<gradesListM.length;i++){
        summ += gradesListM[i];
    }
    return summ / gradesListM.length;
}

function checkMoyen(gradesListM){
    let moyen = Calculmoyen(gradesListM);
    console.log(`votre moyen est : ${moyen.toFixed(2)}`);
    if(moyen > 65){
        console.log("felicitations vous avez reussi");
    }
    else{
        console.log("desole vous avez echoue");
    }
}
checkMoyen(arry);