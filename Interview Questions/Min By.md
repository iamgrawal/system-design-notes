# Min By

Languages

JSTS

Difficulty

Easy

Recommended duration to spend during interviews

10 mins

Users completed

1409 completed

Implement a function `minBy(array, iteratee)` that finds the element inside `array` with the minimum value after going through `iteratee`.

## Arguments

1. `array` _(Array)_: The array to iterate over.
2. `iteratee` _(Function)_: The iteratee invoked per element, which is a function that accepts one argument: _(value)_.

## Returns

_`(*)`_: Returns the minimum value.

## Examples

minBy([2, 3, 1, 4], (num) => num); // => 1

minBy([{ n: 1 }, { n: 2 }], (o) => o.n); // => { n: 1 }

The function should ignore elements where `iteratee` produces `null` or `undefined`.

minBy([{ n: 1 }, { n: 2 }], (o) => o.m); // => undefined

## Resources

- [Lodash `_.minBy`](https://lodash.com/docs/#minBy)

# Similar Questions

- [Max By](https://www.greatfrontend.com/questions/javascript/max-by)
    
    Difficulty
    
    Easy
    
- [Group By](https://www.greatfrontend.com/questions/javascript/group-by)
    
    Difficulty
    
    Medium