# Classnames II

Premium

Languages

CSSJSTS

Difficulty

Hard

Recommended duration to spend during interviews

25 mins

Users completed

102 completed

In [classnames](https://www.greatfrontend.com/questions/javascript/classnames), we implemented [`classnames`](https://github.com/JedWatson/classnames), a commonly-used utility in modern front end applications to conditionally join CSS class names together. However, there are some cases that the library does not do:

|Case|Example|Original|Improved|
|---|---|---|---|
|De-duplicate classnames|`classNames('foo', 'foo)`|`'foo foo'`|`'foo'`|
|Turn off classnames|`classNames('foo', 'bar', { foo: false })`|`'foo bar'`|`'bar'`|
|Function values|`classNames(() => 'foo')`|Unsupported|`'foo'`|

Implement an improved version of the `classnames` function that handles the above cases.

## Examples

classNames('foo', 'foo'); // 'foo'

classNames({ foo: true }, { foo: true }); // 'foo'

classNames({ foo: true, bar: true }, { foo: false }); // 'bar'

classNames('foo', () => 'bar'); // 'foo bar'

classNames('foo', () => 'foo'); // 'foo'

## Resources

- [`classnames` library on GitHub](https://github.com/JedWatson/classnames)
- [`clsx` library on GitHub](https://github.com/lukeed/clsx): A newer version which serves as a faster and smaller drop-in replacement for `classnames`.

# Similar Questions

- [Classnames](https://www.greatfrontend.com/questions/javascript/classnames)
    
    Difficulty
    
    Medium