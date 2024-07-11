/**
 * Problem Statement: 3. implement Array.prototype.flat()
 * Link: https://bigfrontend.dev/problem/implement-Array-prototype.flat
 * Difficulty: Easy
 * Description:
There is already Array.prototype.flat() in JavaScript (ES2019), which reduces the nesting of Array.

Could you manage to implement your own one?

Here is an example to illustrate

const arr = [1, [2], [3, [4]]];

flat(arr)
// [1, 2, 3, [4]]

flat(arr, 1)
// [1, 2, 3, [4]]

flat(arr, 2)
// [1, 2, 3, 4]
follow up

Are you able to solve it both recursively and iteratively?

Source for this  
Related Lists

implement it by yourself
 */

/**
 * @param { Array } arr
 * @param { number } currentDepth
 * @param { number } depthThreshold
 * @returns { Array }
 */
function flatten(arr, currentDepth, depthThreshold = 1) {
  if (currentDepth >= depthThreshold) {
    return arr; // TODO: Need to cross-check
  }

  const finalArr = [];
  arr.forEach((val) => {
    if (Array.isArray(val)) {
      finalArr.push(...flatten(val, currentDepth + 1, depthThreshold));
    } else {
      finalArr.push(val);
    }
  });
  return finalArr;
}

/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  // your imeplementation here
  return flatten(arr, 0, depth);
}

const arr = [1, [2], [3, [4]]];

console.log(flat(arr));
// [1, 2, 3, [4]]

console.log(flat(arr, 1));
// [1, 2, 3, [4]]

console.log(flat(arr, 2));
// [1, 2, 3, 4]
