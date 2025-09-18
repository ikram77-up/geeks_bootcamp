// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
//ici on a declare 3 array et on a utilise l'operateur spread pour
// inserer les elements des array vegetables et fruits dans le array result 
// spead sert a deplier un tableau dans un autre 
// ------2------
const country = "USA";
console.log([...country]);
//dans ce cas la operateur spread deplie chaque lettre du mot USA ['U', 'S', 'A']

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);
// ici on declare un tableau avec operateur spread mais vide danc return undefined