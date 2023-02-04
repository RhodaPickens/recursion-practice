/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/


let subsets = arr => {

  const subArray = [[]];  // intialize new array with [] as first subset

  if (arr.length === 0) return subArray; // base case - array is empty

  for (let i = 0; i < arr.length; i++) {  // loops through array
    subArray.push(...subsets(arr.slice(i + 1)).map(subArray => [arr[i], ...subArray]))
    // recursive function called on slice of array starting from next index
    // concatenated using map method which is applied to the new subArray
    // returns new array with current element and elements of subArray
  }
  return subArray;

}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
