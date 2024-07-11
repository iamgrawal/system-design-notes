# Accordion III

Premium

FrameworkReact

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

268 completed

**Note:** This is an advanced version of [Accordion II](https://www.greatfrontend.com/questions/user-interface/accordion-iii), you should complete that question first before attempting this question. This question is not available in Vanilla JavaScript as it will require a fair bit of code to add keyboard interactions without a JavaScript framework.

In [Accordion II](https://www.greatfrontend.com/questions/user-interface/accordion-ii), we built a functional accordion component that has the necessary [WAI-ARIA roles, states, and properties](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/), which is actually pretty accessible. However, we can go one step further and add some optional keyboard interactions.

## Requirements

We'll be following a modified subset of the [necessary keyboard interactions for accordions](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/):

- When Enter or Space is hit and focus is on the accordion header
    - For a collapsed panel, expands the associated panel.
    - For an expanded panel, collapses the associated panel.
- Tab: Moves focus to the next focusable element; all focusable elements in the accordion are included in the page Tab sequence.
- Shift + Tab: Moves focus to the previous focusable element; all focusable elements in the accordion are included in the page Tab sequence.
- Down Arrow: If focus is on an accordion header, moves focus to the next accordion header. If focus is on the last accordion header, either does nothing or moves focus to the first accordion header.
- Up Arrow: If focus is on an accordion header, moves focus to the previous accordion header. If focus is on the first accordion header, either does nothing or moves focus to the last accordion header.
- Home: When focus is on an accordion header, moves focus to the first accordion header.
- End: When focus is on an accordion header, moves focus to the last accordion header.

## Notes

- The focus of this question is on adding keyboard functionality, not the styling. We have provided the solution to the [Accordion II](https://www.greatfrontend.com/questions/user-interface/accordion-ii) question here for you to build on top of. You can reuse the existing styling.

```jsx
//Accordion,js
import { useId, useState } from 'react';

  

function getAccordionHeaderId(accordionId, value) {

return accordionId + '-header-' + value;

}

  

function getAccordionPanelId(accordionId, value) {

return accordionId + '-panel-' + value;

}

  

export default function Accordion({ sections }) {

const accordionId = useId();

const [openSections, setOpenSections] = useState(

new Set(),

);

  

return (

<div className="accordion">

{sections.map(({ value, title, contents }) => {

const isExpanded = openSections.has(value);

const headerId = getAccordionHeaderId(

accordionId,

value,

);

const panelId = getAccordionPanelId(

accordionId,

value,

);

  

return (

<div className="accordion-item" key={value}>

<button

aria-controls={panelId}

aria-expanded={isExpanded}

id={headerId}

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

{title}{' '}

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

aria-labelledby={headerId}

role="region"

className="accordion-item-contents"

id={panelId}

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

```scss
## Style.css

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