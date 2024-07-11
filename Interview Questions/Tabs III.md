# Tabs III

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

185 completed

**Note:** This is an advanced version of [Tabs II](https://www.greatfrontend.com/questions/user-interface/tabs-ii), you should complete that question first before attempting this question. This question is not available in Vanilla JavaScript as it will require a fair bit of code to add keyboard interactions without a JavaScript framework.

In [Tabs II](https://www.greatfrontend.com/questions/user-interface/tabs-ii), we built a functional Tabs component that has the necessary [WAI-ARIA roles, states, and properties](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/). For a completely accessible Tabs component, we should also add the [necessary keyboard interactions](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/).

## Requirements

We'll be following a modified subset of the [necessary keyboard interactions for Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/). Note that the tabs component we're building is activated automatically on focus, so the respective tabpanel contents are shown as soon as the focus changes to a different tab.

- When Tab key is pressed:
    - When focus moves into the tab list, places focus on the active tab element.
    - When the tab list contains the focus, moves focus to the next element in the page tab sequence outside the tablist, which is the tabpanel.
- When focus is on a tab element in the tab list:
    - Left Arrow: moves focus to the previous tab. If focus is on the first tab, moves focus to the last tab.
    - Right Arrow: Moves focus to the next tab. If focus is on the last tab element, moves focus to the first tab.
    - Home: Moves focus to the first tab. Shows tabpanel content of the newly focused tab.
    - End: Moves focus to the last tab. Shows tabpanel content of the newly focused tab.

## Notes

- The focus of this question is on adding keyboard functionality, not the styling. We have provided the solution to the [Tabs II](https://www.greatfrontend.com/questions/user-interface/tabs-ii) question here for you to build on top of. You can reuse the existing styling.

See what you're building

# Companies

Airbnb


```js
import { useId, useState } from 'react';

  

function getTabListItemId(tabsId, value) {

return tabsId + '-tab-' + value;

}

  

function getTabPanelId(tabsId, value) {

return tabsId + '-tabpanel-' + value;

}

  

export default function Tabs({ defaultValue, items }) {

const tabsId = useId();

const [value, setValue] = useState(

defaultValue ?? items[0].value,

);

  

return (

<div className="tabs">

<div className="tabs-list" role="tablist">

{items.map(({ label, value: itemValue }) => {

const isActiveValue = itemValue === value;

  

return (

<button

id={getTabListItemId(tabsId, itemValue)}

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

}}

role="tab"

aria-controls={getTabPanelId(

tabsId,

itemValue,

)}

aria-selected={isActiveValue}>

{label}

</button>

);

})}

</div>

<div>

{items.map(({ panel, value: itemValue }) => (

<div

key={itemValue}

id={getTabPanelId(tabsId, itemValue)}

aria-labelledby={getTabListItemId(

tabsId,

itemValue,

)}

role="tabpanel"

hidden={itemValue !== value}>

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

display: flex;

flex-direction: column;

gap: 16px;

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