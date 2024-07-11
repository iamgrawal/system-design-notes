# Squash Object

Premium

Author

[![Zhenghao He](https://www.greatfrontend.com/img/team/zhenghao.jpg)](https://www.linkedin.com/in/zhenghao-he/)

[Zhenghao He](https://www.linkedin.com/in/zhenghao-he/)[](https://www.linkedin.com/in/zhenghao-he/)

Senior Engineer, Ex-Amazon

Languages

JSTS

Difficulty

Medium

Recommended duration to spend during interviews

20 mins

Users completed

542 completed

Implement a function that returns a new object after squashing the input object into a single level of depth where nested keys are "squashed" together with a period delimiter (`.`).

## Examples

const object = {

  a: 5,

  b: 6,

  c: {

    f: 9,

    g: {

      m: 17,

      n: 3,

    },

  },

};

squashObject(object); // { a: 5, b: 6, 'c.f': 9, 'c.g.m': 17, 'c.g.n': 3 }

Any keys with null-ish values (`null` and `undefined`) are still included in the returned object.

const object = {

  a: { b: null, c: undefined },

};

squashObject(object); // { 'a.b': null, 'a.c': undefined }

It should also work with properties that have arrays as the value:

const object = { a: { b: [1, 2, 3], c: ['foo'] } };

squashObject(object); // { 'a.b.0': 1, 'a.b.1': 2, 'a.b.2': 3, 'a.c.0': 'foo' }

Empty keys should be treated as if that "layer" doesn't exist.

const object = {

  foo: {

    '': { '': 1, bar: 2 },

  },

};

squashObject(object); // { foo: 1, 'foo.bar': 2 }

# Similar Questions

- [Flatten](https://www.greatfrontend.com/questions/javascript/flatten)
    
    Difficulty
    
    Medium
    
- [Get](https://www.greatfrontend.com/questions/javascript/get)
    
    Difficulty
    
    Easy