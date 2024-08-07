# In Range

Premium

Languages

JSTS

Difficulty

Easy

Recommended duration to spend during interviews

10 mins

Users completed

1384 completed

Implement a function `inRange(value, [start=0], end)` to check if a number `value` is between `start` and up to, but not including, `end`. If only 2 arguments are specified, the second argument becomes `end` and `start` is set to `0`. If `start` is greater than `end`, the parameters are swapped to support negative ranges.

## Arguments

1. `value` _(number)_: The number to check.
2. `[start=0]` _(number)_: The start of the range.
3. `end` _(number)_: The end of the range (not including).

## Returns

_(boolean)_: Returns `true` if `value` is in the range, else `false`.

## Examples

inRange(3, 2, 4); // => true

inRange(4, 8); // => true

inRange(4, 2); // => false

inRange(2, 2); // => false

inRange(1.2, 2); // => true

inRange(5.2, 4); // => false

inRange(-3, -2, -6); // => true

## Resources

- [Lodash `_.inRange`](https://lodash.com/docs/#inRange)

# Similar Questions

- [Clamp](https://www.greatfrontend.com/questions/javascript/clamp)
    
    Difficulty
    
    Easy