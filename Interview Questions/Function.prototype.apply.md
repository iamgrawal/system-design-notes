# Function.prototype.apply

Premium

Languages

JSTS

Difficulty

Easy

Recommended duration to spend during interviews

10 mins

Users completed

1240 completed

> The `Function.prototype.apply()` method calls the specified function with a given `this` value, and `arguments` provided as an array (or an array-like object).

_Source: [Function.prototype.apply() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/apply)_

Implement your own `Function.prototype.apply` without calling the native `apply` method. To avoid overwriting the actual `Function.prototype.apply`, implement the function as `Function.prototype.myApply`.

## Examples

function multiplyAge(multiplier = 1) {

  return this.age * multiplier;

}

const mary = {

  age: 21,

};

const john = {

  age: 42,

};

multiplyAge.myApply(mary); // 21

multiplyAge.myApply(john, [2]); // 84

# Similar Questions

- [Function.prototype.call](https://www.greatfrontend.com/questions/javascript/function-call)
    
    Difficulty
    
    Easy
    
- [Function.prototype.bind](https://www.greatfrontend.com/questions/javascript/function-bind)
    
    Difficulty
    
    Easy