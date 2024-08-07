# Promise.reject

Premium

Languages

JSTS

Difficulty

Easy

Recommended duration to spend during interviews

10 mins

Users completed

1475 completed

> The `Promise.reject()` static method returns a `Promise` object that is rejected with a given reason.

_Source: [Promise.reject() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject)_

Unlike `Promise.resolve()`, `Promise.reject()` always wraps `reason` in a new `Promise` object, even when `reason` is already a `Promise`.

Implement the `Promise.reject()` function as `promiseReject`. You can ignore the case where `this` is referenced within the implemented function.

## Examples

try {

  promiseReject('Mayday!');

} catch (err) {

  console.log(err); // Mayday!

}