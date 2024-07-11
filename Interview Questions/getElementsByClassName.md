# getElementsByClassName

Premium

Author

[![Yangshun Tay](https://www.greatfrontend.com/img/team/yangshun.jpg)](https://www.linkedin.com/in/yangshun)

[Yangshun Tay](https://www.linkedin.com/in/yangshun)[](https://www.linkedin.com/in/yangshun)

Ex-Meta Staff Engineer

Languages

HTMLCSSJSTS

Difficulty

Medium

Recommended duration to spend during interviews

25 mins

Users completed

676 completed

`getElementsByClassName()` is a method which exists on HTML `Document`s and `Element`s to return an `HTMLCollection` of descendant elements within the `Document`/`Element` which has the specified class name(s).

Let's implement our own [`Element.getElementsByClassName()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByClassName) that is similar but slightly different:

- It is a pure function which takes in an element and a `classNames` string, a string containing one or more class names to match on, separated by whitespace.
- Like `Element.getElementsByClassName()`, only descendants of the specified element are searched, not the element itself.
- Return an array of `Element`s, instead of an `HTMLCollection` of `Element`s.

## Examples

const doc = new DOMParser().parseFromString(

  `<div class="foo bar baz">

    <span class="bar baz">Span</span>

    <p class="foo baz">Paragraph</p>

    <div class="foo bar"></div>

  </div>`,

  'text/html',

);

getElementsByClassName(doc.body, 'foo bar');

// [div.foo.bar.baz, div.foo.bar] <-- This is an array of elements.

## Resources

- [Element.getElementsByClassName() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByClassName)

# Companies

DropboxLinkedIn

# Similar Questions

- [getElementsByTagName](https://www.greatfrontend.com/questions/javascript/get-elements-by-tag-name)
    
    Difficulty
    
    Medium