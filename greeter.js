let rlSync = require("readline-sync");
let firstName = rlSync.question("What is your name? \n");
let lastName = rlSync.question("What is you last name \n")
console.log(`Hello, ${firstName} ${lastName}!`);
