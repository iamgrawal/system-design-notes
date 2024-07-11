# Map Async

Premium

Languages

JSTS

Difficulty

Medium

Recommended duration to spend during interviews

20 mins

Users completed

382 completed

By now you'd be familiar with mapping of elements in an array. If you aren't, please first do the [Array.prototype.map](https://www.greatfrontend.com/questions/javascript/array-map) question first.

What if the mapping function is not a synchronous function i.e. it returns a promise? `Array.prototype.map` assumes the mapping function is synchronous and will fail to work properly.

Implement a function `mapAsync` that accepts an array of items and maps each element with an asynchronous mapping function. The function should return a `Promise` which resolves to the mapped results.

## Examples

const asyncDouble = (x: number) =>

  new Promise((resolve) => {

    setTimeout(() => {

      resolve(x * 2);

    }, 10);

  });

const doubled = await mapAsync([1, 2], asyncDouble);

console.log(doubled); // [2, 4]

# Companies

LyftUber

# Try these questions next

- [Map Async Limit](https://www.greatfrontend.com/questions/javascript/map-async-limit)
    
    Difficulty
    
    Medium
    

# Similar Questions

- [Promise.all](https://www.greatfrontend.com/questions/javascript/promise-all)
    
    Difficulty
    
    Medium