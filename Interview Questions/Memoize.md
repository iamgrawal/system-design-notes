# Memoize

Premium

Languages

JSTS

Difficulty

Medium

Recommended duration to spend during interviews

20 mins

Users completed

421 completed

A memoize function is a higher-order function that takes in a function and returns a memoized version of it. The memoized function caches the results of expensive function calls and returns the cached result when it receives the same inputs again. This can significantly improve the performance of functions that involve complex processing / significant latency and are called with the same arguments repeatedly.

Implement a function `memoize(func)` that takes in a function parameter `func` and returns a memoized version of the function. You may assume that `func` only accepts a string or number as its only argument.

## Examples

function expensiveFunction(n) {

  console.log('Computing...');

  return n * 2;

}

// Create a memoized version of the function.

const memoizedExpensiveFunction = memoize(expensiveFunction);

// First call (computes and caches the result).

console.log(memoizedExpensiveFunction(5)); // Output: Computing... 10

// Second call with the same argument (returns the cached result).

console.log(memoizedExpensiveFunction(5)); // Output: 10

// Third call with a different argument (computes and caches the new result).

console.log(memoizedExpensiveFunction(10)); // Output: Computing... 20

// Fourth call with the same argument as the third call (returns the cached result).

console.log(memoizedExpensiveFunction(10)); // Output: 20

# Companies

LinkedIn