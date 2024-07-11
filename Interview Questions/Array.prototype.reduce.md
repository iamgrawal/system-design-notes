# Array.prototype.reduce

Premium

Languages

JSTS

Difficulty

Easy

Recommended duration to spend during interviews

15 mins

Users completed

2198 completed

`Array.prototype.reduce` is a way of "reducing" elements in an array by calling a "reducer" callback function on each element of the array in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

Implement `Array.prototype.reduce`. To avoid overwriting the actual `Array.prototype.reduce` which is being used by the autograder, we shall instead implement it as `Array.prototype.myReduce`.

## Examples

[1, 2, 3].myReduce((prev, curr) => prev + curr, 0); // 6

[1, 2, 3].myReduce((prev, curr) => prev + curr, 4); // 10

## Notes

There are some nuances regarding how the `Array.prototype.reduce` function works and what values are being passed to the reducer callback. You are recommended to read the specification for `Array.prototype.reduce` on [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) before attempting.

# Companies

AmazonApple

# Try these questions next

- [Array.prototype.filter](https://www.greatfrontend.com/questions/javascript/array-filter)
    
    Difficulty
    
    Easy
    
- [Array.prototype.map](https://www.greatfrontend.com/questions/javascript/array-map)
    
    Difficulty
    
    Easy
    

# Similar Questions

- [Array.prototype.square](https://www.greatfrontend.com/questions/javascript/array-square)
    
    Difficulty
    
    Easy
    
- [Array.prototype.filter](https://www.greatfrontend.com/questions/javascript/array-filter)
    
    Difficulty
    
    Easy
    
- [Array.prototype.map](https://www.greatfrontend.com/questions/javascript/array-map)
    
    Difficulty
    
    Easy