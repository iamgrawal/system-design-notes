# Size

Premium

Languages

JSTS

Difficulty

Easy

Recommended duration to spend during interviews

15 mins

Users completed

618 completed

Implement a function `size(collection)` that takes a collection (an array, object, string, `Map`, `Set`) and returns its size, which represents the number of elements in the collection.

size(collection);

Return 0 if the `collection` type is not one of the supported types.

## Arguments

1. `collection` _(Array|Object)_: The collection to inspect.

## Returns

_(number)_: Returns the collection size.

## Examples

```js
// Arrays.
size([1, 2, 3, 4, 5]); // => 5

// Object.
size({ a: 1, b: 2 }); // => 2

// Strings.
size('peanut'); // => 6

// Sets.
size(new Set([1, 2, 3])); // => 3

// Maps.
size(
  new Map([
    [1, 2],
    [3, 4],
  ]),
); // => 2
```

## Edge cases

Your function should handle `null` and `undefined` inputs. In such cases, it should return 0.

## Resources

- [Lodash `_.size`](https://lodash.com/docs/#size)