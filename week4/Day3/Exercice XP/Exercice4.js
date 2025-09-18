class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);
//analyse de code 
// class person creer un modele de classe 
// constructeur pour donner une propriete a la classe
// on cree une instance de la classe person avec le mot cle new
// typeof pour connaitre le type de la variable member
// le type est un objet car une instance d'une classe est un objet
// console va afficher objet 