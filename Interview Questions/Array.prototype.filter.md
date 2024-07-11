# Array.prototype.filter

PremiumCompleted

Languages

JSTS

Difficulty

Easy

Recommended duration to spend during interviews

15 mins

Users completed

3569 completed

`Array.prototype.filter` creates a new array populated with the results of calling a provided function on every element in the calling array.

For sparse arrays (e.g. `[1, 2, , 4]`), the empty values should be ignored while traversing the array (i.e. they should not be in the resulting array).

Implement `Array.prototype.filter`. To avoid overwriting the actual `Array.prototype.filter` which is being used by the autograder, we shall instead implement it as `Array.prototype.myFilter`.

## Examples

[1, 2, 3, 4].myFilter((value) => value % 2 == 0); // [2, 4]

[1, 2, 3, 4].myFilter((value) => value < 3); // [1, 2]

## Notes

The filter callback function takes in more than just the element! There's also a second parameter for `Array.prototype.filter` as well. You are recommended to read the specification for `Array.prototype.filter` on [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) before attempting.

# Companies

AmazonApple

# Try these questions next

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