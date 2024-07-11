# Intersection By

Premium

Languages

JSTS

Difficulty

Medium

Recommended duration to spend during interviews

15 mins

Users completed

450 completed

The `intersectionBy` function takes an `iteratee` function and multiple arrays as arguments. It creates an array of unique values that are included in all given arrays based on the result of applying the `iteratee` function to each value. The order and references of result values are determined by the first array. Note that the values returned are the values _before_ the `iteratee` function is applied, while the comparison is based on the values _after_ the `iteratee` function is applied.

The iteratee function is invoked with one argument: `value`, where value is the current value being iterated.

intersectionBy(iteratee, ...arrays);

## Arguments

1. `iteratee` _(Function)_: The iteratee invoked per element.
2. `arrays` _(Array)_: The arrays to inspect.

## Returns

_(Array)_: Returns the new array of intersecting values.

## Examples

// Get the intersection based on the floor value of each number

const result = intersectionBy(Math.floor, [1.2, 2.4], [2.5, 3.6]); // => [2.4]

// Get the intersection based on the lowercase value of each string

const result2 = intersectionBy(

  (str) => str.toLowerCase(),

  ['apple', 'banana', 'ORANGE', 'orange'],

  ['Apple', 'Banana', 'Orange'],

);

// => ['apple', 'banana', 'ORANGE']

## Notes

- In Lodash, `iteratee` is optional and is the last parameter, but in this question it is a required parameter for simplicity.
- If no arrays are provided, the function will return an empty array.
- If any of the arrays are empty, the function will return an empty array.

## Resources

- [Lodash `_.intersectionBy`](https://lodash.com/docs/#intersectionBy)

# Similar Questions

- [Intersection](https://www.greatfrontend.com/questions/javascript/intersection)
    
    Difficulty
    
    Easy
    
- [Intersection With](https://www.greatfrontend.com/questions/javascript/intersection-with)
    
    Difficulty
    
    Medium