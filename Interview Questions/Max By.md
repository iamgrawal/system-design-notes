# Max By

Premium

Languages

JSTS

Difficulty

Easy

Recommended duration to spend during interviews

10 mins

Users completed

367 completed

Implement a function `maxBy(array, iteratee)` that finds the element inside `array` with the maximum value after going through `iteratee`. The `iteratee` is invoked with one argument: (value).

## Arguments

1. `array` _(Array)_: The array to iterate over.
2. `iteratee` _(Function)_: The iteratee invoked per element.

## Returns

_`(*)`_: Returns the maximum value.

## Examples

maxBy([{ n: 1 }, { n: 2 }], (o) => o.n); // => { n: 2 }

maxBy([1, 2], (o) => -o); // => 1

The function should ignore elements where `iteratee` produces `null` or `undefined`.

maxBy([{ n: 1 }, { n: 2 }], (o) => o.m); // => undefined

## Resources

- [Lodash `_.maxBy`](https://lodash.com/docs/#maxBy)

# Similar Questions

- [Min By](https://www.greatfrontend.com/questions/javascript/min-by)
    
    Difficulty
    
    Easy
    
- [Group By](https://www.greatfrontend.com/questions/javascript/group-by)
    
    Difficulty
    
    Medium