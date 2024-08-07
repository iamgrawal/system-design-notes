# Promise.resolve

Premium

Languages

JSTS

Difficulty

Medium

Recommended duration to spend during interviews

15 mins

Users completed

713 completed

The `Promise.resolve()` static method "resolves" a given value to a `Promise`. If the value is:

- A native promise, return that promise.
- A non-thenable, return a promise that is already fulfilled with that value.
- A thenable, `Promise.resolve()` will call the `then()` method and pass a pair of resolving functions as arguments. A promise that has the same state as the thenable is returned.

_Source: [Promise.resolve() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)_

A "thenable" is an interface that implements the `.then()` method, which is called with two callbacks: one for when the promise is fulfilled, one for when it's rejected. Promises are also thenables.

Implement the `Promise.resolve()` function as `promiseResolve`. You can ignore the case where `this` is referenced within the implemented function.

## Examples

Resolving a non-promise.

const p = promiseResolve(42);

await p; // 42

Resolving a `Promise`.

const original = new Promise((resolve) => resolve(42));

const cast = promiseResolve(original);

await cast; // 42

Resolving a thenable.

const resolvedThenable = promiseResolve({

  then(resolve, reject) {

    resolve(42);

  },

});

await resolvedThenable; // 42