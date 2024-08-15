console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

// automatically converts into numbers : although should be avoided
console.log("2" > 1);
console.log("02" > 1);

// every operator except == converts null to 0
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === compares value as well as data type

console.log("2" === 2); 