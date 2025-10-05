function extractNumber(str) {
    const numbers = str.match(/\d+/g);
    if (!numbers) return [];
    return numbers.map(Number);
}
console.log(extractNumber("k5k3q2g5z6x9bn"));