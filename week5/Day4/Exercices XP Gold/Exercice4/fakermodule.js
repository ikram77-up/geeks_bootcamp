import { faker } from "@faker-js/faker";
const users = [];
function generateFakeUsers() {
    for (let i = 0; i < 10; i++) {
        users.push({
            Name: faker.person.fullName(),
            adress_street: faker.location.streetAddress(),
            Country: faker.location.country(),

        });
    }
    return users;
}
console.log(generateFakeUsers());