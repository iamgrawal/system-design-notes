# Cancellable Timeout

Premium

Languages

JSTS

Difficulty

Easy

Recommended duration to spend during interviews

10 mins

Users completed

2593 completed

Implement a function `setCancellableTimeout`, that acts like `setTimeout` but instead of returning a timer ID, it returns a function that when called, cancels the pending callback function. The `setCancellableTimeout` function should have the exact same signature as `setTimeout`:

setCancellableTimeout(callback);

setCancellableTimeout(callback, delay);

setCancellableTimeout(callback, delay, param1);

setCancellableTimeout(callback, delay, param1, param2);

setCancellableTimeout(callback, delay, param1, param2, /* … ,*/ paramN);

You are recommended to read up on for `setTimeout` on [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) if you are unfamiliar.

## Examples

let i = 0;

// t = 0:

const cancel = setCancellableTimeout(() => {

  i++;

}, 100);

// t = 50:

cancel();

// t = 100: i is still 0 because cancel() was called.

# Similar Questions

- [Cancellable Interval](https://www.greatfrontend.com/questions/javascript/cancellable-interval)
    
    Difficulty
    
    Easy