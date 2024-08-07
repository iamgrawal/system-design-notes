# Deep Equal

---

Author: [Zhenghao He](https://www.linkedin.com/in/zhenghao-he/)
[Linkedin](https://www.linkedin.com/in/zhenghao-he/)

Languages: #JS #TS

Difficulty: Medium

Recommended duration to spend during interviews: 25 mins

---

## Description

Implement a function `deepEqual` that performs a deep comparison between two values. It returns `true` if two input values are deemed equal, and returns `false` if not.

- You can assume there are only JSON-serializable values (numbers, strings, boolean, `null`, objects, arrays).
- There wouldn't be cyclic objects, i.e. objects with circular references.

## Examples

deepEqual('foo', 'foo'); // true

deepEqual({ id: 1 }, { id: 1 }); // true

deepEqual([1, 2, 3], [1, 2, 3]); // true

deepEqual([{ id: '1' }], [{ id: '2' }]); // false

# Similar Questions

- [Deep Clone](https://www.greatfrontend.com/questions/javascript/deep-clone)
  Difficulty
  Medium
- [Deep Clone II](https://www.greatfrontend.com/questions/javascript/deep-clone-ii)
  Difficulty
  Hard
