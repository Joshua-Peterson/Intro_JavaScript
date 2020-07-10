function stringCaps(text) {
  if (text.length > 10) {
    return text.toUpperCase();
  } else {
    return text ;
  }
}

console.log(stringCaps('hello world'));
console.log(stringCaps('goodbye'));