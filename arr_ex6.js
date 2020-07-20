let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]


function oddLengths(arr) {
  let arrLen = arr.map(str => str.length);
  return arrLen.filter(num => num % 2 != 0);
}