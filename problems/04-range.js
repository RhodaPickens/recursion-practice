/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/
// works through numbers from start num to end num and adds to an array
// except if last number is less than start num return empty array
// base case - num === end num, then return array
// recursive step - num + 1
// recursive case - num < end num
// each call - push number to new array, then call the function incrementing start number

let range = (startNum, endNum) => {
  let allNums = [];

  if (endNum < startNum) return [];
  if (startNum === endNum) return allNums;

  return [startNum, ...range(startNum + 1, endNum)]
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
