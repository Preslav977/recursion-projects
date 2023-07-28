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
