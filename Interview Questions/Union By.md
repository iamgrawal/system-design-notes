# Union By

Premium

Languages

JSTS

Difficulty

Medium

Recommended duration to spend during interviews

15 mins

Users completed

156 completed

Implement a function `unionBy(array)` that creates an array of unique values, in order, from all given arrays and accepts `iteratee` which is invoked for each element of each arrays to generate the criterion by which uniqueness is computed.

unionBy(iteratee, arrays);

## Arguments

1. `iteratee` _(Function)_: The iteratee invoked per element. The function is invoked with one argument: (value).
2. `[arrays]` _(...Array)_: The arrays to inspect

## Returns

_`(Array)`_: Returns the new array of combined values.

## Examples

unionBy((value: any) => value, [2], [1, 2]); // => [2, 1]

unionBy(Math.floor, [2.1], [1.2, 2.3]); // => [2.1, 1.2]

unionBy((o) => o.x, [{ x: 1 }], [{ x: 2 }, { x: 1 }]); // => [{ 'x': 1 }, { 'x': 2 }]

The function should return an empty array if `array` is empty and leave the treat false values as-is.

unionBy((o) => o.m, []); // => []

unionBy((o) => o.m, [{ n: 1 }], [{ m: 2 }]); // => [{ n: 1 }, { m: 2 }]

## Resources

- [Lodash `_.unionBy`](https://lodash.com/docs/#unionBy)

# Try these questions next

- [Unique Array](https://www.greatfrontend.com/questions/javascript/unique-array)
    
    Difficulty
    
    Easy