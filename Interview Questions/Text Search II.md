# Text Search II

Premium

Author

[![Zhenghao He](https://www.greatfrontend.com/img/team/zhenghao.jpg)](https://www.linkedin.com/in/zhenghao-he/)

[Zhenghao He](https://www.linkedin.com/in/zhenghao-he/)[](https://www.linkedin.com/in/zhenghao-he/)

Senior Engineer, Ex-Amazon

Languages

HTMLJSTS

Difficulty

Medium

Recommended duration to spend during interviews

25 mins

Users completed

224 completed

In browsers, we are able to find specific words or phrases within a webpage by using Ctrl + F (Windows, Linux) or ⌘ + F (Mac) and entering the search term. Matches which appear will be highlighted in yellow.

Let's implement a simple version of a browser's in-webpage search with the difference being we're given a string (as opposed to HTML) and search matches appear **bolded**.

Given a string and an array of queries, implement a function `textSearch` that finds all case-insensitive matches from the `queries` array within the string, wrapping the matches in `<b>...</b>` tags.

## Examples

textSearch('The Quick Brown Fox Jumps Over The Lazy Dog', ['fox']);

// 'The Quick Brown <b>Fox</b> Jumps Over The Lazy Dog'

textSearch('The quick brown fox jumps over the lazy dog', ['fox', 'dog']);

// 'The quick brown <b>fox</b> jumps over the lazy <b>dog</b>'

If two such queries overlap or are consecutive, they should be wrapped in a single pair of `<b>` tags.

textSearch('This is Uncopyrightable!', ['copy', 'right']);

// 'This is Un<b>copyright</b>able!'

textSearch('This is Uncopyrightable!', ['copy', 'right', 'table']);

// 'This is Un<b>copyrightable</b>!'

A character will not match the same query more than once, with earlier letters taking priority.

textSearch('aaa', ['aa']);

// '<b>aa</b>a'

// This is because the second character cannot be used as a match again.

textSearch('aaaa', ['aa']);

// '<b>aaaa</b>'

You can assume there are no duplicate strings in the `queries` array.

# Similar Questions

- [Text Search](https://www.greatfrontend.com/questions/javascript/text-search)
    
    Difficulty
    
    Medium