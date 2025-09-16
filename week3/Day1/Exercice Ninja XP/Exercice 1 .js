const personne1 = {
    Fullname: "Polat", 
    mass: 85, 
    height: 1.80,
    calBMI: function() {
        return (personne1.mass / (personne1.height * personne1.height)).toFixed(2);
    }
};

const personne2 = {
    Fullname: "Jihad",
    mass: 90,
    height: 1.75,
    calBMI: function() {
        return (personne2.mass / (personne2.height * personne2.height)).toFixed(2);
    }
};

   
   console.log(`${personne1.Fullname} a BMI ${personne1.calBMI()}`) ;
   console.log(`${personne2.Fullname} a BMI ${personne2.calBMI()}`) ;
    
if(personne1.calBMI() > personne2.calBMI()){
    console.log(`${personne1.Fullname} a BMI plus grand que ${personne2.Fullname}`);
}if(personne2.calBMI() > personne1.calBMI()){
    console.log(`${personne2.Fullname} a BMI plus grand que ${personne1.Fullname}`);
}else{
    console.log(`${personne1.Fullname} a meme  BMI  que ${personne2.Fullname}`);
}



