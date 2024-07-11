/**
 * Problem Statement: 2. implement curry() with placeholder support
 * Link: https://bigfrontend.dev/problem/implement-curry-with-placeholder
 * Difficulty: Medium
 * Description:
This is a follow-up on 1. implement curry()

please implement curry() which also supports placeholder.

Here is an example

const  join = (a, b, c) => {
  return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)
const _ = curry.placeholder

curriedJoin(1, 2, 3) // '1_2_3'

curriedJoin(_, 2)(1, 3) // '1_2_3'

curriedJoin(_, _, _)(1)(_, 3)(2) // '1_2_3'
more to read

https://javascript.info/currying-partials

https://lodash.com/docs/4.17.15#curry

https://github.com/planttheidea/curriable
 */

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(func) {
  return function curried(...args) {
    const complete =
      args.length >= func.length &&
      !args.slice(0, func.length).includes(curry.placeholder);
    if (complete) return func.apply(this, args);
    return function (...newArgs) {
      // replace placeholders in args with values from newArgs
      const res = args.map((arg) =>
        arg === curry.placeholder && newArgs.length ? newArgs.shift() : arg
      );
      return curried(...res, ...newArgs);
    };
  };
}

// define a placeholder symbol
curry.placeholder = Symbol('_');

// test the function with the provided example
const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);
const _ = curry.placeholder;

console.log(curriedJoin(1, 2, 3)); // '1_2_3'

console.log(curriedJoin(_, 2)(1, 3)); // '1_2_3'

console.log(curriedJoin(_, _, _)(1)(_, 3)(2)); // '1_2_3'
