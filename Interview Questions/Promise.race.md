# Promise.race

Premium

Author

[![Yangshun Tay](https://www.greatfrontend.com/img/team/yangshun.jpg)](https://www.linkedin.com/in/yangshun)

[Yangshun Tay](https://www.linkedin.com/in/yangshun)[](https://www.linkedin.com/in/yangshun)

Ex-Meta Staff Engineer

Languages

JSTS

Difficulty

Easy

Recommended duration to spend during interviews

15 mins

Users completed

1431 completed

> The `Promise.race()` method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.

> If the iterable passed is empty, the promise returned will be forever pending.

> If the iterable contains one or more non-promise value and/or an already settled promise, then `Promise.race()` will resolve to the first of these values found in the iterable.

_Source: [Promise.race() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)_

Let's implement our own version of `Promise.race()`, a `promiseRace` function, with the difference being the function takes in an array instead of an iterable. Be sure to read the description carefully and implement accordingly!

## Examples

```js
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

await promiseRace([p0, p1]); // 42
```

```js
const p0 = Promise.resolve(42);

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(21);
  }, 100);
});

await promiseRace([p0, p1]); // 42
```

```js
const p0 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(42);
  }, 400);
});

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Err!');
  }, 100);
});

try {
  await promiseRace([p0, p1]);
} catch (err) {
  console.log(err); // 'Err!'
}
```

# Similar Questions

- [Promise.all](https://www.greatfrontend.com/questions/javascript/promise-all)
    
    Difficulty
    
    Medium
    
- [Promise.allSettled](https://www.greatfrontend.com/questions/javascript/promise-all-settled)
    
    Difficulty
    
    Medium
    
- [Promise.any](https://www.greatfrontend.com/questions/javascript/promise-any)
    
    Difficulty
    
    Medium