# Classnames

Languages

CSSJSTS

Difficulty

Medium

Recommended duration to spend during interviews

20 mins

Users completed

1963 completed

[`classnames`](https://github.com/JedWatson/classnames) is a commonly-used utility in modern front end applications to conditionally join CSS class names together. If you've written React applications, you likely have used a similar library.

Implement the `classnames` function.

## Examples

classNames('foo', 'bar'); // 'foo bar'

classNames('foo', { bar: true }); // 'foo bar'

classNames({ 'foo-bar': true }); // 'foo-bar'

classNames({ 'foo-bar': false }); // ''

classNames({ foo: true }, { bar: true }); // 'foo bar'

classNames({ foo: true, bar: true }); // 'foo bar'

classNames({ foo: true, bar: false, qux: true }); // 'foo qux'

Arrays will be recursively flattened as per the rules above.

classNames('a', ['b', { c: true, d: false }]); // 'a b c'

Values can be mixed.

classNames(

  'foo',

  {

    bar: true,

    duck: false,

  },

  'baz',

  { quux: true },

); // 'foo bar baz quux'

Falsey values are ignored.

classNames(null, false, 'bar', undefined, { baz: null }, ''); // 'bar'

In addition, the returned string should not have any leading or trailing whitespace.

## Resources

- [`classnames` library on GitHub](https://github.com/JedWatson/classnames)
- [`clsx` library on GitHub](https://github.com/lukeed/clsx): A newer version which serves as a faster and smaller drop-in replacement for `classnames`.