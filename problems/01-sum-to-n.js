/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/
/* Understand the problem - if 5 is the number, answer would be 1+2+3+4+5
sum everything below number.
If number below 0 return null.
Plan - check if number is below 0 first, and return null
      - each call (recursive case is num > 0) add number to sum
      - step down by subtracting one from the number each time (recursive step)
      - once number = 0 return sum and stop recursing. (base case) */

let sumToN = num => {
  let sum = 0;
  if (num < 0) return null;
  if (num === 0) return sum;          // base case - stops recursing

  return sum = num + sumToN(num - 1); // add num to sum and call itself to add next number
};


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
