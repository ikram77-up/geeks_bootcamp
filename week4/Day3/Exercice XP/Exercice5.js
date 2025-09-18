class Dog {
  constructor(name) {
    this.name = name;
  }
};
//le constructeur corresponds est 
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};
//car on utilise le mot cle super pour appeler le constructeur de la classe mere Dog et avant this size
//car on doit d'abord initialiser l'objet avec le constructeur de la classe mere avant d'ajouter des proprietes a l'objet