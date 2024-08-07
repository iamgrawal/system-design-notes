# Promisify

Premium

Languages

JSTS

Difficulty

Medium

Recommended duration to spend during interviews

15 mins

Users completed

770 completed

Before promises/`async`/`await` became the standard, it was a convention for async APIs in JavaScript to accept callbacks as the last argument. Many async versions of Node.js APIs (e.g. [`fs.readFile`](https://nodejs.org/api/fs.html#fsreadfilepath-options-callback) and [`fs.rm`](https://nodejs.org/api/fs.html#fsrmpath-options-callback)) have such signatures. Node.js' [`util.promisify`](https://nodejs.org/api/util.html#util_util_promisify_original) function was created to wrap around callback-based functions by returning `Promise`s so that they can be used with `async`/`await`.

Implement a function `promisify` that takes a function following the common callback-last error-first style, i.e. taking a `(err, value) => ...` callback as the last argument, and returns a version that returns promises.

## Examples

// Example function with callback as last argument

// The callback has the signature `(err, value) => any`

function foo(url, options, callback) {

  apiCall(url, options)

    .then((data) => callback(null, data))

    .catch((err) => callback(err));

}

const promisifiedFoo = promisify(foo);

const data = await promisifiedFoo('example.com', { foo: 1 });

# Companies

Amazon

# Try these questions next

- [Promisify II](https://www.greatfrontend.com/questions/javascript/promisify-ii)
    
    Difficulty
    
    Medium