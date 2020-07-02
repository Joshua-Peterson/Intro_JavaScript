let rlSync = require("readline-sync");
let firstNumber = rlSync.question("Enter the first number: \n");
let secondNumber = rlSync.question("Enter the second number: \n");
let product = firstNumber * secondNumber ;
console.log(`${firstNumber} * ${secondNumber} = ${product}`)