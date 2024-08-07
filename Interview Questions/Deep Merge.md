# Deep Merge

Premium

Languages

JSTS

Difficulty

Medium

Recommended duration to spend during interviews

30 mins

Users completed

159 completed

Implement a function `deepMerge(objA, objB)` to takes in two objects and returns a new object after deep merging them:

- The resulting object should contain a union of the keys/values of both objects.
- If the same key is present on both objects, the merged value will be from `objB`, unless:
    - Both values are arrays: the elements from `objB` will be appended behind `objA`'s.
    - Both values are objects: merge the objects as per the same rules for `deepMerge`.
- Arrays and objects within the merged object should be new instances.

The input objects should not be modified.

## Examples

deepMerge({ a: 1 }, { b: 2 }); // { a: 1, b: 2 }

deepMerge({ a: 1 }, { a: 2 }); // { a: 2 }

deepMerge({ a: 1, b: [2] }, { b: [3, 4] }); // { a: 1, b: [2, 3, 4] }

# Similar Questions

- [Deep Clone](https://www.greatfrontend.com/questions/javascript/deep-clone)
    
    Difficulty
    
    Medium