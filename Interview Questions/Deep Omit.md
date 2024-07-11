# Deep Omit

Premium

Languages

JSTS

Difficulty

Medium

Recommended duration to spend during interviews

30 mins

Users completed

150 completed

Implement a function `deepOmit(obj, keys)` that removes specified keys and their corresponding values from an object, including nested objects or arrays. It works recursively to traverse through the entire object structure, ensuring that all occurrences of the specified keys are removed at all levels. The function takes in an object (`obj`) and a array of string keys (`keys`).

## Examples

deepOmit({ a: 1, b: 2, c: 3 }, ['b']); // { a: 1, c: 3 }

A more complicated example with nested objects:

const obj = {

  a: 1,

  b: 2,

  c: {

    d: 3,

    e: 4,

  },

  f: [5, 6],

};

deepOmit(obj, ['b', 'c', 'e']); // { a: 1, f: [5, 6] }

# Similar Questions

- [Deep Map](https://www.greatfrontend.com/questions/javascript/deep-map)
    
    Difficulty
    
    Medium
    

Code

Test cases