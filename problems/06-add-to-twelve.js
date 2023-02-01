/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/

let addToTwelve = (arr, i = 0) => {
  if (i >= arr.length) return false;

  if ((arr[i] + arr[i + 1] === 12) || addToTwelve(arr, i + 1)) {
    return true;
  }

  return false;

}

// alternative method - decrease array
// base case - 1 or fewer elements left in array
// each call, try add last two elements in array
// return true if they add up to 12
// remove one element and call function etc.

// let addToTwelve = (arr) => {

//   if (arr.length === 1) return false;

//   if (arr[arr.length -1] + arr[arr.length - 2] === 12) return true;

//   arr.pop();

//   return addToTwelve(arr);

// }



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
