# Array.prototype.concat

Premium

Languages

JSTS

Difficulty

Medium

Recommended duration to spend during interviews

15 mins

Users completed

951 completed

The `Array.prototype.concat` method on JavaScript arrays is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

Implement `Array.prototype.concat`. To avoid overwriting the actual `Array.prototype.concat` which is being used by the autograder, we shall instead implement it as `Array.prototype.myConcat`.

## Examples

[1, 2, 3].myConcat([4, 5, 6]); // [1, 2, 3, 4, 5, 6]

[1, 2, 3].myConcat(4, 5, 6); // [1, 2, 3, 4, 5, 6]

[1, 2, 3].myConcat(4, [5, 6]); // [1, 2, 3, 4, 5, 6]

## Notes

As seen from the examples, `Array.prototype.concat` accepts a variadic number of arguments and depending on whether the argument is a primitive or an array/array-like object, they are handled differently. You are not required to handle arguments with the property `Symbol.isConcatSpreadable` set, but you are recommended to read the specification for `Array.prototype.concat` on [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) before attempting.

# Companies

Apple

# Try these questions next

- [Array.prototype.filter](https://www.greatfrontend.com/questions/javascript/array-filter)
    
    Difficulty
    
    Easy
    
- [Array.prototype.map](https://www.greatfrontend.com/questions/javascript/array-map)
    
    Difficulty
    
    Easy
    
- [Array.prototype.reduce](https://www.greatfrontend.com/questions/javascript/array-reduce)
    
    Difficulty
    
    Easy
    

# Similar Questions

- [Array.prototype.square](https://www.greatfrontend.com/questions/javascript/array-square)
    
    Difficulty
    
    Easy
    
- [Array.prototype.map](https://www.greatfrontend.com/questions/javascript/array-map)
    
    Difficulty
    
    Easy
    
- [Array.prototype.reduce](https://www.greatfrontend.com/questions/javascript/array-reduce)
    
    Difficulty
    
    Easy