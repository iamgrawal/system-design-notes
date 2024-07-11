# Difference

Premium

Languages

JSTS

Difficulty

Easy

Recommended duration to spend during interviews

10 mins

Users completed

2357 completed

Implement a function `difference(array, values)` that creates an array of `array` values not included in the other given arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero) for equality comparisons. The order and references of result values are determined by the first array.

## Arguments

1. `array` _(Array)_: The array to inspect.
2. `values` _(Array)_: The values to exclude.

## Returns

_(Array)_: Returns the new array of filtered values.

## Examples

difference([1, 2, 3], [2, 3]); // => [1]

difference([1, 2, 3, 4], [2, 3, 1]); // => [4]

difference([1, 2, 3], [2, 3, 1, 4]); // => []

difference([1, , 3], [1]); // => [3]

The function should return the original array values if `values` is empty.

difference([1, 2, 3], []); // => [1, 2, 3]

## Resources

- [Lodash `_.difference`](https://lodash.com/docs/#difference)

# Similar Questions

- [Chunk](https://www.greatfrontend.com/questions/javascript/chunk)
    
    Difficulty
    
    Easy
    
- [Compact](https://www.greatfrontend.com/questions/javascript/compact)
    
    Difficulty
    
    Easy
    
- [Get](https://www.greatfrontend.com/questions/javascript/get)
    
    Difficulty
    
    Easy