function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
//analyse de code on' a fonction asyncCall qui retourne une promesse
//  et on a une fonction resolveAfter2Seconds qui retourne une promesse
// on a une fonction asyncCall qui appelle la fonction 
// resolveAfter2Seconds qui retourne une promesse avec un setTimeout de 2000ms
// la promesse qui renvoie resolved est stockee dans la variable result
//the output is
//calling 
//resolved