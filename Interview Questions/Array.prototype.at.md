# Array.prototype.at

Premium

Languages

JSTS

Difficulty

Easy

Recommended duration to spend during interviews

15 mins

Users completed

892 completed

`Array.prototype.at` takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

Implement `Array.prototype.at`. To avoid overwriting the actual `Array.prototype.at`, we shall instead implement it as `Array.prototype.myAt`.

## Examples

const arr = [42, 79];

arr.myAt(0); // 42

arr.myAt(1); // 79

arr.myAt(2); // undefined

arr.myAt(-1); // 79

arr.myAt(-2); // 42

arr.myAt(-3); // undefined

## Notes

There are some tricky cases to handle. You are recommended to read the specification for `Array.prototype.at` on [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at) before attempting.