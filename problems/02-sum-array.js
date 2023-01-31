/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/
/* Understand the problem - need to add each value in the array together and return the sum
Come up with a plan - recursive step: i + 1 to move the index up the array toward the end
                    - base case: i >= array.length i.e. its reached the end
                    - recursive case: i < array.length
                    - each call: add current index plus call next index
                    - to end, return sum  */

let sumArray = (arr, i = 0) => {  // default parameter to track index
  let sum = 0;

  if (i >= arr.length) return sum;  // base case: index has reached end of array

  return sum = arr[i] + sumArray(arr, i + 1); // recursive step
};


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
