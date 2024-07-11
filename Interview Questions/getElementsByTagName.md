# getElementsByTagName

Premium

Author

[![Yangshun Tay](https://www.greatfrontend.com/img/team/yangshun.jpg)](https://www.linkedin.com/in/yangshun)

[Yangshun Tay](https://www.linkedin.com/in/yangshun)[](https://www.linkedin.com/in/yangshun)

Ex-Meta Staff Engineer

Languages

HTMLJSTS

Difficulty

Medium

Recommended duration to spend during interviews

20 mins

Users completed

1365 completed

`getElementsByTagName()` is a method which exists on the [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName) and [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName) objects and returns an `HTMLCollection` of descendant elements within the `Document`/`Element` given a tag name.

Let's implement our own [`Element.getElementsByTagName()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName) that is similar but slightly different:

- It is a pure function which takes in an element and a tag name string.
- Like `Element.getElementsByTagName()`, only descendants of the specified element are searched, not the element itself.
- Return an array of `Element`s, instead of an `HTMLCollection` of `Element`s.

## Examples

const document = new DOMParser().parseFromString(

  `<div id="foo">

    <span>Span</span>

    <p>Paragraph</p>

    <div id="bar">Div</div>

  </div>`,

  'text/html',

);

getElementsByTagName(document.body, 'div');

// [div#foo, div#bar] <-- This is an array of elements.

## Resources

- [Element.getElementsByTagName() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName)

# Similar Questions

- [getElementsByClassName](https://www.greatfrontend.com/questions/javascript/get-elements-by-class-name)
    
    Difficulty
    
    Medium