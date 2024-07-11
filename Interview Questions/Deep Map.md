# Deep Map

Premium

Languages

JSTS

Difficulty

Medium

Recommended duration to spend during interviews

25 mins

Users completed

194 completed

Implement a function `deepMap(value, fn)` to return a new value containing the results of calling a provided function on every non-`Array` and non-`Object` element in the `value` input, including elements within nested `Array`s and `Object`s. The function `fn` is called with a single argument, the element that is being mapped/transformed.

## Examples

const double = (x) => x * 2;

deepMap(2, double); // 4

deepMap([1, 2, 3], double); // [4, 5, 6]

deepMap({ a: 1, b: 2, c: 3 }, double); // { a: 2, b: 4, c: 6 }

deepMap(

  {

    foo: 1,

    bar: [2, 3, 4],

    qux: { a: 5, b: 6 },

  },

  double,

); // => { foo: 2, bar: [4, 6, 8], qux: { a: 10, b: 12 } }

# Similar Questions

- [Object Map](https://www.greatfrontend.com/questions/javascript/object-map)
    
    Difficulty
    
    Easy
    
- [Array.prototype.map](https://www.greatfrontend.com/questions/javascript/array-map)
    
    Difficulty
    
    Easy