//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// Symbols - even if the value is same, they are still different
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber = 3456543576654356754n // bigInt



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["aaa", "bbb", "ccc"]; // array

// objects
let myObj = {
    name: "nidhi",
    age: 18,
}

// functions
const myFunction = function(){
    console.log("Hello world");
}

// Stack & Heap Memory

// Stack -> primitive data types
// copies are stored and changes are made accordingly as needed
let name = "Nidhi"
let name2 = name
name2 = "Neelakshi"

console.log(name)
console.log(name2)

// Heap -> non-primitive data types
// changes are always made in the original memory
let obj1 = {
    name : "ABC",
    id : 12345
}

let obj2 = obj1

obj2.name = "XYZ"

// Both the o/ps are same
console.log(obj1.name)
console.log(obj2.name)
