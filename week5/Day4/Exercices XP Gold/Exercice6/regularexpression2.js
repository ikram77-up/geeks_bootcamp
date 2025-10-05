import readlineSync from 'readline-sync';


const fullName = readlineSync.question('Enter your full name ": ');
const expressionregex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
if (expressionregex.test(fullName)) {
    console.log('Name is valid');
} else {
    console.log('Name is not valid');
}

