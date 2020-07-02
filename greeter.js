let rlSync = require("readline-sync");
let firstName = rlSync.question("What is your first name? \n");
let lastName = rlSync.question("What is you last name \n");
console.log(`Hello, ${firstName} ${lastName}!`);
console.log(greeter());


function greeter() {
    let firstName = rlSync.question("What is your first name? \n");
    let lastName = rlSync.question("What is you last name \n");
    return `${firstName} ${lastName}`;
}

