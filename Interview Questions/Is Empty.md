# Is Empty

Premium

Languages

JSTS

Difficulty

Medium

Recommended duration to spend during interviews

15 mins

Users completed

614 completed

Implement a function `isEmpty(value)` to check if a value is an empty object, collection, map, or set.

Array-like values such as `arguments` objects, arrays, strings, or jQuery-like collections are considered empty if they have a `length` of `0`. Similarly, maps and sets are considered empty if they have a `size` of `0`.

However for this question, we will not consider jQuery-like collections.

## Arguments

1. `value` _(*)_: The value to check.

## Returns

_(boolean)_: Returns `true` if `value` is empty, else `false`.

## Examples

isEmpty(null); // => true

isEmpty(true); // => true

isEmpty(1); // => true

isEmpty([1, 2, 3]); // => false

isEmpty({ a: 1 }); // => false

## Resources

- [Lodash `_.isEmpty`](https://lodash.com/docs/#isEmpty)