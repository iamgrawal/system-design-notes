# Intersection

Premium

Languages

JSTS

Difficulty

Easy

Recommended duration to spend during interviews

10 mins

Users completed

1008 completed

Implement a JavaScript function `intersection(arrays)` that takes multiple arrays as input and returns a new array containing the unique values that are present in all given arrays [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero) for equality comparisons. The order and references of result values are determined by the first array.

intersection(...arrays);

## Arguments

1. `[arrays]` _(...Array)_: The arrays to perform the intersection on.

## Returns

_(Array)_: Returns a new array containing the unique values present in all given arrays.

## Examples

const arr1 = [1, 2, 3];

const arr2 = [2, 3, 4];

const arr3 = [3, 4, 5];

intersection(arr1, arr2, arr3); // => [3]

## Constraints

- The input arrays may contain any type of values.
- The input arrays may have varying lengths.
- The input arrays may be empty.
- The function should not modify the original arrays.

## Resources

- [Lodash `_.intersection`](https://lodash.com/docs/#intersection)

# Try these questions next

- [Intersection By](https://www.greatfrontend.com/questions/javascript/intersection-by)
    
    Difficulty
    
    Medium
    
- [Intersection With](https://www.greatfrontend.com/questions/javascript/intersection-with)
    
    Difficulty
    
    Medium