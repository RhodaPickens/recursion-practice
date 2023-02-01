/***********************************************************************
Write a recursive function called `exponent` that takes two integers,
`num` and `power`, and returns `num` raised to the `power`th power. Your
function should work when `num` or `power` are positive OR negative.

Exponents are used to represent a number being multiplied by itself a
given number of times:

4^3 = 4 x 4 x 4 = 64

Negative exponents represent the same action, but in the denominator instead
of the numerator:

4^-3 = (1/4) * (1/4) * (1/4) = 1/64.

Examples:

exponent(3, 2); // 9
exponent(2, -2); // 1/4 (or 0.25)
exponent(5, 5); // 3125
***********************************************************************/
// if positive then num * num as many times as power says
// if negative then 1 / num * 1 / num as many times as power says
//  could set condition to be 1 / num if negative.
// then set result to equal num * function call with power decreased by 1
//base case when product = 1 return result

function exponent(num, exp) {

  if (exp < 0) {            // convert num to 1/num if exp is negative
    num = 1 / num;
    exp = exp * -1;       // convert exp to positive number for stepping down
  }
  if (exp === 0) return 1;  // base case - when exp gets down to 0 it returns 1 and then multiplies back up the stack

  return num * exponent(num, exp - 1);  // steps down by reducing exp

}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = exponent;
} catch (e) {
  module.exports = null;
}
