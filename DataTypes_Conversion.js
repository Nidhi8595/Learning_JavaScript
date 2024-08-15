let name = "Nidhi"

console.log(typeof name)
//console.log(typeof(name))

let valueInNumber = Number(name)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// While converting into numbers :-
// "10" -> 10
// "10abc" -> NaN i.e. not a number
//  true -> 1 
//  false -> 0


let isLoggedIn = "Nidhi"

let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn);

// While converting into Boolean :-
// 1 -> true; 
// 0 -> false
// "" -> false i.e. empty string
// "Nidhi" -> true

let someNumber = 10

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// Arithmetic Operations :-
let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

// String operations :-
let str1 = "hello"
let str2 = " there"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2); 
console.log(1 + 2 + "2"); // firstly arithmetic


console.log( (3 + 4) * 5 % 3); // it's better to avoid using expressions

// Boolean operations :-
console.log(+true); // converts to 1
console.log(+""); // converts to 0


let num1, num2, num3

num1 = num2 = num3 = 2 + 2 

let gameCounter = 100
++gameCounter; // prefix increment
console.log(gameCounter);
