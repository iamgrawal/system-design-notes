# Compact II

Premium

Languages

JSTS

Difficulty

Medium

Recommended duration to spend during interviews

20 mins

Users completed

255 completed

Implement a function `compact(value)` that returns a new object with all falsey values removed, including falsey values that are deeply-nested. You can assume the `value` only contains JSON-serializable values (`null`, `boolean`, `number`, `string`, `Array`, `Object`) and will not contain any other objects like `Date`, `Regex`, `Map` or `Set`.

The values `false`, `null`, `0`, `''`, `undefined`, and `NaN` are falsey (you should know this by heart!).

## Arguments

1. `value` _(Array|Object)_: The array/object to compact.

## Returns

_(Array|Object)_: Returns the new compact array/object.

## Examples

compact([0, 1, false, 2, '', 3, null]); // => [1, 2, 3]

compact({ foo: true, bar: null }); // => { foo: true }

# Similar Questions

- [Compact](https://www.greatfrontend.com/questions/javascript/compact)
    
    Difficulty
    
    Easy