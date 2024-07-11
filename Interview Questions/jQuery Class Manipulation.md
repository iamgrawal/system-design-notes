# jQuery Class Manipulation

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

20 mins

Users completed

513 completed

**Note:** If you haven't completed the [`jQuery.css`](https://www.greatfrontend.com/questions/javascript/jquery-css) question, you should attempt that first.

Before [`Element.classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) and [`DOMTokenList`](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList) were part of the browser standards, it was a hassle to manipulate classes on a DOM element.

[jQuery](https://jquery.com/) is a library that simplifies DOM manipulation (among other things). jQuery (using the `$` alias function), provided convenient APIs to toggle, add, and remove classes from elements via `.toggleClass()`, `.addClass()` and `.removeClass()`.

// <button class="foo bar">Click me</button>

$('button').toggleClass('bar'); // <button class="foo">Click me</button>

$('button').addClass('baz'); // <button class="foo baz">Click me</button>

$('button').removeClass('foo'); // <button class="baz">Click me</button>

$('button').toggleClass('bar'); // <button class="baz bar">Click me</button>

The return value of most jQuery manipulation APIs is the jQuery object itself so that method calls can be chained. The above can be further simplified again:

// <button class="foo bar">Click me</button>

$('button')

  .toggleClass('bar')

  .addClass('baz')

  .removeClass('foo')

  .toggleClass('bar');

// <button class="baz bar">Click me</button>

Implement the `toggleClass()`, `addClass()` and `removeClass()` methods according to the following specifications. Do not use `Element.classList` and methods to manipulate `DOMTokenList` otherwise the problem becomes quite trivial.

**Note**: The official jQuery library selects all matched elements and modified all matched elements. However, for this question we can assume there will only be a maximum of one element matching the selector.

## `toggleClass(className, state)`

Add or remove one or more classes from the matched element, depending on either the class's presence or the value of the state argument.

|Parameter|Type|Description|
|---|---|---|
|`className`|`string`|One or more classes (separated by spaces) to be toggled for the matched element.|
|`state`|`boolean`|An optional boolean value to determine whether the class(es) should be added or removed.|

## `addClass(className)`

|Parameter|Type|Description|
|---|---|---|
|`className`|`string`|One or more classes (separated by spaces) to be added to the matched element.|

## `removeClass(className)`

|Parameter|Type|Description|
|---|---|---|
|`className`|`string`|One or more classes (separated by spaces) to be removed from the matched element.|

# Similar Questions

- [jQuery.css](https://www.greatfrontend.com/questions/javascript/jquery-css)
    
    Difficulty
    
    Easy