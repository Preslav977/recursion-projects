// fibonacci implemented imperative
// using an array with the numbers 0, 1
// while loop that checks if the numbers length
// is smaller than the numbers
// if it is push the numbers array length - 2 plus the sum of array length -1
// since fibonacci returns the is the sum of the previous two numbers
// it will return in the array the elements

function imperativeFibonacci(num) {
  const numbers = [0, 1];

  while (numbers.length < num) {
    numbers.push(numbers[numbers.length - 2] + numbers[numbers.length - 1]);
  }
  return numbers;
}

console.log(imperativeFibonacci(8));

// fibonacci implemented recursive
// using as parameters that will point to the
// first and second element of the array
// with condition that check if the secondNum length is bigger and
// equal to the firstNum return the secondNum
// else return the firstNum and the secondNum using spread operator
// that will copy the elements of the secondNum which will calculate
// the sum of the secondNum length - 2 and the secondNum length - 1
// which will return the previous numbers of fibonacci sequence

const recursiveFibonacci = (firstNum, secondNum = [0, 1]) => {
  if (secondNum.length >= firstNum) return secondNum;
  return recursiveFibonacci(firstNum, [
    ...secondNum,
    secondNum[secondNum.length - 2] + secondNum[secondNum.length - 1],
  ]);
};

console.log(recursiveFibonacci(8));
