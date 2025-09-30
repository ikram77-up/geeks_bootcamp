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

let concurrentStart = async function () {
    console.log('==CONCURRENT START with await==');
    const slow = resolveAfter2Seconds();
    const fast = resolveAfter1Second();
    console.log(await slow);
    console.log(await fast);
}

setTimeout(concurrentStart, 4000)
//analyse de code
// on a la fonction resolveAfter2Seconds quiaffiche starting slow promise
// et retourne une promise avec un setTimeout de 2000ms avec la valeur slow
// qui affiche slow promise is done
// on a la fonction resolveAfter1Second quiaffiche starting fast promise
// et retourne une promise avec un setTimeout de 1000ms avec la valeur fast
// qui affiche fast promise is done
// la fonction concurrentStart est executee apres 4000ms
// la fonction resolveAfter1Second est executee apres 1000ms
//  la fonction resolveAfter2Seconds est executee apres 2000ms
// donc
// output est
// ==CONCURRENT START with await==
// starting slow promise
// starting fast promise
// slow promise is done
// fast promise is done
// slow
// fast