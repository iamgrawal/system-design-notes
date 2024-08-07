## Companies

Google, Byte Dance

---

## Question

Design a dropdown menu component that can reveal a menu containing a list of actions.

![Dropdown Menu Example](https://www.greatfrontend.com/img/questions/dropdown-menu/dropdown-menu-example.png)

### Real-life examples

- [Dropdowns · Bootstrap v5.3](https://getbootstrap.com/docs/5.3/components/dropdowns)
- [React Menu component - Material UI](https://mui.com/material-ui/react-menu/)
- [Dropdown Menu — Radix UI](https://www.radix-ui.com/docs/primitives/components/dropdown-menu)

---

## Requirements exploration[​](https://www.greatfrontend.com/questions/system-design/dropdown-menu#requirements-exploration "Direct link to Requirements exploration")

### Can there be multiple dropdown menus open at once?[​](https://www.greatfrontend.com/questions/system-design/dropdown-menu#can-there-be-multiple-dropdown-menus-open-at-once "Direct link to Can there be multiple dropdown menus open at once?")

Yes, there can be.

### What contents will the menu contain?[​](https://www.greatfrontend.com/questions/system-design/dropdown-menu#what-contents-will-the-menu-contain "Direct link to What contents will the menu contain?")

Only text, no focusable elements.

### Is there a maximum number of items allowed in the menu?[​](https://www.greatfrontend.com/questions/system-design/dropdown-menu#is-there-a-maximum-number-of-items-allowed-in-the-menu "Direct link to Is there a maximum number of items allowed in the menu?")

There's no fixed maximum, but preferably, there should not be more than 20 items for better user experience.

### What amount of flexibility does the user have in customizing the design?[​](https://www.greatfrontend.com/questions/system-design/dropdown-menu#what-amount-of-flexibility-does-the-user-have-in-customizing-the-design "Direct link to What amount of flexibility does the user have in customizing the design?")

Users should be able to customize colors, fonts, padding, etc to match their branding.

### What devices will this component be used on?[​](https://www.greatfrontend.com/questions/system-design/dropdown-menu#what-devices-will-this-component-be-used-on "Direct link to What devices will this component be used on?")

All devices — mobile, tablet, desktop.

---

## Architecture / high-level design[​](https://www.greatfrontend.com/questions/system-design/dropdown-menu#architecture--high-level-design "Direct link to Architecture / high-level design")

An example usage of the dropdown menu in React, with event handlers omitted.

```js
<DropdownMenu>

  <DropdownMenu.Button>Actions</DropdownMenu.Button>

  <DropdownMenu.List>

    <DropdownMenu.Item>New File</DropdownMenu.Item>

    <DropdownMenu.Item>Save</DropdownMenu.Item>

    <DropdownMenu.Item>Delete</DropdownMenu.Item>

  </DropdownMenu.List>

<DropdownMenu>
```

|Component|Role|
|---|---|
|Dropdown Menu (`DropdownMenu`)|Root component, coordinates events between the inner components.|
|Menu Button (`DropdownMenu.Button`)|Button that toggles the display state of the `DropdownMenu.List`.|
|Menu List (`DropdownMenu.List`)|Contains the list of items.|
|Menu List Item (`DropdownMenu.Item`)|Individual list items.|

In React, components can communicate with its parents using context or props. We choose to use context here since we are using a composition model here and passing props is inconvenient. `<DropdownMenu>` should contain a context provider that provides the state values (see Data Model section) to all its child components.

---

## Data model[​](https://www.greatfrontend.com/questions/system-design/dropdown-menu#data-model "Direct link to Data model")

Note that for designing components, it might make sense to design the interface/API first or both data model and API concurrently. It depends on the component at hand. Feel free to jump between the two sections.

|State|Type|Description|
|---|---|---|
|`isOpen`|`boolean`|Whether the menu is currently open or closed.|
|`activeItem`|`string`|Menu item that is focused. The reason we need this is that hovering over menu items will change the active item. By keeping track of this value in state, we can respond to keyboard interactions, either focusing on the prev/next item or activating it.|

These state values are housed within `<DropdownMenu>` and provided to all components via React context.

See below for configuration options which are also part of the data model.

---

## Interface definition (API)[​](https://www.greatfrontend.com/questions/system-design/dropdown-menu#interface-definition-api "Direct link to Interface definition (API)")

### General props[​](https://www.greatfrontend.com/questions/system-design/dropdown-menu#general-props "Direct link to General props")

These props apply to most of the components.

|Prop|Type|Description|
|---|---|---|
|`children`|`React.Node`|Children of the component. If using TypeScript/Flow, you can enforce specific components to be used as `children`.|
|`as`|`string \| Component`|In case there is a need to customize the underlying DOM element/component.|
|`className`|`string`|Classnames to add to components in case further visual customization is needed. May or may not be needed depending on theming approach.|

### `DropdownMenu`[​](https://www.greatfrontend.com/questions/system-design/dropdown-menu#dropdownmenu "Direct link to dropdownmenu")

|Prop|Type|Description|
|---|---|---|
|`isInitiallyOpen`|`boolean`|Whether the menu is initially open or closed.|
|`size`|`string`|Prop to customize size. Needed only if customization is desired.|

### `DropdownMenu.Button`[​](https://www.greatfrontend.com/questions/system-design/dropdown-menu#dropdownmenubutton "Direct link to dropdownmenubutton")

|Prop|Type|Description|
|---|---|---|
|`onClick`|`function`|Although the opening/closing will be handled within `DropdownMenu`, exposing an `onClick` prop is useful if additional logic needs to be performed (e.g. analytics logging)|
|Other `button` props|*|Since this component is usually a `<button>`, it should also allow other props that `<button>`s expect, such as `disabled`|

### `DropdownMenu.List`[​](https://www.greatfrontend.com/questions/system-design/dropdown-menu#dropdownmenulist "Direct link to dropdownmenulist")

|Prop|Type|Description|
|---|---|---|
|`maxHeight`|`number \| undefined`|Max height of the menu list. There should be a sensible default of around 200-300px.|
|`position`|`string`|Position of the list relative to the button.|

### `DropdownMenu.Item`[​](https://www.greatfrontend.com/questions/system-design/dropdown-menu#dropdownmenuitem "Direct link to dropdownmenuitem")

|Prop|Type|Description|
|---|---|---|
|`onClick`|`function`|Triggered when item is activated. Possible responses include navigating to another page.|
|`disabled`|`boolean`|Whether the item is disabled. Disabled items cannot be activated and optionally skipped when interacting with menu using a keyboard.|

### Customizing Appearance[​](https://www.greatfrontend.com/questions/system-design/dropdown-menu#customizing-appearance "Direct link to Customizing Appearance")

Designing good APIs for customizing UI components can be found in the [Front End Interview Guidebook's UI Components API Design Principles Section](https://www.greatfrontend.com/front-end-interview-guidebook/user-interface-components-api-design-principles).

---

## Optimizations and deep dive[​](https://www.greatfrontend.com/questions/system-design/dropdown-menu#optimizations-and-deep-dive "Direct link to Optimizations and deep dive")

### Rendering[​](https://www.greatfrontend.com/questions/system-design/dropdown-menu#rendering "Direct link to Rendering")

Rendering the dropdown menu can be quite tricky due to the menu being "floating" and not exactly following the normal flow of page elements.

#### Layout[​](https://www.greatfrontend.com/questions/system-design/dropdown-menu#layout "Direct link to Layout")

There are two common ways to render the dropdown menu near the button. We've provided minimal code samples for each layout approach.

**Relative to Button**

In this approach, we wrap a `<div>` with `position: relative` around the `<button>` and the menu. The menu is using `position: absolute` which makes it positioned relative to its closest positioned ancestor, which is the root `<div>`.

<iframe src="https://codesandbox.io/embed/dropdown-menu-relative-button-emxn9u?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="dropdown-menu-relative-button"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

This method is straightforward and does not require much calculation of elements and their positions to the page, but parent containers with `overflow: hidden` can possibly clip the menu and its contents, or there could be `z-index` issues.

This approach is used by [Headless UI](https://headlessui.com/react/menu) and [Bootstrap](https://getbootstrap.com/docs/5.3/components/dropdowns/).

**Relative to Page**

In this approach, the menu is rendered as a direct child of the `<body>` and positioned `absolute`-ly to the **page** by getting the element's `offsetTop` and `offsetLeft` to get the coordinates of the `<button>` relative to the page and adding its height (`offsetHeight`) to get the final Y position to render the menu.

In React, this can be done using [React Portals](https://beta.reactjs.org/reference/react-dom/createPortal), which lets you render outside the DOM hierarchy of the parent component. A typical use case for portals is when a parent component has an `overflow: hidden` or `z-index` style, but you need the child to visually "break out" of its container. Common examples include dropdown menus, tooltips, modals.

<iframe src="https://codesandbox.io/embed/dropdown-menu-relative-page-r4zoiu?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="dropdown-menu-relative-page"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

The downside of this approach is that if the window is resized or if contents of the page changes such that the height of the page is shorter than when the menu was first shown, the menu's position will be incorrect. As a workaround, you can watch the window for height changes and re-render the menu with the correct position.

This approach is used by [Radix UI](https://www.radix-ui.com/docs/primitives/components/dropdown-menu) and [Reach UI](https://reach.tech/menu-button).

#### Position[​](https://www.greatfrontend.com/questions/system-design/dropdown-menu#position "Direct link to Position")

The component can also allow customization of alignment, in all directions around the `<button>`. Examples of left/right-aligned menu lists can be found in the example below. Supporting more alignments is a matter of finding the right values for `top`/`left`/`right`/`bottom`/CSS translations to use.

<iframe src="https://codesandbox.io/embed/dropdown-menu-relative-button-emxn9u?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="dropdown-menu-relative-button"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

#### Maximum height[​](https://www.greatfrontend.com/questions/system-design/dropdown-menu#maximum-height "Direct link to Maximum height")

Since there is no maximum allowable number of items in the menu, we can set a default maximum height for the menu such that the excess items can be accessed by scrolling within the menu. This height can also be customized.

#### Rendering in HTML or JavaScript[​](https://www.greatfrontend.com/questions/system-design/dropdown-menu#rendering-in-html-or-javascript "Direct link to Rendering in HTML or JavaScript")

The dropdown menu can either be :

1. Rendered into the HTML like [Bootstrap's Dropdowns](https://getbootstrap.com/docs/5.3/components/dropdowns/). The menu is initially hidden from view via `display: none` / `opacity: 0` / `hidden` attribute, and those styles are toggled when the menu is to be shown.
2. Rendered on the fly via JavaScript after the menu button is activated.

The pros of rendering in the HTML first is better runtime performance due to fewer DOM operations needed to show the menu. The downside is that the HTML can be unnecessarily bloated especially if the user never interacts with the dropdown menu at all. Since the menu items usually don't contribute towards SEO and there likely won't be that many elements, the benefits of rendering the menu beforehand in HTML are relatively minor.

### Automatic flipping when near the edge[​](https://www.greatfrontend.com/questions/system-design/dropdown-menu#automatic-flipping-when-near-the-edge "Direct link to Automatic flipping when near the edge")

Smart dropdown menus will know its position relative to the viewport and can flip itself when there is insufficient space to display the full menu in its current position. [Reach UI's Menu](https://reach.tech/menu-button) has autoflipping implemented.

Optionally, scrolling can be disabled on the window when a menu is open (by adding `overflow: hidden` to `<body>`). This limits the user experience but avoids the need for automatic flipping which can be complicated to implement. [Material UI's Menu](https://mui.com/material-ui/react-menu) component takes this approach.

![Dropdown Menu Autoflipping example](https://www.greatfrontend.com/img/questions/dropdown-menu/dropdown-menu-autoflip.png)

The core idea here is to know how tall the menu will be and autoflip when the bottom of the menu will exceed the viewport's height.

- **Viewport height**: `window.innerHeight`.
- **Position of menu's bottom edge**: which is a combination of:
    1. Button position relative to viewport (`buttonEl.getBoundingClientRect().y`)
    2. Button height (`buttonEl.getBoundingClientRect().height`)
    3. Menu height (`menuEl.getBoundingClientRect().height`)
    4. Spacing between button and menu

Here's an example on how to implement the menu autoflipping behavior in React. Make sure to make the preview height short enough in order to see the autoflipping in action.

<iframe src="https://codesandbox.io/embed/dropdown-menu-autoflip-ybqbeu?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="dropdown-menu-autoflip"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### Accessibility (a11y)[​](https://www.greatfrontend.com/questions/system-design/dropdown-menu#accessibility-a11y "Direct link to Accessibility (a11y)")

#### Mouse Interactions[​](https://www.greatfrontend.com/questions/system-design/dropdown-menu#mouse-interactions "Direct link to Mouse Interactions")

Clicking on the button toggles the display state of the menu. Clicking outside an open menu will close that menu. We have to ensure that clicks within the menu do not close it.

Pseudocode for how to implement close on click outside behavior based on the [React hook `useOnClickOutside`](https://usehooks.com/useOnClickOutside/):

```js
function clickListener(event) {

  // No-op if clicked element is button or a

  // descendant of the menu.

  if (

    $buttonElement.contains(event.target) ||

    $menuElement.contains(event.target)

  ) {

    return;

  }

  closeMenu();

}

document.addEventListener('mousedown', clickListener);

document.addEventListener('touchstart', clickListener);
```

Remember to remove the `clickListener`s when the menu is closed.

Here's how to implement click outside to dismiss behavior in React:

<iframe src="https://codesandbox.io/embed/dropdown-menu-click-outside-lq040x?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="dropdown-menu-click-outside"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

#### Focus management[​](https://www.greatfrontend.com/questions/system-design/dropdown-menu#focus-management "Direct link to Focus management")

When the menu is open, focus is trapped and pressing Tab shouldn't shift focus on another element. When the menu is closed, focus returns to the button.

#### Keyboard interactions[​](https://www.greatfrontend.com/questions/system-design/dropdown-menu#keyboard-interactions "Direct link to Keyboard interactions")

There are two WAI-ARIA patterns to follow: the [Menu Button pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menubutton/) and the [Menu pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/). The latter is needed after the menu is open.

**Button**

When the focus is on the button:

|Key|Description|
|---|---|
|Enter|Opens the menu and places focus on the first menu item.|
|Space|Opens the menu and places focus on the first menu item.|
|ArrowDown (Optional)|Opens the menu and moves focus on the first menu item.|
|ArrowUp (Optional)|Opens the menu and moves focus on the last menu item.|

**Menu**

When the focus is on the menu items:

|Key|Description|
|---|---|
|Enter|Activates the item and closes the menu.|
|Space (Optional)|Activates the item and closes the menu.|
|ArrowDown|Moves focus to the next item, optionally wrapping from the last to the first.|
|ArrowUp|Moves focus to the previous item, optionally wrapping from the first to the last.|
|Home|If arrow key wrapping is not supported, moves focus to the first item.|
|End|If arrow key wrapping is not supported, moves focus to the last item.|
|Esc|Closes the menu that contains focus and returns focus to the button.|

#### WAI-ARIA roles, states, and properties[​](https://www.greatfrontend.com/questions/system-design/dropdown-menu#wai-aria-roles-states-and-properties "Direct link to WAI-ARIA roles, states, and properties")

- Button
    - The element that opens the menu has role `button`.
    - The element with role `button` has `aria-haspopup` set to either `menu` or `true`.
    - When the menu is displayed, the element with role button has `aria-expanded` set to `true`. When the menu is hidden, it is recommended that `aria-expanded` is not present. If `aria-expanded` is specified when the menu is hidden, it is set to `false`.
    - The element that contains the menu items displayed by activating the button has role `menu`.
    - Optionally, the element with role button has a value specified for `aria-controls` that refers to the element with role `menu`.
- Menu/Menuitems
    - The element serving as the menu has a role of `menu`.
    - The items contained in a `menu` are child elements of the containing menu and have the `menuitem` role. menuitem
    - When a menu item is disabled, `aria-disabled` is set to `true`.
    - An element with role `menu` either has:
        - `aria-labelledby` set to a value that refers to the `menuitem` or `button` that controls its display.
        - A label provided by `aria-label`.

### Internationalization (i18n)[​](https://www.greatfrontend.com/questions/system-design/dropdown-menu#internationalization-i18n "Direct link to Internationalization (i18n)")

Since all user-facing strings are provided by the user, strings can be displayed as-is. However, do note that some strings can be long in certain languages, so overflowing text should either be truncated or wrapped. Text shouldn't overflow out of the menu/button.

For RTL languages, the menu button and contents have to be horizontally flipped. To achieve this, the menu component can take in a `direction` config option/prop and render contents depending on the value.

![Dropdown Menu Right-to-left example](https://www.greatfrontend.com/img/questions/dropdown-menu/dropdown-menu-rtl.png)

---

## References[​](https://www.greatfrontend.com/questions/system-design/dropdown-menu#references "Direct link to References")

- Themed Examples
    - [Dropdowns · Bootstrap v5.3](https://getbootstrap.com/docs/5.3/components/dropdowns)
    - [React Menu component - Material UI](https://mui.com/material-ui/react-menu/)
- Headless Examples
    - [Dropdown Menu — Radix UI](https://www.radix-ui.com/docs/primitives/components/dropdown-menu)
    - [Menu Button — Reach UI](https://reach.tech/menu-button)
    - [Menu (Dropdown) - Headless UI](https://headlessui.com/react/menu)
- Aria Authoring Practices Guide (APG)
    - [Menu Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menubutton/)
    - [Menu Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menu/)