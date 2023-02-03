/***********************************************************************
Write a recursive function called `factorial` that takes an integer, `num`,
and returns the factorial of `num`. Assume the value of `num` is greater
than or equal to 1.

A factorial is the number you get when multiplying a number by itself minus one
all the way down to 1 (but not 0)! We represent them with an exclamation
point, also sometimes called a "bang" in programming.

5! = 5 x 4 x 3 x 2 x 1 = 120

Examples:

factorial(1); // 1
factorial(3); // 6
factorial(5); // 120
***********************************************************************/
// base case - when the number n is getting multiplied by reaches 1: num === 1;
// sub problems - n x n-1, x n-2, x n-3. n -1; to start with. Then -1 each time.
// recursive case - when the number n is getting multiplied by is greater than 1
// call it by saying result = n x factorial(n - 1)

let factorial = num => {

  if (num === 1) return 1;  // base case - when num is reduced down to 1

  return num * factorial(num - 1);  // recursive function call - num multiplied by one less
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = factorial;
} catch (e) {
  module.exports = null;
}
