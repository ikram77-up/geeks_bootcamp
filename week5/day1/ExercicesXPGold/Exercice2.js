function timesTwoAsync(x) {
  return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);

Promise.all(promiseArr)
  .then(result => {
    console.log(result);
  });
  //analyse de code 
// On a une fonction timesTwoAsync qui retourne une promesse.
// On a un tableau arr, sur lequel on applique .map → ça produit un tableau de promesses.
// Promise.all attend que toutes les promesses réussissent.
// Si c’est le cas, Promise.all renvoie un tableau des résultats (ici [2,4,6]).
// Si l’une des promesses échoue, Promise.all rejette immédiatement avec cette erreur.