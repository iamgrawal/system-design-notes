# Accordion

Premium

FrameworkReactVanilla JS

Author

[![Yangshun Tay](https://www.greatfrontend.com/img/team/yangshun.jpg)](https://www.linkedin.com/in/yangshun)

[Yangshun Tay](https://www.linkedin.com/in/yangshun)[](https://www.linkedin.com/in/yangshun)

Ex-Meta Staff Engineer

Languages

HTMLCSSJS

Difficulty

Easy

Recommended duration to spend during interviews

15 mins

Users completed

2354 completed

Build an Accordion component that displays a list of vertically stacked sections that each contain a title and content snippet. Some HTML is provided for you as example contents along with a chevron icon.

## Requirements

- By default, all sections are collapsed and are hidden from view.
- Clicking on a section title toggles the contents.
    - If the section is collapsed, the section will be expanded and the contents will be displayed.
    - If the section is expanded, the section will be collapsed and the contents will be hidden.
- The sections are independent of each other.

## Example

Try out an [example of an accordion component](https://www.w3.org/WAI/ARIA/apg/example-index/accordion/accordion.html).

## Notes

- The focus of this question is on functionality, not the styling. Do not spent too much time writing custom CSS.
- You may modify the markup (e.g. adding `id`s, data attributes, replacing some tags, etc) and use client-side rendering instead.
- You may want to think about ways to improve the user experience of the application and implement them (you get bonus credit for doing that during interviews).

See what you're building

# Try these questions next

- [Accordion II](https://www.greatfrontend.com/questions/user-interface/accordion-ii)
    
    Difficulty
    
    Medium

```js
// app.js
import Accordion from './Accordion';

  

import './styles.css';

  

export default function App() {

return <Accordion />;

}

// accordion.js
export default function Accordion() {

return (

<div>

<div>

<div>

HTML{' '}

<span

aria-hidden={true}

className="accordion-icon"

/>

</div>

<div>

The HyperText Markup Language or HTML is the

standard markup language for documents designed to

be displayed in a web browser.

</div>

</div>

<div>

<div>

CSS{' '}

<span

aria-hidden={true}

className="accordion-icon"

/>

</div>

<div>

Cascading Style Sheets is a style sheet language

used for describing the presentation of a document

written in a markup language such as HTML or XML.

</div>

</div>

<div>

<div>

JavaScript{' '}

<span

aria-hidden={true}

className="accordion-icon"

/>

</div>

<div>

JavaScript, often abbreviated as JS, is a

programming language that is one of the core

technologies of the World Wide Web, alongside HTML

and CSS.

</div>

</div>

</div>

);

}
```

```css
body {

font-family: sans-serif;

}

  

.accordion-icon {

border: solid currentcolor;

border-width: 0 2px 2px 0;

display: inline-block;

height: 8px;

pointer-events: none;

transform: translateY(-2px) rotate(45deg);

width: 8px;

}

  

.accordion-icon--rotated {

transform: translateY(2px) rotate(-135deg);

}
```