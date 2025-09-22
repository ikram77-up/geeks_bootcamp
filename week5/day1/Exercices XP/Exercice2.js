function str(sring){
    return new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("succees")

    }, 4000);
    
}

)}
str()
 .then(result => console.log(result))
.catch(error => console.log(error))
  str()
 .then(result => console.log(result))
.catch(error => console.log(error))
  
