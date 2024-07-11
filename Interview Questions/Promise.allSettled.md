# Promise.allSettled

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

906 completed

**Note:** If you haven't completed the [`Promise.all`](https://www.greatfrontend.com/questions/javascript/promise-all) question, you should attempt that first.

> The `Promise.allSettled()` method returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

> However, if and only if an empty iterable is passed as an argument, `Promise.allSettled()` returns a `Promise` object that has already been resolved as an empty array.

> For each outcome object, a `status` string is present. If the status is `'fulfilled'`, then a `value` is present. If the status is `'rejected'`, then a `reason` is present. The value (or reason) reflects what value each promise was fulfilled (or rejected) with.

_Source: [Promise.allSettled() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)_

`Promise.allSettled()` is frequently used when there are multiple independent asynchronous tasks and we want to know the result of each promise, regardless of whether they were fulfilled or rejected.

Let's implement our own version of `Promise.allSettled()`, a `promiseAllSettled` function, with the difference being the function takes in an array instead of an iterable. Be sure to read the description carefully and implement accordingly!

## Examples

const p0 = Promise.resolve(3);

const p1 = 42;

const p2 = new Promise((resolve, reject) => {

  setTimeout(() => {

    reject('foo');

  }, 100);

});

await promiseAllSettled([p0, p1, p2]);

// [

//   { status: 'fulfilled', value: 3 },

//   { status: 'fulfilled', value: 42 },

//   { status: 'rejected', reason: 'foo' },

// ];

# Similar Questions

- [Promise.all](https://www.greatfrontend.com/questions/javascript/promise-all)
    
    Difficulty
    
    Medium
    
- [Promise.race](https://www.greatfrontend.com/questions/javascript/promise-race)
    
    Difficulty
    
    Easy
    
- [Promise.any](https://www.greatfrontend.com/questions/javascript/promise-any)
    
    Difficulty
    
    Medium