const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});
Promise.all([promise1,promise2,promise3])
.then(results => {
    console.log(results); 
  })
  .catch(error => console.log(error));
  // Promisse.all si tous les promisse est reussient il envoyer un tableau de tous les promisses 
  //si un des promisses a rejte tous rejeter 
  // comme on 'a dans ce programme tous les promisses reussient sans rejet de aucun 
  // donc promisse.all renvoyer un tableau de promisses qu'on'a 