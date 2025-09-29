let resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

let resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};

// This function does not handle errors. See warning below!
let parallelPromise = function () {
    console.log('==PARALLEL with Promise.then==');
    resolveAfter2Seconds().then((message) => console.log(message));
    resolveAfter1Second().then((message) => console.log(message));
}

setTimeout(parallelPromise, 13000)

// analyse de code
//on a une fonction resolveAfter2Seconds qui retourne une promesse
//on a une fonction resolveAfter1Second qui retourne une promesse
//on a une fonction parallelPromise qui retourne une promesse
//les deux promises sont executees en concurrence avec Promise.all
// la fonction parallelPromise est executee apres 13000ms
// la fonction resolveAfter1Second est executee apres 1000ms
//  la fonction resolveAfter2Seconds est executee apres 2000ms
// donc
//output est
//==PARALLEL with Promise.then==
//starting fast promise
//starting slow promise
//fast promise is done
//fast
//slow promise is done
//slow
