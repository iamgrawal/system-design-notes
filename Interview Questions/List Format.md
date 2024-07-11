# List Format

Premium

Author

[![Yangshun Tay](https://www.greatfrontend.com/img/team/yangshun.jpg)](https://www.linkedin.com/in/yangshun)

[Yangshun Tay](https://www.linkedin.com/in/yangshun)[](https://www.linkedin.com/in/yangshun)

Ex-Meta Staff Engineer

Languages

JSTS

Difficulty

Medium

Recommended duration to spend during interviews

20 mins

Users completed

1213 completed

Given a list of strings, implement a function `listFormat` that returns the items concatenated into a single string. A common use case would be in summarizing the reactions for social media posts.

The function should support a few options as the second parameter:

- `sorted`: Sorts the items by alphabetical order.
- `length`: Show only the first `length` items, using "and X other(s)" for the remaining. Ignore invalid values (negative, 0, etc).
- `unique`: Remove duplicate items.

## Examples

listFormat([]); // ''

listFormat(['Bob']); // 'Bob'

listFormat(['Bob', 'Alice']); // 'Bob and Alice'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John']);

// 'Bob, Ben, Tim, Jane and John'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {

  length: 3,

}); // 'Bob, Ben, Tim and 2 others'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {

  length: 4,

}); // 'Bob, Ben, Tim, Jane and 1 other'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {

  length: 3,

  sorted: true,

}); // 'Ben, Bob, Jane and 2 others'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John', 'Bob'], {

  length: 3,

  unique: true,

}); // 'Bob, Ben, Tim and 2 others'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {

  length: 3,

  unique: true,

}); // 'Bob, Ben, Tim and 2 others'

listFormat(['Bob', 'Ben', '', '', 'John']); // 'Bob, Ben and John'

# Companies

Dropbox