# Accordion II

Premium

FrameworkReactVanilla JS

Author

[![Yangshun Tay](https://www.greatfrontend.com/img/team/yangshun.jpg)](https://www.linkedin.com/in/yangshun)

[Yangshun Tay](https://www.linkedin.com/in/yangshun)[](https://www.linkedin.com/in/yangshun)

Ex-Meta Staff Engineer

Languages

HTMLJS

Difficulty

Medium

Recommended duration to spend during interviews

20 mins

Users completed

516 completed

**Note:** This is an advanced version of [Accordion](https://www.greatfrontend.com/questions/user-interface/accordion), you should complete that question first before attempting this question.

> An accordion is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content. The headings function as controls that enable users to reveal or hide their associated sections of content. Accordions are commonly used to reduce the need to scroll when presenting multiple sections of content on a single page.

_Source: [Accordion Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)_

In [Accordion](https://www.greatfrontend.com/questions/user-interface/accordion), we built a functional accordion component that can expand/collapse each section's contents. However, building good UI components goes beyond functionality and we have to ensure our components have great accessibility as well by adding the right ARIA roles, states, and properties to the DOM elements.

## Requirements

The ARIA Authoring Practices Guide has a [long list of guidelines for the ARIA roles, states, and properties to add to the various elements of an accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/). We should implement the following (improvised) guidelines for this question:

- The title of each accordion header is contained in a `<button>` element.
- If the accordion panel associated with an accordion header is visible, the header button element has `aria-expanded` set to `true`. If the panel is not visible, `aria-expanded` is set to `false`.
- The accordion header button element has `aria-controls` set to the ID of the element containing the accordion panel content.
- Each element that serves as a container for panel content has role `region` and `aria-labelledby` with a value that refers to the button that controls display of the panel.

The skeleton code uses the solution of [Accordion](https://www.greatfrontend.com/questions/user-interface/accordion), but you are free to use your own solution as a starting point.

See what you're building

# Try these questions next

- [Accordion III](https://www.greatfrontend.com/questions/user-interface/accordion-iii)
    
    Difficulty
    
    Medium

```js
// accodion.js

import { useState } from 'react';

  

export default function Accordion({ sections }) {

const [openSections, setOpenSections] = useState(

new Set(),

);

  

return (

<div className="accordion">

{sections.map(({ value, title, contents }) => {

const isExpanded = openSections.has(value);

  

return (

<div className="accordion-item" key={value}>

<button

className="accordion-item-title"

type="button"

onClick={() => {

const newOpenSections = new Set(

openSections,

);

newOpenSections.has(value)

? newOpenSections.delete(value)

: newOpenSections.add(value);

setOpenSections(newOpenSections);

}}>

{title}

<span

aria-hidden={true}

className={[

'accordion-icon',

isExpanded && 'accordion-icon--rotated',

]

.filter(Boolean)

.join(' ')}

/>

</button>

<div

className="accordion-item-contents"

hidden={!isExpanded}>

{contents}

</div>

</div>

);

})}

</div>

);

}
```

```css
## styles.css
body {

font-family: sans-serif;

}

  

.wrapper {

align-items: center;

display: flex;

}

  

.accordion {

display: flex;

flex-direction: column;

width: 100%;

}

  

.accordion-item {

display: flex;

flex-direction: column;

row-gap: 4px;

padding: 4px 0;

}

  

.accordion-item:not(:first-child) {

border-top: 1px solid #eee;

}

  

.accordion-item-title {

align-items: center;

border: none;

background: none;

cursor: pointer;

font-weight: 500;

padding: 4px;

justify-content: space-between;

text-align: start;

display: flex;

}

  

.accordion-item-title:hover {

background-color: #eee;

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

  

.accordion-item-contents {

font-size: 14px;

line-height: 1.2em;

padding: 4px;

}
```