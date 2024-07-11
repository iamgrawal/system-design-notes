# Debounce II

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

743 completed

**Note:** This is an advanced version of [Debounce](https://www.greatfrontend.com/questions/javascript/debounce), you should complete that first before attempting this question.

Debouncing is a technique used to control how many times we allow a function to be executed over time. When a JavaScript function is debounced with a wait time of X milliseconds, it must wait until after X milliseconds have elapsed since the debounced function was last called. You almost certainly have encountered debouncing in your daily lives before — when entering an elevator. Only after X duration of not pressing the "Door open" button (the debounced function not being called) will the elevator door actually close (the callback function is executed).

Implement a `debounce` function which accepts a callback function and a `wait` duration. Calling `debounce()` returns a function which has debounce invocations of the callback function following the behavior described above.

Additionally, the `debounce` function comes with two extra methods:

1. `cancel()` method to cancel pending invocations.
2. `flush()` method to immediately invoke any delayed invocations.

## Examples

let i = 0;

function increment() {

  i++;

}

const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().

debouncedIncrement(); // i = 0

// t = 50: Cancel the delayed increment.

debouncedIncrement.cancel();

// t = 100: increment() was not invoked and i is still 0.

Flushing to instantly call the debounced function.

let i = 0;

function increment() {

  i++;

}

const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().

debouncedIncrement(); // i = 0

// t = 50: i is still 0 because 100ms have not passed.

// t = 51:

debouncedIncrement.flush(); // i is now 1 because flush causes() the callback to be immediately invoked.

// t = 100: i is already 1. The callback has been called before

// and won't be called again.

**Note:** Due to the use of delays in the tests for this question, tests can take a while to complete execution.

## Reading

- [Debounce on Lodash Documentation](https://lodash.com/docs/4.17.15#debounce)

# Companies

GoogleLyftWalmartYelp

# Try these questions next

- [Throttle](https://www.greatfrontend.com/questions/javascript/throttle)
    
    Difficulty
    
    Medium
    

# Similar Questions

- [Debounce](https://www.greatfrontend.com/questions/javascript/debounce)
    
    Difficulty
    
    Medium
    
- [Throttle](https://www.greatfrontend.com/questions/javascript/throttle)
    
    Difficulty
    
    Medium