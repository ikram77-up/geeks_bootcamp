let age = [20,5,12,43,98,55];
let sum =0;
for(let i = 0;i <age.length;i++){
    sum =sum+age[i];
    
}
console.log("la somme de tous les nombres dans age est : ", sum);
let ageMax = age[0];
for(let i = 0;i <age.length;i++){


    if(ageMax < age[i]){
        ageMax = age[i];

    }
}
console.log("the highest age in the array is :" , ageMax);

    

