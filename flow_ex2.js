function evenOrOdd(x) {
  if (Number.isInteger(x)){
    if (x % 2 === 0 ){ 
      console.log(`${x} is even`);
    } 
    else {
      console.log(`${x} is odd`);
    }
  }
  else {
    console.log('not a number')
  }
}

evenOrOdd('h');
