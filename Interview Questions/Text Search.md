# Text Search

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

20 mins

Users completed

649 completed

In browsers, we are able to find specific words or phrases within a webpage by using Ctrl + F (Windows, Linux) or ⌘ + F (Mac) and entering the search term. Matches which appear will be highlighted in yellow.

Let's implement a simple version of a browser's in-webpage search with the difference being we're given a string (as opposed to HTML) and search matches appear **bolded**.

Given a content string and a query string, implement a function `textSearch` that finds all case-insensitive matches with the `query` string, wrapping the matches in `<b>...</b>` tags.

## Examples

textSearch('The Quick Brown Fox Jumps Over The Lazy Dog', 'fox');

// 'The Quick Brown <b>Fox</b> Jumps Over The Lazy Dog'

textSearch('The hardworking Dog overtakes the lazy dog', 'dog');

// 'The hardworking <b>Dog</b> overtakes the lazy <b>dog</b>'

A character will not match the same query more than once, with letters appearing earlier taking priority.

textSearch('aaa', 'aa');

// '<b>aa</b>a'

// This is because the second character cannot be used as a match again.

Consecutive matches should be combined into a single `<b>` tag.

textSearch('aaaa', 'aa');

// Correct: '<b>aaaa</b>'

// Wrong: '<b>aa</b><b>aa</b>'

# Try these questions next

- [Flatten](https://www.greatfrontend.com/questions/javascript/flatten)
    
    Difficulty
    
    Medium
    
- [Promise.all](https://www.greatfrontend.com/questions/javascript/promise-all)
    
    Difficulty
    
    Medium
    
- [Todo List](https://www.greatfrontend.com/questions/user-interface/todo-list)
    
    Difficulty
    
    Medium
    

# Similar Questions

- [Text Search II](https://www.greatfrontend.com/questions/javascript/text-search-ii)
    
    Difficulty
    
    Medium