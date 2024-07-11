# Drop Right While

Premium

Languages

JSTS

Difficulty

Easy

Recommended duration to spend during interviews

10 mins

Users completed

1855 completed

Implement a function `dropRightWhile(array, predicate)` that creates a slice of `array` excluding elements dropped from the end. Elements are dropped until `predicate` returns falsey. Your function should not modify the original array.

#### Arguments

1. `array` _(Array)_: The array to query.
2. `predicate` _(Function)_: The function invoked per iteration. The function is invoked with three arguments: _(value, index, array)_. Note that the _array_ passed in is the original `array`.

#### Returns

_(Array)_: Returns the slice of `array`.

## Examples

dropRightWhile([1, 2, 3, 4, 5], (value) => value > 3); // => [1, 2, 3]

dropRightWhile([1, 2, 3], (value) => value < 6); // => []

dropRightWhile([1, 2, 3, 4, 5], (value) => value > 6); // => [1, 2, 3, 4, 5]

## Resources

- [Lodash `_.dropRightWhile`](https://lodash.com/docs/#dropRightWhile)

# Similar Questions

- [  
    ](https://www.greatfrontend.com/questions/javascript/drop-while)