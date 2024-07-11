# Tabs II

Premium

FrameworkReactVanilla JS

Author

[![Yangshun Tay](https://www.greatfrontend.com/img/team/yangshun.jpg)](https://www.linkedin.com/in/yangshun)

[Yangshun Tay](https://www.linkedin.com/in/yangshun)[](https://www.linkedin.com/in/yangshun)

Ex-Meta Staff Engineer

Languages

HTMLCSSJS

Difficulty

Medium

Recommended duration to spend during interviews

20 mins

Users completed

301 completed

**Note:** This is an advanced version of [Tabs](https://www.greatfrontend.com/questions/user-interface/tabs), you should complete that question first before attempting this question.

> Tabs are a set of layered sections of content, known as tab panels, that display one panel of content at a time. Each tab panel has an associated tab element, that when activated, displays the panel. The list of tab elements is arranged along one edge of the currently displayed panel, most commonly the top edge.

_Source: [Tabs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/)_

In [Tabs](https://www.greatfrontend.com/questions/user-interface/tabs), we built a functional tabs component that displays one panel of content at a time depending on the active tab element. However, building good UI components goes beyond functionality and we have to ensure our components have great accessibility as well by adding the right ARIA roles, states, and properties to the DOM elements.

## Requirements

The ARIA Authoring Practices Guide has a [long list of guidelines for the ARIA roles, states, and properties to add to the various elements of a tabs component](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/). We should implement the following guidelines for this question:

- The element that serves as the container for the set of tabs has role `tablist`.
- Each element that serves as a tab has role `tab` and is contained within the element with role `tablist`.
- Each element that contains the content panel for a `tab` has role `tabpanel`.
- Each element with role `tab` has the property `aria-controls` referring to its associated `tabpanel` element.
- The active tab element has the state `aria-selected` set to `true` and all other tab elements have it set to `false`.
- Each element with role `tabpanel` has the property `aria-labelledby` referring to its associated tab element.

It is also important that we use a `<button>` element to build the tabs as they need to be focusable and interactive.

The skeleton code uses the solution of [Tabs](https://www.greatfrontend.com/questions/user-interface/tabs), but you are free to use your own solution as a starting point.

See what you're building

# Companies

Airbnb

# Try these questions next

- [Tabs III](https://www.greatfrontend.com/questions/user-interface/tabs-iii)
    
    Difficulty
    
    Medium

```js
import { useState } from 'react';

  

export default function Tabs({ defaultValue, items }) {

const [value, setValue] = useState(

defaultValue ?? items[0].value,

);

  

return (

<div className="tabs">

<div className="tabs-list">

{items.map(({ label, value: itemValue }) => {

const isActiveValue = itemValue === value;

  

return (

<button

key={itemValue}

type="button"

className={[

'tabs-list-item',

isActiveValue && 'tabs-list-item--active',

]

.filter(Boolean)

.join(' ')}

onClick={() => {

setValue(itemValue);

}}>

{label}

</button>

);

})}

</div>

<div>

{items.map(({ panel, value: itemValue }) => (

<div key={itemValue} hidden={itemValue !== value}>

{panel}

</div>

))}

</div>

</div>

);

}
```

```css
body {

font-family: sans-serif;

}

  

.wrapper {

align-items: center;

display: flex;

}

  

.tabs {

display: flex;

flex-direction: column;

gap: 8px;

}

  

.tabs-list {

display: flex;

gap: 6px;

}

  

.tabs-list-item {

--active-color: blueviolet;

  

background: none;

border: 1px solid #000;

border-radius: 4px;

cursor: pointer;

padding: 6px 10px;

}

  

.tabs-list-item:hover {

border-color: var(--active-color);

color: var(--active-color);

}

  

.tabs-list-item--active,

.tabs-list-item--active:hover {

border-color: var(--active-color);

background-color: var(--active-color);

color: #fff;

}
```