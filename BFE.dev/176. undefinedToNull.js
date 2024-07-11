/**
 * Problem Statement: 176. undefined to null
 * Link: https://bigfrontend.dev/problem/undefined-to-null
 * Difficulty: Medium
 * Description:
    One of the differences between null and undefined is how they are treated differently in JSON.stringify().

    JSON.stringify({a: null})      // '{"a":null}'
    JSON.stringify({a: undefined}) // '{}'

    JSON.stringify([null])         // '[null]'
    JSON.stringify([undefined])    // '[null]'
    This difference might create troubles if there are missing alignments between client and server. It might be helpful to enforce using only one of them.

    You are asked to implement undefinedToNull() to return a copy that has all undefined replaced with null.

    undefinedToNull({a: undefined, b: 'BFE.dev'})
    // {a: null, b: 'BFE.dev'}

    undefinedToNull({a: ['BFE.dev', undefined, 'bigfrontend.dev']})
    // {a: ['BFE.dev', null, 'bigfrontend.dev']}
 */

/**
 * @param {any} arg
 * @returns any
 */

function undefinedToNull(arg) {
  // your code here

  // if typeof arg is 'undefined'
  if (typeof arg === 'undefined') {
    return null;
  }

  // if typeof arg is 'object' implies => null, [], {}
  if (typeof arg === 'object') {
    // if arg === null
    if (arg === null) {
      return null;
    }

    // if arg is array
    if (Array.isArray(arg)) {
      return arg.map((val) => {
        return undefinedToNull(val);
      });
    }

    // if arg is object
    const objectMap = {};
    Object.entries(arg).forEach(([key, value]) => {
      objectMap[key] = undefinedToNull(value);
    });
    return objectMap;
  }

  return arg;
}
