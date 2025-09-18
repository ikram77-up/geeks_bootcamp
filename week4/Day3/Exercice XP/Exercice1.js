const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
//analyse de code
//on a un objet imbrique dans un autre objet et un tableau imbrique dans l'objet
//destructuring
//decompression de l'objet person
//on a cree des variables qui prennent les valeurs des proprietes de l'objet person
//on a utilise la syntaxe de destructuring pour acceder aux proprietes imbriquees
//on a utilise la syntaxe de destructuring pour acceder aux elements du tableau imbrique
//dans l'objet