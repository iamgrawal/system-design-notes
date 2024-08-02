# Intersection With

Premium

Languages

JSTS

Difficulty

Medium

Recommended duration to spend during interviews

15 mins

Users completed

366 completed

The `intersectionWith` function takes a custom `comparator` function and multiple arrays as arguments. It compares the elements of the arrays using the `comparator` function to determine equality. The function returns a new array containing the elements that are present in all given arrays.

intersectionWith(comparator, ...arrays);

## Arguments

1. `comparator` _(Function)_: The comparator function used to determine equality between elements. The function will be invoked with two arguments `(arrVal, othVal)` representing the two elements being compared. It should return `true` if the elements are considered equal, and `false` otherwise.
2. `arrays` _(...Array)_: The arrays to inspect.

## Returns

_(Array)_: Returns the array after intersection of arrays.

## Examples

const arr1 = [

  { x: 1, y: 2 },

  { x: 2, y: 3 },

];

const arr2 = [

  { y: 2, x: 1 },

  { x: 3, y: 4 },

];

const result = intersectionWith(

  (a, b) => a.x === b.x && a.y === b.y,

  arr1,

  arr2,

); // => [{ x: 1, y: 2 }]

## Notes

- In Lodash, `comparator` is optional and is the last parameter, but in this question it is a required parameter for simplicity.
- The order of elements in the resulting array is determined by the order in which they appear in the first array.
- If no arrays are provided, the function will return an empty array.
- If any of the arrays are empty, the function will return an empty array.

## Resources

- [Lodash `_.intersectionWith`](https://lodash.com/docs/#intersectionWith)

# Similar Questions

- [Intersection](https://www.greatfrontend.com/questions/javascript/intersection)
    
    Difficulty
    
    Easy
    
- [Intersection With](https://www.greatfrontend.com/questions/javascript/intersection-with)
    
    Difficulty
    
    Medium