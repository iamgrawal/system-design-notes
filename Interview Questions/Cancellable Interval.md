# Cancellable Interval

Premium

Languages

JSTS

Difficulty

Easy

Recommended duration to spend during interviews

10 mins

Users completed

2775 completed

Implement a function `setCancellableInterval`, that acts like `setInterval` but instead of returning a timer ID, it returns a function that when called, cancels the interval. The `setCancellableInterval` function should have the exact same signature as `setInterval`:

```js
setCancellableInterval(callback);
```

```js
setCancellableInterval(callback, delay);
```

```js
setCancellableInterval(callback, delay, param1);
```

```js
setCancellableInterval(callback, delay, param1, param2);
```

```js
setCancellableInterval(callback, delay, param1, param2, /* … ,*/ paramN);
```

You are recommended to read up on for `setInterval` on [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) if you are unfamiliar.

## Examples

```js
let i = 0;

// t = 0:

const cancel = setCancellableInterval(() => {

  i++;

}, 10);

// t = 10: i is 1

// t = 20: i is 2

cancel(); // Called at t = 25

// t = 30: i is still 2 because cancel() was called and the interval callback has stopped running.
```

# Similar Questions

- [Cancellable Timeout](https://www.greatfrontend.com/questions/javascript/cancellable-timeout)
    
    Difficulty
    
    Easy