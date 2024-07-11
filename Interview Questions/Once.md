# Once

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

10 mins

Users completed

1552 completed

Sometimes it's helpful to ensure a function runs only once during the lifecycle of the website, e.g. for setting up logging, initializing an environment, etc.

Implement a function that accepts a callback and restricts its invocation to at most once. Subsequent calls of the function will return the result of the first invocation of the callback function. The callback function is invoked with the `this` binding and arguments of the created function.

## Examples

let i = 1;

function incrementBy(value) {

  i += value;

  return i;

}

const incrementByOnce = once(incrementBy);

incrementByOnce(2); // i is now 3; The function returns 3.

incrementByOnce(3); // i is still 3; The function returns the result of the first invocation, which is 3.

i = 4;

incrementByOnce(2); // i is still 4 as it is not modified. The function returns the result of the first invocation, which is 3.

## Resources

- [Lodash `_.once`](https://lodash.com/docs/4.17.15#once)

# Companies

Amazon

# Try these questions next

- [Limit](https://www.greatfrontend.com/questions/javascript/limit)
    
    Difficulty
    
    Medium