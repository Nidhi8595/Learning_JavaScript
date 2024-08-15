
const accountId = 101
let accountEmail = "neelakshi@gmail.com"
var accountPassword = "12345"
accountCity = "Noida"

let accountState; // be default it's undefined yet

// accountId = 2 // not allowed since it's  a constant

accountEmail = "abc2gmail.com"
accountPassword = "54321"
accountCity = "Greater Noida"

console.log(accountId);

/* Prefer not to use var because it doesn't work with block scope and functional scope */


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) // o/p in the form of a table