# Curry

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

15 mins

Users completed

2585 completed

Currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each takes a single argument.

Implement the `curry` function which accepts a function as the only argument and returns a function that accepts single arguments and can be repeatedly called until at least the minimum number of arguments have been provided (determined by how many arguments the original function accepts). The initial function argument is then invoked with the provided arguments.

## Examples

function add(a, b) {

  return a + b;

}

const curriedAdd = curry(add);

curriedAdd(3)(4); // 7

const alreadyAddedThree = curriedAdd(3);

alreadyAddedThree(4); // 7

function multiplyThreeNumbers(a, b, c) {

  return a * b * c;

}

const curriedMultiplyThreeNumbers = curry(multiplyThreeNumbers);

curriedMultiplyThreeNumbers(4)(5)(6); // 120

const containsFour = curriedMultiplyThreeNumbers(4);

const containsFourMulFive = containsFour(5);

containsFourMulFive(6); // 120

# Try these questions next

- [Flatten](https://www.greatfrontend.com/questions/javascript/flatten)
    
    Difficulty
    
    Medium
    
- [Promise.all](https://www.greatfrontend.com/questions/javascript/promise-all)
    
    Difficulty
    
    Medium
    
- [Todo List](https://www.greatfrontend.com/questions/user-interface/todo-list)
    
    Difficulty
    
    Medium
    

# Similar Questions

- [Function.prototype.bind](https://www.greatfrontend.com/questions/javascript/function-bind)
    
    Difficulty
    
    Easy
    
- [Curry II](https://www.greatfrontend.com/questions/javascript/curry-ii)
    
    Difficulty
    
    Medium