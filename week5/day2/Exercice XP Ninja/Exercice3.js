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

let parallel = async function () {
    console.log('==PARALLEL with await Promise.all==');
    // Start 2 "jobs" in parallel and wait for both of them to complete
    await Promise.all([
        (async () => console.log(await resolveAfter2Seconds()))(),
        (async () => console.log(await resolveAfter1Second()))()
    ]);
}

setTimeout(parallel, 5000)

//analyse de la code
//on a une fonction resolveAfter2Seconds qui retourne une promesse
//on a une fonction resolveAfter1Second qui retourne une promesse
//on a une fonction parallel qui retourne une promesse
//les deux promises sont executees en concurrence avec Promise.all
// la fonction parallel est executee apres 5000ms
// la fonction resolveAfter1Second est executee apres 1000ms
//  la fonction resolveAfter2Seconds est executee apres 2000ms
// donc
//output est
//== PARALLEL with await Promise.all ==
//starting slow promise
// starting fast promise
// fast promise is done
// fast
// slow promise is done
// slow
