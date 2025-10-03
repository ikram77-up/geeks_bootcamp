import { persons } from './data.js';
function calculateAverage() {
    let totalAge = 0;
    for (let i = 0; i < persons.length; i++) {
        if (persons[i].age === undefined) {
            persons[i].age = 0;
        } else {
            totalAge = totalAge + persons[i].age;
        }

    }
    return totalAge / persons.length;

}

console.log(calculateAverage());