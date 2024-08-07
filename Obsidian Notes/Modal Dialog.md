## Question

Design a modal/dialog component that shows content in a window overlaying the page.

![Modal Dialog Example](https://www.greatfrontend.com/img/questions/modal-dialog/modal-dialog-example.png)

### Real-life examples

- [Modal · Bootstrap v5.3](https://getbootstrap.com/docs/5.3/components/modal)
- [React Modal component - Material UI](https://mui.com/material-ui/react-modal/)
- [Dialog — Radix UI](https://www.radix-ui.com/docs/primitives/components/dialog)

---

## Requirements exploration[​](https://www.greatfrontend.com/questions/system-design/modal-dialog#requirements-exploration "Direct link to Requirements exploration")

### What are the components of the modal?[​](https://www.greatfrontend.com/questions/system-design/modal-dialog#what-are-the-components-of-the-modal "Direct link to What are the components of the modal?")

It's up to you to decide. At the basic level it should allow customization of the contents. Whether to add built-in support for close buttons, titles, footer actions will be up to you.

### What amount of flexibility does the user have in customizing the design?[​](https://www.greatfrontend.com/questions/system-design/modal-dialog#what-amount-of-flexibility-does-the-user-have-in-customizing-the-design "Direct link to What amount of flexibility does the user have in customizing the design?")

Users should be able to customize colors, fonts, padding, etc, of the modal elements to match their branding.

### What devices will this component be used on?[​](https://www.greatfrontend.com/questions/system-design/modal-dialog#what-devices-will-this-component-be-used-on "Direct link to What devices will this component be used on?")

All devices — mobile, tablet, desktop.

---

## Architecture / high-level design[​](https://www.greatfrontend.com/questions/system-design/modal-dialog#architecture--high-level-design "Direct link to Architecture / high-level design")

Modals, like many components that reveal content, have a trigger element and the contents elements. Modals can be opened through user actions or background actions, so we should decouple the trigger source from the modal contents.

Basic modals that only include the contents don't have complicated architecture. However, many modals from UI libraries have three distinct sections: header, body, footer.

An example usage of modal components in React, with event handlers omitted.

```js
<Modal>

  <Modal.Header>My Modal Title</Modal.Header>

  <Modal.Body>

    <p>Modal body text goes here.</p>

  </Modal.Body>

  <Modal.Footer>

    <button>Close</button>

    <button>Confirm</button>

  </Modal.Footer>

<Modal>
```

|Component|Role|
|---|---|
|Modal Root (`Modal`)|Root component, coordinates events between the inner components.|
|Modal Overlay|Component that renders the background overlay, usually dimming out the page contents.|
|Modal Header (`Modal.Header`)|The top section of the modal, contains the title and a close button.|
|Modal Body (`Modal.Body`)|The main contents of the modal.|
|Modal Footer (`Modal.Footer`)|Optional bottom section of the modal, usually contains close/submit buttons.|

In React, components can communicate with its parents using context or props. We choose to use context here since we are using a composition model here and passing props is inconvenient. `<Modal>` should contain a context provider that provides the config options (`<Modal>`'s `props`) to all its child components in case they need it.

---

## Data model[​](https://www.greatfrontend.com/questions/system-design/modal-dialog#data-model "Direct link to Data model")

Note that for designing components, it might make sense to design the interface/API first or both data model and API concurrently. It depends on the component at hand. Feel free to jump between the two sections.

Modal components do not need much state. We'll build the modal as a controlled component, which is the usual approach taken by libraries. Hence the open/closed state is managed outside the component.

|State|Type|Description|
|---|---|---|
|`previousFocusElement`|`HTMLElement`|The DOM element in focus before the modal was shown. Read more on why this is needed in the [Focus Management](https://www.greatfrontend.com/questions/system-design/modal-dialog#focus-management) section.|

See below for configuration options which are also part of the data model.

---

## Interface definition (API)[​](https://www.greatfrontend.com/questions/system-design/modal-dialog#interface-definition-api "Direct link to Interface definition (API)")

### General props[​](https://www.greatfrontend.com/questions/system-design/modal-dialog#general-props "Direct link to General props")

These props apply to most of the components.

|Prop|Type|Description|
|---|---|---|
|`children`|`React.Node`|Children of the component. If using TypeScript/Flow, you can enforce specific components to be used as `children`.|
|`as`|`string \| Component`|In case there is a need to customize the underlying DOM element/component.|
|`className`|`string`|Classnames to add to components in case further visual customization is needed. May or may not be needed depending on theming approach.|

### `Modal`[​](https://www.greatfrontend.com/questions/system-design/modal-dialog#modal "Direct link to modal")

|Prop|Type|Description|
|---|---|---|
|`isOpen`|`boolean`|Whether the modal is open or closed.|
|`onClose`|`Function`|Callback to be triggered when the modal is closed, possibly from pressing the close button or hitting the "Escape" key".|
|`maxHeight`|`number \| undefined`|Max height of the modal. There should be a sensible default of around 80% of the viewport height.|
|`width`|`number \| undefined`|Width of the modal. There should be a sensible default of 500-600px.|

### `Modal.Header`[​](https://www.greatfrontend.com/questions/system-design/modal-dialog#modalheader "Direct link to modalheader")

Basic version doesn't need props other than `children`.

### `Modal.Body`[​](https://www.greatfrontend.com/questions/system-design/modal-dialog#modalbody "Direct link to modalbody")

Basic version doesn't need props other than `children`.

### `Modal.Footer`[​](https://www.greatfrontend.com/questions/system-design/modal-dialog#modalfooter "Direct link to modalfooter")

Basic version doesn't need props other than `children`.

### Customizing appearance[​](https://www.greatfrontend.com/questions/system-design/modal-dialog#customizing-appearance "Direct link to Customizing appearance")

Designing good APIs for customizing UI components can be found in the [Front End Interview Guidebook's UI Components API Design Principles Section](https://www.greatfrontend.com/front-end-interview-guidebook/user-interface-components-api-design-principles).

Most of the modal's contents in the header/body/footer will be provided by the user, hence there isn't that much default styling a modal component need to provide.

---

## Optimizations and deep dive[​](https://www.greatfrontend.com/questions/system-design/modal-dialog#optimizations-and-deep-dive "Direct link to Optimizations and deep dive")

### Rendering[​](https://www.greatfrontend.com/questions/system-design/modal-dialog#rendering "Direct link to Rendering")

#### Breaking out of DOM hierarchy[​](https://www.greatfrontend.com/questions/system-design/modal-dialog#breaking-out-of-dom-hierarchy "Direct link to Breaking out of DOM hierarchy")

Rendering the modal is more tricky than it seems due to the fact that modals are being displayed over the page and does not follow the normal flow of page elements. It's important to render the modal outside of the DOM hierarchy of the parents, because if the parents contain styling that clips its contents, the modal contents might not be fully visible. Here's an example from the [React docs](https://beta.reactjs.org/reference/react-dom/createPortal#rendering-a-modal-dialog-with-a-portal) demonstrating the issue.

<iframe src="https://codesandbox.io/embed/modal-clipping-wnr51p?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="modal-clipping"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

In React, rendering outside the DOM hierarchy of the parent component can be achieved using [React Portals](https://beta.reactjs.org/reference/react-dom/createPortal). Common use cases of portals include tooltips, dropdown menus, popovers.

#### Overlay[​](https://www.greatfrontend.com/questions/system-design/modal-dialog#overlay "Direct link to Overlay")

To help users focus on the content within the modal, there is usually an overlay/backdrop to dim out the page's contents. To render an element that covers the whole page, we can use the following CSS:

```css
.modal-overlay {

  /* Black color with some opacity. */

  background-color: rgba(0, 0, 0, 0.7);

  position: fixed;

  top: 0;

  left: 0;

  right: 0;

  bottom: 0;

}
```

#### Centered modal[​](https://www.greatfrontend.com/questions/system-design/modal-dialog#centered-modal "Direct link to Centered modal")

To center the modal contents within the modal overlay, we can add the following styles to the `.modal-overlay`:

```css
.modal-overlay {

  /* Original styles are omitted. */

  display: flex;

  justify-content: center;

  padding: 20px;

}
```

which will work with the following HTML structure.

<div className="modal-overlay">

  <div className="modal-contents">...</div>

</div>

If vertical centering of the contents is desired, `align-items: center` can be added to `.modal-overlay`.

Here's a basic example of a modal with an overlay and optional vertical center mode:
<iframe src="https://codesandbox.io/embed/modal-position-t1oldf?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="modal-position"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

#### Maximum height[​](https://www.greatfrontend.com/questions/system-design/modal-dialog#maximum-height "Direct link to Maximum height")

Since the modal can contain a lot of contents, we can set a default maximum height for the modal such that the excess items will be scrollable within `Modal.Body`. This height can also be customized by specifying the `maxHeight` prop.

#### Scroll lock[​](https://www.greatfrontend.com/questions/system-design/modal-dialog#scroll-lock "Direct link to Scroll lock")

When the modal is shown, the modal contents are in focus. To prevent the user from scrolling the background contents, the page should lock page-level scrolling. One way is to add `overflow: hidden` to `<body>`.

#### Rendering in HTML or JavaScript[​](https://www.greatfrontend.com/questions/system-design/modal-dialog#rendering-in-html-or-javascript "Direct link to Rendering in HTML or JavaScript")

The modal can either be:

1. Rendered into the HTML like [Bootstrap's Modals](https://getbootstrap.com/docs/5.3/components/modal/). The modal is initially hidden from view via `display: none` / `opacity: 0` / `hidden` attribute, and those styles are toggled when the modal is to be shown.
2. Rendered on the fly via JavaScript after the modal trigger button is activated.

The pros of rendering in the HTML first is better runtime performance due to fewer DOM operations needed to show the modal. The downside is that the HTML can be unnecessarily bloated especially if the modal is never shown at all. Since modal contents usually contain secondary information, they shouldn't contribute towards SEO and doesn't need to be server side-rendered. The benefits of rendering the modal beforehand in HTML are relatively minor.

### Accessibility (a11y)[​](https://www.greatfrontend.com/questions/system-design/modal-dialog#accessibility-a11y "Direct link to Accessibility (a11y)")

#### Mouse interactions[​](https://www.greatfrontend.com/questions/system-design/modal-dialog#mouse-interactions "Direct link to Mouse interactions")

Typically, clicking outside the modal (on the overlay) will close the modal. We have to ensure that clicks within the modal do not close the modal.

```js
function clickListener(event) {

  // No-op if clicked element is a

  // descendant of the modal contents.

  if ($modalContentsElement.contains(event.target)) {

    return;

  }

  closeModal();

}

document.addEventListener('mousedown', clickListener);

document.addEventListener('touchstart', clickListener);
```

Remember to remove the `clickListener`s when the modal is closed.

Here's an example in React:
<iframe src="https://codesandbox.io/embed/modal-dismiss-click-outside-74fyqc?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="modal-dismiss-click-outside"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

#### Focus management[​](https://www.greatfrontend.com/questions/system-design/modal-dialog#focus-management "Direct link to Focus management")

The most complicated aspect of implementing a modal is probably focus management. Contents within modals are meant to be treated like a separate document; using the Tab key cycles through focusable elements within the dialog only and focus can never be on elements outside of the component for as long as the modal is shown. This behavior/phenomenon is known as "focus trapping".

When a modal opens, focus moves to an element inside the modal. Generally, focus is set on the first focusable element, but there are some exceptions as mentioned in [Dialog (Modal) pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).

When a modal closes, focus returns to the element that opened the modal (unless the element no longer exists, then focus on another reasonable element).

**How to implement focus management for modals:**

1. When the modal is first opened, keep a reference to the element that opened the modal in the modal's state.
2. Focus on an element inside the modal.
3. Add `keydown` listeners for the Tab key that contains the following logic:
    1. When the Tab key is pressed, determine if the focus should be shifted to the next or previous tabbable element by checking if the Shift key is also pressed (via the `shiftKey` value on the `KeyboardEvent`).
    2. Find all tabbable elements within the modal.
    3. From the current focused element, find the next/previous tabbable element.
    4. Focus on that new element.
4. When the modal is closed, hide the modal and move focus to the element that opened the modal.

In practice, focus trapping can be done via [focus-trap](https://focus-trap.github.io/focus-trap/) libraries. If using React, the [`react-focus-lock`](https://github.com/theKashey/react-focus-lock) library which is what [Reach UI's Dialog component](https://reach.tech/dialog) uses.

#### Keyboard interactions[​](https://www.greatfrontend.com/questions/system-design/modal-dialog#keyboard-interactions "Direct link to Keyboard interactions")

The following is extracted from the [Dialog (Modal) pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/):

|Key|Description|
|---|---|
|Tab|Moves focus to the next tabbable element inside the modal. If focus is on the last tabbable element inside the modal, moves focus to the first tabbable element inside the modal.|
|Shift + Tab|Moves focus to the previous tabbable element inside the modal. If focus is on the first tabbable element inside the modal, moves focus to the last tabbable element inside the modal.|
|Esc|Closes the modal.|

Focus trapping is essential for the required Tab-ing behavior, otherwise the focus will "leak" out of the modal:

#### WAI-ARIA roles, states, and properties[​](https://www.greatfrontend.com/questions/system-design/modal-dialog#wai-aria-roles-states-and-properties "Direct link to WAI-ARIA roles, states, and properties")

The following is extracted from the [Dialog (Modal) pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).

- The element that serves as the modal container has a role of `dialog`.
- All elements required to operate the modal are descendants of the element that has role `dialog`.
- The modal container element has `aria-modal` set to `true`.
- The modal has either:
    - A value set for the `aria-labelledby` property that refers to a visible modal title.
    - A label specified by `aria-label`.
- Optional `aria-describedby` property is set on the element with the `dialog` role to indicate which element or elements in the dialog contain content that describes the primary purpose or message of the dialog. Read the full guidance at [Dialog (Modal) pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).

#### `<dialog>` element[​](https://www.greatfrontend.com/questions/system-design/modal-dialog#dialog-element "Direct link to dialog-element")

HTML now has a native `<dialog>` element that can be used in creating modal dialogs as it provides usability and accessibility features that must be replicated if using other elements for a similar purpose.

However, it is still relatively new and browser compatibility is not great. Moreover, behaviors like focus trapping still has to be manually implemented, which makes using a native `<dialog>` element less compelling.

### Animations and transitions[​](https://www.greatfrontend.com/questions/system-design/modal-dialog#animations-and-transitions "Direct link to Animations and transitions")

If animation of the modal elements is desired and the transitions of the overlay and the contents need to be independent (e.g. overlay fades in while the contents translates up vertically), the DOM structure will have to be changed and the contents cannot be rendered within the overlay's DOM. A structure similar to like this will be required:

```js
<div>

  <!-- The overlay, rendered as a fixed sibling to the contents. -->

  <div class="modal-overlay" aria-hidden="true"></div>

  <!-- Full screen container to center the panel. -->

  <div class="modal-contents-container">

    <div class="modal-contents">...</div>

  </div>

</div>
```

Here's an example of the entrance animation in React:

<iframe src="https://codesandbox.io/embed/modal-animated-imlco8?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="modal-animated"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

Exit transitions are non-trivial to implement properly in React because conditional rendering causes the DOM elements to be removed from the document when they are no longer needed on the page. Here's an example of a modal where the entrance and exit are both animated.
<iframe src="https://codesandbox.io/embed/modal-animated-exit-t3wwxr?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="modal-animated-exit"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### Internationalization (i18n)[​](https://www.greatfrontend.com/questions/system-design/modal-dialog#internationalization-i18n "Direct link to Internationalization (i18n)")

Since all user-facing strings are provided by the user, strings can be displayed as-is. However, do note that some strings can be long in certain languages, so overflowing text should either by truncated or wrapped. Text shouldn't overflow out of the modal elements. You usually don't want the modal title/footer to be more than a line long, so truncation is recommended here.

For RTL languages, the modal elements have to be horizontally flipped. To achieve this, the root modal component can take in a `direction` config option/prop and render contents depending on the value.

![Modal Dialog Right-to-left Example](https://www.greatfrontend.com/img/questions/modal-dialog/modal-dialog-rtl.png)

### Stacked modals[​](https://www.greatfrontend.com/questions/system-design/modal-dialog#stacked-modals "Direct link to Stacked modals")

It is possible for modal contents to contain triggers that present even more modals, so the following needs to be considered:

- Decide whether there should be an overlay per modal level, which will visually make the backdrop darker the higher the level of stacking.
- Dismissing a modal via the Esc key or clicking outside the topmost modal's contents should only dismiss the topmost modal and not all the modals.
- Dismissing a lower layer modal should also dismiss all the modals on top of it (or make this behavior customizable).

### Advanced topics[​](https://www.greatfrontend.com/questions/system-design/modal-dialog#advanced-topics "Direct link to Advanced topics")

- Tooltips and dropdown menus within a modal.
- Alert dialog role and [ARIA pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/).

---

## References[​](https://www.greatfrontend.com/questions/system-design/modal-dialog#references "Direct link to References")

- Themed examples
    - [Modal · Bootstrap v5.3](https://getbootstrap.com/docs/5.3/components/modal)
    - [React Modal component - Material UI](https://mui.com/material-ui/react-modal/)
- Headless examples
    - [Dialog — Radix UI](https://www.radix-ui.com/docs/primitives/components/dialog)
    - [Dialog (Modal) — Reach UI](https://reach.tech/dialog)
    - [Dialog (Modal) - Headless UI](https://headlessui.com/react/dialog)
- Aria Authoring Practices Guide (APG)
    - [Dialog (Modal) Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
    - [Alert and Message Dialogs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/)