(function(numberofchildren,partnersname ,geographiclocation, jobtitle){
    let sentence = `You will be a ${jobtitle} in ${geographiclocation}, and married to ${partnersname} with ${numberofchildren} kids.`

let par = document.createElement("p");
par.textContent = sentence
document.body.appendChild(par);
})(3,"demir","fas","Engineer");