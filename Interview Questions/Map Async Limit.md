# Map Async Limit

Premium

Languages

JSTS

Difficulty

Medium

Recommended duration to spend during interviews

25 mins

Users completed

207 completed

In [Map Async](https://www.greatfrontend.com/questions/javascript/map-async), we wrote a function that accepts an array of items and maps each element with an asynchronous mapping function and returns a `Promise` which resolves to the mapped results.

Practically, this can be used for mapping an input array with the results of calling an API where the input element is the argument to the API. However, if your array has a large amount of items, you'd be making that many API calls at the same time which will almost certainly get you rate limited by the API service. We want to execute our tasks concurrently so that it is more efficient, yet stay within the rate limits of the API.

Implement a `mapAsyncLimit` that takes in an optional parameter `size`, the maximum number of ongoing async tasks so that the input array can be processed in chunks of `size`, achieving parallelism and staying within the provided limit. If `size` is not specified, the chunk size is unlimited.

## Examples

async function fetchUpperCase(q: string) {

  // Fake API service that converts a string to uppercase.

  const res = await fetch('https://uppercase.com?q=' + q);

  return await res.text();

}

// Only a maximum of 2 pending requests at any one time.

const results = await mapAsyncLimit(

  ['foo', 'bar', 'qux', 'quz'],

  fetchUpperCase,

  2,

);

console.log(results); // ['FOO', 'BAR', 'QUX', 'QUZ'];

# Companies

LyftUber

# Similar Questions

- [Promise.all](https://www.greatfrontend.com/questions/javascript/promise-all)
    
    Difficulty
    
    Medium