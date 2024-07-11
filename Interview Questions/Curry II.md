# Curry II

Premium

Author

[![Yangshun Tay](https://www.greatfrontend.com/img/team/yangshun.jpg)](https://www.linkedin.com/in/yangshun)

[Yangshun Tay](https://www.linkedin.com/in/yangshun)[](https://www.linkedin.com/in/yangshun)

Ex-Meta Staff Engineer

Languages

JSTS

Difficulty

Medium

Recommended duration to spend during interviews

20 mins

Users completed

895 completed

**Note:** This is an advanced version of [Curry](https://www.greatfrontend.com/questions/javascript/curry), you should complete that first before attempting this question.

Currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each takes a single argument.

Implement the `curry` function which accepts a function as the only argument and returns a function that accepts any number of arguments (vs only one argument at a time in [Curry](https://www.greatfrontend.com/questions/javascript/curry)) and returns a function which can be repeatedly called until at least the minimum number of arguments has been provided (determined by how many arguments the original function accepts). The initial function argument is then invoked with the provided arguments.

## Examples

function addTwo(a, b) {

  return a + b;

}

const curriedAddTwo = curry(addTwo);

curriedAddTwo(3)(4); // 7

curriedAddTwo(3, 4); // 7

const alreadyAddedThree = curriedAddTwo(3);

alreadyAddedThree(4); // 7

function multiplyThree(a, b, c) {

  return a * b * c;

}

const curriedMultiplyThree = curry(multiplyThree);

curriedMultiplyThree(4)(5)(6); // 120

curriedMultiplyThree(4)(5, 6); // 120

curriedMultiplyThree(4, 5)(6); // 120

curriedMultiplyThree(4, 5, 6); // 120

const containsFour = curriedMultiplyThree(4);

const containsFourMulFive = containsFour(5);

containsFourMulFive(6); // 120

# Try these questions next

- [Curry III](https://www.greatfrontend.com/questions/javascript/curry-iii)
    
    Difficulty
    
    Hard
    

# Similar Questions

- [Curry](https://www.greatfrontend.com/questions/javascript/curry)
    
    Difficulty
    
    Medium