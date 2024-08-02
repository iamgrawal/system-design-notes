# Cycle

Languages

JSTS

Difficulty

Easy

Recommended duration to spend during interviews

15 mins

Users completed

2453 completed

Implement a function that takes one or more values and returns a function that cycles through those values each time it is called.

## Examples

const helloFn = cycle('hello');

console.log(helloFn()); // "hello"

console.log(helloFn()); // "hello"

const onOffFn = cycle('on', 'off');

console.log(onOffFn()); // "on"

console.log(onOffFn()); // "off"

console.log(onOffFn()); // "on"

## Source

- [JavaScript Code Challenges](https://jscodechallenges.vercel.app/challenges/functions#11-design-a-function-with-cycle-functionality-for-given-list-of-inputs-where-cycle-function-accepts-list-of-values-to-be-cycled-upon)