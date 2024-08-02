# Singleton

Premium

Languages

JSTS

Difficulty

Easy

Recommended duration to spend during interviews

10 mins

Users completed

599 completed

The Singleton pattern is used when you want to ensure that a class has only one instance and provide a global point of access to that instance. The Singleton pattern is useful for:

- **Single point of control:** When you need a single point of control for actions, such as managing a configuration object, logging, or controlling access to a shared resource.
- **Global state:** When you want to maintain a global state that should be accessible from different parts of your application. This is especially useful when sharing common data across various components.
- **Preventing duplicate initialization:** To ensure that only one instance of a class is created, preventing duplicate initialization and avoiding potential issues related to multiple instances.
- **Caching:** For implementing a caching mechanism where you want to maintain a single cache instance throughout the application.

Implement the `GlobalMap` module in JavaScript using the Singleton pattern. The `GlobalMap` module exports an object that has a single `getInstance()` method which returns a `Map` object that can be used as a key/value store for global caching/memoization.

## Examples

// fileA.js

import GlobalMap from './GlobalMap';

const gbMap = GlobalMap.getInstance();

gbMap.set('count', 42);

Somewhere else in another file, executed after the first:

// fileB.js

import GlobalMap from './GlobalMap';

const gbMap = GlobalMap.getInstance();

console.log(gbMap.get('count')); // 42

## Resources

- [Singleton Pattern | patterns.dev](https://www.patterns.dev/vanilla/singleton-pattern)
- [How To Work With Singletons in JavaScript](https://www.digitalocean.com/community/tutorials/js-js-singletons)