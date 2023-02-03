/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/
// check if each index is followed by one that's larger than it - if not then return false
// base case, end of array - i.e. i = arr.length -1
// each call - check i < i + 1, then increase i and do the same

let isSorted = (array, i = 0) => {
  if (i >= array.length) return true;         // base case - end of array

  if (array[i] > array[i + 1]) return false;  // check to see if current number is less than next number

  return isSorted(array, i + 1);              // call function again with increasing index
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
