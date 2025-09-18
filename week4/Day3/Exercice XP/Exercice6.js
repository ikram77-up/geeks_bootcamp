//[2] === [2] //false car les tableaux sont des objets et les objets sont compares par reference et non par valeur
//{} === {} //false car les objets sont compares par reference et non par valeur

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)
//object2 a number 4 car object2 est une reference a object1
//donc toute modification de object1 affecte object2
console.log(object3.number)
//object3 a number 4 car object3 est une reference a object2 qui est une reference a object1
//donc toute modification de object1 affecte object2 et object3
console.log(object4.number)
//object4 a number 5 car object4 est un nouvel objet independant de object1, object2 et object3
//donc toute modification de object1 n'affecte pas object4

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}
class Mamal extends Animal {
    constructor(name, type, color,sound) {
        super(name, type, color);
        this.sound = sound;
    }
    makeSound() {
        return this.sound;
    }
}
const farmerCow  = new Mamal("korrzit", "cat", "brown and white","moooo");
console.log(`${farmerCow.makeSound()}! I'm a ${farmerCow.type}, named ${farmerCow.name} and I'm ${farmerCow.color}`);
