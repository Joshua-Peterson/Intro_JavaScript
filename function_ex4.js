let oneFact = times(1, 1);
let twoFact = times(2, 1);
let threeFact = times(3, 2);
let fourFact = times(4, threeFact);
let fiveFact = times(5, fourFact);






function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}