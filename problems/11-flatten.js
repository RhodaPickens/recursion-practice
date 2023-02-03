/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns an array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

const flatten = arr => {

  if (arr.length === 0) {         // base case - when we get an empty array
    return [];
  }
  // work with the input in two parts

  // if the first element is an array, flatten it
  // else just use it to start result array
  let start = Array.isArray(arr[0]) ? [...flatten(arr[0])] : [arr[0]];

  // and the rest - every element past the first
  let rest = arr.slice(1);

  // return the start and rest of array together
  return start.concat(flatten(rest));
}

// OR----

//  let flatten = arr => {

//   return arr.flat(Infinity);

// }

//OR------------------

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
