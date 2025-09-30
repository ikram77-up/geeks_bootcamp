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

let sequentialStart = async function () {
    console.log('==SEQUENTIAL START==');
    const slow = await resolveAfter2Seconds();
    console.log(slow);
    const fast = await resolveAfter1Second();
    console.log(fast);
}

sequentialStart()
// ANALYSE DE CODE
// on a une fonction resolveAfter2Seconds qui retourne une promesse
// on a une fonction resolveAfter1Second qui retourne une promesse
// on a une fonction sequentialStart qui deux promesses sont executees sequentiellement
// donc
// output est
// == SEQUENTIAL START ==
// starting slow promise
// slow promise is done
// slow
// starting fast promise
// fast promise is done
// fast