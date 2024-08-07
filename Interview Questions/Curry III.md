# Curry III

Premium

Author

[![Yangshun Tay](https://www.greatfrontend.com/img/team/yangshun.jpg)](https://www.linkedin.com/in/yangshun)

[Yangshun Tay](https://www.linkedin.com/in/yangshun)[](https://www.linkedin.com/in/yangshun)

Ex-Meta Staff Engineer

Languages

JSTS

Difficulty

Hard

Recommended duration to spend during interviews

20 mins

Users completed

193 completed

**Note:** This is an advanced version of [Curry II](https://www.greatfrontend.com/questions/javascript/curry-ii), you should complete that first before attempting this question. Also, this is a hard question and resembles a brainteaser more than an actual question candidates are expected to solve. However, solving this question is rewarding and is sure to improve your knowledge of JavaScript.

Currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each takes a single argument.

Implement the `curry` function which accepts a function as the only argument and returns a function that accepts a variadic number of arguments (vs only one argument at a time in [Curry](https://www.greatfrontend.com/questions/javascript/curry) and a fixed number of arguments in [Curry II](https://www.greatfrontend.com/questions/javascript/curry-ii)) and returns a function which can be repeatedly called.

## Expected Behaviour of Output

When the returned function is in an expression that suggests the value should be a string or a number, the initial function argument is then invoked with the provided arguments and the result is used as the value.

## Examples

function multiply(...numbers) {

  return numbers.reduce((a, b) => a * b, 1);

}

const curriedMultiply = curry(multiply);

const multiplyByThree = curriedMultiply(3);

console.log(multiplyByThree); // 3

console.log(multiplyByThree(4)); // 12

const multiplyByFifteen = multiplyByThree(5);

console.log(multiplyByFifteen); // 15

console.log(multiplyByFifteen(2)); // 30

console.log(curriedMultiply(1)(2)(3)(4)); // 24

console.log(curriedMultiply(1, 2, 3, 4)); // 24

## Hint

Look up the [`Symbol.toPrimitive`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive), [`Object.prototype.toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) and [`Object.prototype.valueOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) functions.

# Similar Questions

- [Curry](https://www.greatfrontend.com/questions/javascript/curry)
    
    Difficulty
    
    Medium
    
- [Curry II](https://www.greatfrontend.com/questions/javascript/curry-ii)
    
    Difficulty
    
    Medium