/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/


let reverse = string => {

  if (string.length <= 1) return string;      // base case - when string is sliced down to one letter

  return string[string.length -1] + reverse(string.slice(0, string.length -1));   // creates new string from the end

}                                                                                // taking a letter off each time



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
