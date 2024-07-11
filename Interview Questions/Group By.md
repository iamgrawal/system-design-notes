# Group By

Premium

Languages

JSTS

Difficulty

Medium

Recommended duration to spend during interviews

15 mins

Users completed

675 completed

Implement a function `groupBy(array, iteratee)` that takes a array and an `iteratee` function, and groups the values in the array based on the `iteratee`.

groupBy(array, iteratee);

## Arguments

1. `array` _(Array)_: The array to iterate over.
2. `iteratee` _(Function)_: The iteratee to transform elements. The function is invoked with one argument: (value).

## Returns

_`(Object)`_: Returns the composed aggregate object.

## Examples

groupBy([6.1, 4.2, 6.3], Math.floor);

// => { '4': [4.2], '6': [6.1, 6.3] }

groupBy([{ n: 3 }, { n: 5 }, { n: 3 }], (o) => o.n);

// => { '3': [{ n: 3 }, { n: 3 }], '5': { n: 5 } }

The function should return `{}` when `array` is empty and treat `null` / `undefined` keys after going through `iteratee` as it is.

groupBy([], (o) => o); // => {}

groupBy([{ n: 1 }, { n: 2 }], (o) => o.m); // => { undefined: [{ n: 1 }, { n: 2 }] }

## Resources

- [Lodash `_.groupBy`](https://lodash.com/docs/#groupBy)

# Similar Questions

- [Count By](https://www.greatfrontend.com/questions/javascript/count-by)
    
    Difficulty
    
    Medium