# Promise.any

Premium

Author

[![Yangshun Tay](https://www.greatfrontend.com/img/team/yangshun.jpg)](https://www.linkedin.com/in/yangshun)

[Yangshun Tay](https://www.linkedin.com/in/yangshun)[](https://www.linkedin.com/in/yangshun)

Ex-Meta Staff Engineer

Languages

JSTS

Difficulty

Medium

Recommended duration to spend during interviews

20 mins

Users completed

1093 completed

**Note:** If you haven't completed the [`Promise.all`](https://www.greatfrontend.com/questions/javascript/promise-all) question, you should attempt that first.

> `Promise.any()` takes an iterable of elements (usually `Promises`). It returns a single promise that resolves as soon as any of the elements in the iterable fulfills, with the value of the fulfilled promise. If no promises in the iterable fulfill (if all of the given elements are rejected), then the returned promise is rejected with an [`AggregateError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError), a new subclass of Error that groups together individual errors.

> If an empty iterable is passed, then the promise returned by this method is rejected synchronously. The rejected reason is an `AggregateError` object whose errors property is an empty array.

_Source: [Promise.any() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)_

Let's implement our own version of `Promise.any()`, a `promiseAny` function, with the difference being the function takes in an array instead of an iterable and `AggregateError`s returned just have to return an array of error reasons, the message doesn't have to be set. Refer to the `AggregateError` constructor [examples on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError/AggregateError).

Be sure to read the description carefully and implement accordingly!

## Examples

const p0 = Promise.resolve(42);

const p1 = new Promise((resolve, reject) => {

  setTimeout(() => {

    resolve(21);

  }, 100);

});

await promiseAny([p0, p1]); // 42

const p0 = new Promise((resolve) => {

  setTimeout(() => {

    resolve(42);

  }, 100);

});

const p1 = new Promise((resolve, reject) => {

  setTimeout(() => {

    reject('Err!');

  }, 400);

});

await promiseAny([p0, p1]); // 42

const p0 = new Promise((resolve) => {

  setTimeout(() => {

    reject(42);

  }, 400);

});

const p1 = new Promise((resolve, reject) => {

  setTimeout(() => {

    reject('Err!');

  }, 100);

});

try {

  await promiseAny([p0, p1]);

} catch (err) {

  console.log(e instanceof AggregateError); // true

  console.log(e.errors); // [ 42, "Err!" ]

}

# Similar Questions

- [Promise.all](https://www.greatfrontend.com/questions/javascript/promise-all)
    
    Difficulty
    
    Medium
    
- [Promise.race](https://www.greatfrontend.com/questions/javascript/promise-race)
    
    Difficulty
    
    Easy
    
- [Promise.allSettled](https://www.greatfrontend.com/questions/javascript/promise-all-settled)
    
    Difficulty
    
    Medium