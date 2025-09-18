function displayStudentInfo(objUser){
    //destructuring
    let {first, last} = objUser; //decompression of objUser
    console.log(`Your full name is ${first} ${last}`);
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});
