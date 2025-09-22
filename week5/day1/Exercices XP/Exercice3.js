Promise.resolve(3)
 .then(result => console.log(result))
Promise.reject("boo!")
.catch(error => console.log(error))
