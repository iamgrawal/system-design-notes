# Resumable Interval

Premium

Languages

JSTS

Difficulty

Medium

Recommended duration to spend during interviews

20 mins

Users completed

215 completed

**Note:** It is recommended to have completed the [Cancellable Interval](https://www.greatfrontend.com/questions/javascript/cancellable-interval) question before attempting this question.

Implement a function `createResumableInterval`, that acts like `setInterval` and has the exact same signature. However instead of returning a timer ID, it returns an object that contains three methods:

1. `start`: Runs the callback **immediately** and every `delay` milliseconds.
2. `pause`: Pauses the interval so that it stops running. Execution can be resumed by calling `start()` again.
3. `stop`: Stops the interval permanently, cannot be restarted.

createResumableInterval(callback);

createResumableInterval(callback, delay);

createResumableInterval(callback, delay, param1);

createResumableInterval(callback, delay, param1, param2);

createResumableInterval(callback, delay, param1, param2, /* … ,*/ paramN);

You are recommended to read up on for `setInterval` on [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) if you are unfamiliar.

## Examples

let i = 0;

// t = 0:

const interval = createResumableInterval(() => {

  i++;

}, 10);

// t = 10:

interval.start(); // i is now 1.

// t = 20: callback executes and i is now 2.

// t = 25:

interval.pause();

// t = 30: i remains at 2 because interval.pause() was called.

// t = 35:

interval.start(); // i is now 3.

// t = 45: callback executes and i is now 4.

// t = 50:

interval.stop(); // i remains at 4.

# Similar Questions

- [Resumable Interval](https://www.greatfrontend.com/questions/javascript/resumable-interval)
    
    Difficulty
    
    Medium