const score = 400
console.log(score)

const balance = new Number(100) // specifying it to be a number
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // decimals

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // readable


console.log(Math); // Maths object
console.log(Math.abs(-4)); // absolute value
console.log(Math.round(4.6)); // nearest integer
console.log(Math.ceil(4.2)); // upper range
console.log(Math.floor(4.9)); // lower range
console.log(Math.min(4, 3, 6, 8)); // Minimum amongst
console.log(Math.max(4, 3, 6, 8)); // Maximum amongst

console.log(Math.random());
console.log((Math.random()*10) + 1); 
console.log(Math.floor(Math.random()*10) + 1);

// Specified range
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)