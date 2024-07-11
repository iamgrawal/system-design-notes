# Function.prototype.call

Premium

Languages

JSTS

Difficulty

Easy

Recommended duration to spend during interviews

10 mins

Users completed

1188 completed

> The `Function.prototype.call()` method calls the function with a given `this` value and arguments provided individually.

_Source: [Function.prototype.call() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/call)_

Implement your own `Function.prototype.call` without calling the native `call` method. To avoid overwriting the actual `Function.prototype.call`, implement the function as `Function.prototype.myCall`.

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

multiplyAge.myCall(mary); // 21

multiplyAge.myCall(john, 2); // 84

# Similar Questions

- [Function.prototype.apply](https://www.greatfrontend.com/questions/javascript/function-apply)
    
    Difficulty
    
    Easy
    
- [Function.prototype.bind](https://www.greatfrontend.com/questions/javascript/function-bind)
    
    Difficulty
    
    Easy