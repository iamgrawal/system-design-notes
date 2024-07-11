# Function.prototype.bind

Premium

Author

[![Zhenghao He](https://www.greatfrontend.com/img/team/zhenghao.jpg)](https://www.linkedin.com/in/zhenghao-he/)

[Zhenghao He](https://www.linkedin.com/in/zhenghao-he/)[](https://www.linkedin.com/in/zhenghao-he/)

Senior Engineer, Ex-Amazon

Languages

JSTS

Difficulty

Easy

Recommended duration to spend during interviews

15 mins

Users completed

1982 completed

> The `Function.prototype.bind()` method creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

_Source: [Function.prototype.bind() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)_

Implement your own `Function.prototype.bind` without calling the native `bind` method. To avoid overwriting the actual `Function.prototype.bind`, implement the function as `Function.prototype.myBind`.

## Examples

const john = {

  age: 42,

  getAge: function () {

    return this.age;

  },

};

const unboundGetAge = john.getAge;

console.log(unboundGetAge()); // undefined

const boundGetAge = john.getAge.myBind(john);

console.log(boundGetAge()); // 42

# Companies

Amazon

# Try these questions next

- [Curry](https://www.greatfrontend.com/questions/javascript/curry)
    
    Difficulty
    
    Medium
    

# Similar Questions

- [Function.prototype.apply](https://www.greatfrontend.com/questions/javascript/function-apply)
    
    Difficulty
    
    Easy
    
- [Function.prototype.call](https://www.greatfrontend.com/questions/javascript/function-call)
    
    Difficulty
    
    Easy