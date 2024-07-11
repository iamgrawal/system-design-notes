# HTML Serializer

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

351 completed

Given an object which resembles a DOM tree, implement a function that serializes the object into a formatted string with proper indentation (one tab (`\t` character) per nesting level) and one tag per line.

## Examples

const tree = {

  tag: 'body',

  children: [

    { tag: 'div', children: [{ tag: 'span', children: ['foo', 'bar'] }] },

    { tag: 'div', children: ['baz'] },

  ],

};

serializeHTML(tree);

// Output:

`<body>

  <div>

    <span>

      foo

      bar

    </span>

  </div>

  <div>

    baz

  </div>

</body>`;

# Similar Questions

- [JSON.stringify](https://www.greatfrontend.com/questions/javascript/json-stringify)
    
    Difficulty
    
    Medium