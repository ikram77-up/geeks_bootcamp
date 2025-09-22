function compareToTen(number) {
    return  new Promise(function (resolve, reject) {
    if (number <= 10) {
        resolve("number is less than or equal to 10");
    } else {
        reject("number is greater than 10");
    }
});
    }
    compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error))
  
  //In the example, the promise should resolve
  compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error))