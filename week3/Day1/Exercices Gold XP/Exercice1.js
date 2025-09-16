let numbers = [123, 8409, 100053, 333333333, 7];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
        console.log(`${numbers[i]} est divisible par 3`);
    } else {
        console.log(`${numbers[i]} n'est pas divisible par 3`);
    }
}