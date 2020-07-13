function factorial(num) {
  let result = 1
  if (num === 0) {
    return 1
  }
  else {
    for (let i = 1; i <= num; i += 1) {
       result = i * result;
    }
    return result
  }
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));