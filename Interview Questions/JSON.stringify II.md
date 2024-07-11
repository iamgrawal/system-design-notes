# JSON.stringify II

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

66 completed

Implement your a `jsonStringify` function that converts a JavaScript value into a JSON string, similar to [`JSON.stringify`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

- You may ignore the [second and the third](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#parameters) optional parameters in the original API.
- The function should behave exactly like `JSON.stringify()` for any data type. Refer to the examples below.
- Other cases:
    - Cyclic references: throw `TypeError('Converting circular structure to JSON')`.
    - `BigInt`: throw `TypeError('Do not know how to serialize a BigInt')`.

## Examples

jsonStringify({ foo: 'bar' }); // '{"foo":"bar"}'

jsonStringify({ foo: 'bar', bar: [1, 2, 3] }); // '{"foo":"bar",bar:[1,2,3]}'

Other types and their expected behavior:

jsonStringify(); // undefined

jsonStringify(undefined); // undefined

jsonStringify(null); // 'null'

jsonStringify(true); // 'true'

jsonStringify(false); // 'false'

jsonStringify(1); // '1'

jsonStringify(Infinity); // 'null'

jsonStringify(NaN); // 'null'

jsonStringify('foo'); // '"foo"'

jsonStringify('"foo"') === '"\\"foo\\""'; // Double quotes present in the original input are escaped using backslashes

jsonStringify(Symbol('foo')); // undefined

jsonStringify(() => {}); // undefined

jsonStringify(['foo', 'bar']); // '["foo","bar"]'

jsonStringify(/foo/); // '{}'

jsonStringify(new Map()); // '{}'

jsonStringify(new Set()); // '{}'

# Companies

Snap

# Similar Questions

- [HTML Serializer](https://www.greatfrontend.com/questions/javascript/html-serializer)
    
    Difficulty
    
    Medium