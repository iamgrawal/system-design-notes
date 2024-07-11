# Conforms To

Premium

Languages

JSTS

Difficulty

Medium

Recommended duration to spend during interviews

20 mins

Users completed

78 completed

Implement a function `conformsTo(object, source)` that checks if object conforms to source by invoking the predicate properties of source with the corresponding property values of object

conformsTo(object, source);

## Arguments

1. `object` _(Object)_: The object to inspect.
2. `source` _(Object)_: The object of property predicates to conform to.

## Returns

_`(boolean)`_: Returns true if object conforms, else false.

## Examples

conformsTo({ a: 1, b: 2 }, { b: (n) => n > 1 });

// => true

conformsTo({ a: 1, b: 2 }, { b: (n) => n > 2 });

// => false

The function should return `false` when `object` is empty.

conformsTo({}, { b: (n) => n > 1 }); // => false

## Resources

- [Lodash `_.conformsTo`](https://lodash.com/docs/#conformsTo)

# Similar Questions

- [Count By](https://www.greatfrontend.com/questions/javascript/count-by)
    
    Difficulty
    
    Medium