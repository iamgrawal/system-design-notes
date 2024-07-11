# Sleep

Premium

Languages

JSTS

Difficulty

Easy

Recommended duration to spend during interviews

5 mins

Users completed

3381 completed

In JavaScript, the `setTimeout` function can be used to execute callbacks after a delay. However, it introduces a layer of nesting in the code which may not be desired. It'd be nice to use `setTimeout` in this fashion:

// Note: the following code contains invalid syntax and doesn't work.

console.log('Hello!');

setTimeout(1000);

console.log('Bye.');

In languages like Java and Python, a `sleep` function is available to suspend execution of the calling thread. However, unlike other languages, JavaScript is single-threaded and blocking the main thread is not a good idea. Hence lets implement an **asynchronous** version of the `sleep` function that works similarly but does not block the main thread.

## Examples

async function greeting() {

  console.log('Hello!');

  await sleep(2000);

  console.log('Bye.'); // Only logs after 2000 milliseconds (2 seconds)

}

greeting();

// t = 0: Hello!

// t = 2000: Bye.

The `sleep` function should also be able to be used without `await`:

console.log('Hello!');

sleep(2000).then(() => {

  console.log('Bye.'); // Only logs after 2000 milliseconds (2 seconds)

});