/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.

Examples:
iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
iceCreamShop(['moose tracks'], 'moose tracks'); // true
iceCreamShop([], 'honey lavender'); // false
***********************************************************************/
// need to compare each item in the array to the favorite flavor - if it matches return true. If none match return false.
// to work through array need base case of i >= array length and return false if gets to here with no match
// recursive case i < array length.
// recursive step i + 1
// each call need to check item against favorite, return true if matches

let iceCreamShop = (flavors, favorite, i = 0) => {

  if (i >= flavors.length) return false;  // base case, has reached end of array

  let flavor = flavors[i];
  if (flavor === favorite) return true;   // check flavor against favorite

  return iceCreamShop(flavors, favorite, i + 1); // call the function recursively
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = iceCreamShop;
} catch (e) {
  module.exports = null;
}
