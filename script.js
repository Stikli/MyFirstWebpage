function FizzBuzz(inputNumbers) {
  for (let i = 0; i < inputNumbers.length; i++) {
    if (inputNumbers[i] % 3 === 0 && inputNumbers[i] % 5 === 0) {
      console.log("FizzBuzz");
    } else if (inputNumbers[i] % 3 === 0) {
      console.log("Fizz");
    } else if (inputNumbers[i] % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(inputNumbers[i]);
    }
  }
}

FizzBuzz([3, 9, 6, 55, 4, 3, 2, 4, 15, 10, 0, 999, 12, 5]);
