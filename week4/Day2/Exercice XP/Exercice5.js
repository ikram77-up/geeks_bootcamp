const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const combin = epic.reduce((accumulator, currentValue) => accumulator + ' ' + currentValue);

console.log(combin);