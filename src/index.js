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

// implemented algorithm merge sort using recursion
// the function merge is helper function
// which takes two arrays as parameters
// then creating new variables using spread operator
// to save what elements the two arrays has
// using i, j as indexes to increment
// while looping though both arrays length
// checking if the firstArray has smaller elements
// if it does push them into the new array
// else push the secondArray elements
// then using two loops to push the remaining
// elements the if statement is no longer true
// that why it will not "ignore" the other elements
// that are not pushed

function merge(firstArray, secondArray) {
  const firstArrayCopy = [...firstArray];
  const secondArrayCopy = [...secondArray];
  let i = 0;
  let j = 0;

  const newArray = [];

  while (i < firstArrayCopy.length && j < secondArrayCopy.length) {
    if (firstArrayCopy[i] < secondArrayCopy[j]) {
      newArray.push(firstArrayCopy[i++]);
    } else {
      newArray.push(secondArray[j++]);
    }
  }

  for (; i < firstArrayCopy.length; i++) {
    newArray.push(firstArrayCopy[i]);
  }

  for (; j < secondArrayCopy.length; j++) {
    newArray.push(secondArrayCopy[j]);
  }
  return newArray;
}

// mergeSort takes an parameter
// since using recursion there is a need for base case
// the base case here is if there is one element return
// since there is no need to sort one elements in the mergeSort algorithm
// else find the mid point of the array
// create variables for the left subarray
// and the right subarray
// another two variables which will divide the fourth element arrays
// in this cate to two elements and then to one
// and merge the sorted result of the two halves
// into one sort array

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  const middle = array.length / 2;
  const leftHalf = array.slice(0, middle);
  const rightHalf = array.slice(middle);
  const divideLeftHalf = mergeSort(leftHalf);
  const divideRightHalf = mergeSort(rightHalf);
  return merge(divideLeftHalf, divideRightHalf);
}

console.log(mergeSort([5, 17, 71, 12, 66, 9, 0, 1]));
