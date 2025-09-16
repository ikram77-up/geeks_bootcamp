function calculeSphere(){


    
    let inpR = document.getElementById("radius");
    let inpV = document.getElementById("volume");
    let btn = document.getElementById("submit");
     btn.addEventListener("click",function(event){
        event.preventDefault();
        let rds = parseFloat(inpR.value);
    if(isNaN(rds) || rds < 0){
        console.log("please enter number when value is not null ");
    }else{
            let calcul = (4/3) * Math.PI * Math.pow(rds,3);

    console.log(calcul );
    inpV.value =calcul.toFixed(2);
    }
    });
}
calculeSphere();