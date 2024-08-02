# Deep Clone II

Premium

Author

[![Zhenghao He](https://www.greatfrontend.com/img/team/zhenghao.jpg)](https://www.linkedin.com/in/zhenghao-he/)

[Zhenghao He](https://www.linkedin.com/in/zhenghao-he/)[](https://www.linkedin.com/in/zhenghao-he/)

Senior Engineer, Ex-Amazon

Languages

JSTS

Difficulty

Hard

Recommended duration to spend during interviews

45 mins

Users completed

117 completed

**Note:** This is an advanced version of the [Deep Clone](https://www.greatfrontend.com/questions/javascript/deep-clone) question, which you should complete first before attempting this question.

It is not realistic to expect candidates to produce a complete deep clone solution in typical interview settings, though the interviewer might ask you a simple version a la [Deep Clone](https://www.greatfrontend.com/questions/javascript/deep-clone) and engage you in a discussion regarding the edge cases and how you would handle them.

Implement a `deepClone` function that performs a deep clone as thoroughly as possible, while also handling the following:

- The input object can contain any data type.
- Handle the edge case where the input object is cyclic, i.e. the circular references should also be cloned.

## Examples

const obj1 = {

  num: 0,

  str: '',

  boolean: true,

  unf: undefined,

  nul: null,

  obj: { name: 'foo', id: 1 },

  arr: [0, 1, 2],

  date: new Date(),

  reg: new RegExp('/bar/ig'),

  [Symbol('s')]: 'baz',

};

const clonedObj1 = deepClone(obj1);

clonedObj1.arr.push(3);

obj1.arr; // Should still be [0, 1, 2]

const obj2 = { a: {} };

obj2.a.b = obj2; // Circular reference

const clonedObj2 = deepClone(obj2); // Should not cause a stack overflow by recursing into an infinite loop.

clonedObj2.a.b = 'something new';

obj2.a.b === obj2; // This should still be true

# Similar Questions

- [Deep Clone](https://www.greatfrontend.com/questions/javascript/deep-clone)
    
    Difficulty
    
    Medium