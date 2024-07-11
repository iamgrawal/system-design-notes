## Question

Design an image carousel component that displays a list of images one at a time, allowing the user to browse through them with pagination buttons.

![Image Carousel Example](https://www.greatfrontend.com/img/questions/image-carousel/image-carousel-example.png)

---

## Requirements exploration[​](https://www.greatfrontend.com/questions/system-design/image-carousel#requirements-exploration "Direct link to Requirements exploration")

### How are the images specified?[​](https://www.greatfrontend.com/questions/system-design/image-carousel#how-are-the-images-specified "Direct link to How are the images specified?")

It will be a configuration option on the component and the list of images have to be specified before initializing the component.

### What devices should the component support?[​](https://www.greatfrontend.com/questions/system-design/image-carousel#what-devices-should-the-component-support "Direct link to What devices should the component support?")

Desktop, tablet, and mobile.

### How will the pagination buttons behave when the user is at the start/end of the image list?[​](https://www.greatfrontend.com/questions/system-design/image-carousel#how-will-the-pagination-buttons-behave-when-the-user-is-at-the-startend-of-the-image-list "Direct link to How will the pagination buttons behave when the user is at the start/end of the image list?")

It should cycle through infinitely.

### Will there be animation when transitioning between images?[​](https://www.greatfrontend.com/questions/system-design/image-carousel#will-there-be-animation-when-transitioning-between-images "Direct link to Will there be animation when transitioning between images?")

Yes the images should animate with horizontal translation.

---

## Architecture / high-level design[​](https://www.greatfrontend.com/questions/system-design/image-carousel#architecture--high-level-design "Direct link to Architecture / high-level design")

Since this component doesn't need any server data, our architecture will just consist of the client side components.

![Image Carousel Architecture](https://www.greatfrontend.com/img/questions/image-carousel/image-carousel-architecture.png)

### Component responsibilities[​](https://www.greatfrontend.com/questions/system-design/image-carousel#component-responsibilities "Direct link to Component responsibilities")

- **ViewModel + Model**: The brain of the component, holds the configuration and state of the component, orchestrates events between the components and informs the "Image" component which image to render.
- **Image**: Displays the currently selected image.
- **Prev/Next Buttons**: Tells the "ViewModel" to change to the prev/next image depending on which button is clicked.
- **Progress Dots**: Tells the "ViewModel" which image to show when the respective dot/page is being clicked/selected.

There's no need to separate the "Model" and the "ViewModel" in this component because it's a small component.

### Flux architecture[​](https://www.greatfrontend.com/questions/system-design/image-carousel#flux-architecture "Direct link to Flux architecture")

A [Flux](https://facebook.github.io/flux/)/[Redux](https://redux.js.org/)/[Reducer](https://beta.reactjs.org/learn/scaling-up-with-reducer-and-context)-like architecture is recommended to abstract away the action sources from the action logic/implementation. Some actions can be triggered by interacting with various UI elements, periodically by a timer, or keypresses.

---

## Data model[​](https://www.greatfrontend.com/questions/system-design/image-carousel#data-model "Direct link to Data model")

Only the "ViewModel" will hold any state and data, the other components are part of the view and won't hold data. It can contain the following fields:

- Configuration
    - List of images, which includes both the image URL and `alt` value, if provided.
    - Transition duration.
    - Size: Height and width of the image.
- State
    - Index of current image. This value can be modified by the interactive elements (Prev/Next buttons, Progress Dots).

---

## Interface definition (API)[​](https://www.greatfrontend.com/questions/system-design/image-carousel#interface-definition-api "Direct link to Interface definition (API)")

Since we're talking about designing a UI component here, API will focus on the external API of the components: what configuration options are provided so that developers can use the component in a customized fashion.

### Basic API[​](https://www.greatfrontend.com/questions/system-design/image-carousel#basic-api "Direct link to Basic API")

- **List of images**: An array of image URLs to be displayed within the carousel with any associated metadata (optional but good to have).
- **Transition duration (ms)**: Duration for the translation animation during image transitions.
- **Height (px)**: Height of the image.
- **Width (px)**: Width of the image.

An example of an `ImageCarousel` component defined in React:

<ImageCarousel

  images={[

    { src: 'https://example.com/images/foo.jpg', alt: 'A foo' },

    { src: 'https://example.com/images/bar.jpg', alt: 'A bar' },

    /* More images if desired. */

  ]}

  transitionDuration={300}

  height={500}

  width={800}

/>

### Advanced API[​](https://www.greatfrontend.com/questions/system-design/image-carousel#advanced-api "Direct link to Advanced API")

These are non-essential APIs but worth a discussion if there's time.

- **Autoplay**: Whether the carousel will automatically progress to the next image after some time.
    - A timer state value will be needed to keep incrementing the image.
    - The timer should be cancelled/reset if the current image was manually changed by the user (either through Prev/Next buttons or Progress dots).
- **Delay**: Delay between transitions. Only needed if the carousel is in autoplay mode.
- **Event listeners**: It'd be useful to add event listeners to buttons of the component so that developers can implement their own extra functionality (e.g. logging user interactions)
    - `onLoad`: When the first image is done loading and shown in the carousel.
    - `onPageSelect`: When a page is selected.
    - `onNextClick`: When the next image button is triggered.
    - `onPrevClick`: When the prev image button is triggered.
- **Theming**: See [Front End Interview Guidebook's UI Components API Design Principles Section](https://www.greatfrontend.com/front-end-interview-guidebook/user-interface-components-api-design-principles).
- **Loop**: Enable a looping behavior where clicking on "Next" button while the last image is presented returns to the first and clicking on "Prev" button while the first image is presented shows the last image.

### Internal API[​](https://www.greatfrontend.com/questions/system-design/image-carousel#internal-api "Direct link to Internal API")

|API|Source|Description|
|---|---|---|
|`prevImage()`|Prev Button / Keyboard events|Shows the previous image|
|`nextImage()`|Next Button / Keyboard events / Timer (if autoplay)|Shows the next image|
|`showImage(index)`|Progress Dots|Skips to a specific image|

- These behaviors are encapsulated within APIs because they can be called from multiple places (UI elements, timers) and can contain a fair amount of logic depending on whether looping behavior is turned on.
- `prevImage()` and `nextImage()` can call `showImage(index)` internally.
- These internal APIs can be implemented as Flux/Redux actions if using a Flux/Redux architecture.

---

## Optimizations and deep dive[​](https://www.greatfrontend.com/questions/system-design/image-carousel#optimizations-and-deep-dive "Direct link to Optimizations and deep dive")

### Layout implementation[​](https://www.greatfrontend.com/questions/system-design/image-carousel#layout-implementation "Direct link to Layout implementation")

#### Images[​](https://www.greatfrontend.com/questions/system-design/image-carousel#images "Direct link to Images")

A simple version to achieve the layout is to use `display: flex` to make the images render in a horizontal row and programatically change the horizontal scroll offset to show the various images.

You can draw out such a diagram on the whiteboard to illustrate the layout:

![Image Carousel Layout](https://www.greatfrontend.com/img/questions/image-carousel/image-carousel-layout.png)

The box with the black border indicates the currently visible window.

**Sample Code**

```html
<div class="carousel-images">

  <img class="carousel-image" alt="..." src="..." />

  <img class="carousel-image" alt="..." src="..." />

  <img class="carousel-image" alt="..." src="..." />

  <!-- More images -->

</div>
```

```css
.carousel-images {

  display: flex;

  height: 400px;

  width: 600px;

  overflow: hidden;

}

.carousel-image {

  height: 400px;

  width: 600px;

}
```

To scroll to a particular image smoothly, we can do:

```js
document.querySelector('.carousel-images').scrollTo({

  left: selectedIndex * 600,

  behavior: 'smooth',

});
```

#### Fitting Images[​](https://www.greatfrontend.com/questions/system-design/image-carousel#fitting-images "Direct link to Fitting Images")

The layout above assumes that all the images are of the same size. However, it is unlikely that the user will provide images that are of that exact size.

Here are a few ways we can get around this:

##### **CSS `background-size`**[​](https://www.greatfrontend.com/questions/system-design/image-carousel#css-background-size "Direct link to css-background-size")

This requires a change in the HTML to render the image using CSS `background`/`background-image` instead of `<img src="...">`. The advantage of this is that we can use the `background-size` property that has these two modes:

- `contain`: Scales the image as large as possible within its container without cropping or stretching the image. If the container is larger than the image, this will result in image tiling, unless the `background-repeat` property is set to `no-repeat`.
- `cover`: Scales the image (while preserving its ratio) to the smallest possible size to fill the container (that is: both its height and width completely cover the container), leaving no empty space. If the proportions of the background differ from the element, the image is cropped either vertically or horizontally.

_Source: [background-size - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)_

Both advantages has its merits and which to use really depends on the provided images. One way is to allow the developer to customize whether to use `contain` or `cover` for all the images or even allowing customizing this setting for individual images.

##### **CSS `object-fit`**[​](https://www.greatfrontend.com/questions/system-design/image-carousel#css-object-fit "Direct link to css-object-fit")

CSS `object-fit` is a feature that is similar to how `background-size` works for `background-image`s, but for `<img>` and `<video>` HTML tags. It has `contain` and `cover` properties as well which work the same way as `background-size`'s version.

This way is preferred since it's more semantic to use `<img>` tags than `<div>`s with `background-image`s.

#### Vertically-center buttons[​](https://www.greatfrontend.com/questions/system-design/image-carousel#vertically-center-buttons "Direct link to Vertically-center buttons")

To vertically center the buttons, we can use `position: absolute` on the buttons along with some `transform: translateY(-50%)` to shift it up by half its height.

```html
<div class="carousel-image-container">

  <div class="carousel-images">

    <img class="carousel-image" alt="..." src="..." />

    <img class="carousel-image" alt="..." src="..." />

    <!-- More images -->

  </div>

  <button class="carousel-button carousel-button-prev">...</button>

  <button class="carousel-button carousel-button-next">...</button>

</div>
```

```css
.carousel-image-container {

  height: 400px;

  width: 600px;

  position: relative; /* So that position: absolute will be relative to this element. */

}

.carousel-button {

  position: absolute;

  top: 50%;

  transform: translateY(-50%); /* Shifts the button up by half its height. */

}

.carousel-button-prev {

  left: 30px;

}

.carousel-button-next {

  right: 30px;

}
```

### User experience[​](https://www.greatfrontend.com/questions/system-design/image-carousel#user-experience "Direct link to User experience")

- **Scroll snapping**: Use [CSS scroll snapping](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type) and show the scrollbar so that users can still use native scrollbars to scroll through the images but the images will "snap" nicely and the scroll position will nicely align to show a full image once scrolling stops. Mobile users expect to be able to swipe through the images and CSS scroll snap helps you achieve this on mobile devices easily.
- **Interactive elements should be large enough**. The Prev/Next buttons should be at least 44px tall and wide to be easy to tap on mobile devices. One trick is to increase the hit area of the button to the entire leftmost/rightmost section. The dots are probably too small on mobile for precise interactions and can just be hidden or made non-interactive.
- **Reposition Prev/Next buttons**: It's more convenient to have the Prev/Next buttons close to each other. This goes against the example design but speeds up navigation because the distance between the buttons is minimized.

### Performance[​](https://www.greatfrontend.com/questions/system-design/image-carousel#performance "Direct link to Performance")

#### Defer loading of images that aren't on-screen[​](https://www.greatfrontend.com/questions/system-design/image-carousel#defer-loading-of-images-that-arent-on-screen "Direct link to Defer loading of images that aren't on-screen")

Most images on the carousel are never shown to the user, especially those at the back. It'd be a waste of bandwidth to load all the images if they are not being shown.

Hence the images can be loaded only when they are on-screen (or about to be shown). This can be implemented using JavaScript or just via HTML. A pure HTML methods involves using the [`<img loading="lazy">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-loading) attribute, which defers loading images that aren't currently within the visible viewport.

#### Preloading of images[​](https://www.greatfrontend.com/questions/system-design/image-carousel#preloading-of-images "Direct link to Preloading of images")

JavaScript can be used if fine-grain control regarding image loading is desired. To help minimize the scenario where an image needs to be shown but hasn't finished loading, the component can pre-emptively load the next image with the following code:

```js
const preloadImage = new Image();

preloadImage.src = url;
```

[Airbnb optimized the image carousel experience in their room listings with a combination of lazy loading and preloading](https://medium.com/airbnb-engineering/building-a-faster-web-experience-with-the-posttask-scheduler-276b83454e91) behavior:

1. Initially, only the first image is loaded (the remaining images will be lazily loaded).
2. The second image is preloaded when the user shows possible intent of viewing more images:
    - Cursor hovers over the image carousel.
    - Focuses on the "Next" button via tabbing.
    - Image carousel comes into view (on mobile devices).
3. If the user does view the second image (which signals high intent to browse even more images), the next three images (3rd to 5th) are preloaded.
4. As the user clicks "Next" again to browse more images, the (n + 3)th image is preloaded.

![Airbnb Image Carousel Lazy Loading](https://www.greatfrontend.com/img/questions/travel-booking-airbnb/airbnb-image-loading.gif)

Airbnb image carousel lazy loading example on mobile

#### Device-specific images[​](https://www.greatfrontend.com/questions/system-design/image-carousel#device-specific-images "Direct link to Device-specific images")

It'd be a waste to load high resolution images on a mobile device where the screen size is too small to display the details anyway. A good feature to add would be to allow the user to provide images of different sizes to be displayed on different devices. This can be implemented using JavaScript, the `srcset` attribute on `<img>` tags, or the new `<picture>` tag.

#### Virtualized lists[​](https://www.greatfrontend.com/questions/system-design/image-carousel#virtualized-lists "Direct link to Virtualized lists")

If there are too many images, we can use [virtualized lists](https://www.patterns.dev/posts/virtual-lists/) to render only the visible images in the DOM.

### Internationalization (i18n)[​](https://www.greatfrontend.com/questions/system-design/image-carousel#internationalization-i18n "Direct link to Internationalization (i18n)")

i18n is not extremely relevant to this question but the user should be able to customize the `aria-label` strings for the Prev/Next buttons for the current language of the page. These strings can be specified as configuration options.

### Accessibility (a11y)[​](https://www.greatfrontend.com/questions/system-design/image-carousel#accessibility-a11y "Direct link to Accessibility (a11y)")

Image carousels are notorious for having poor accessibility due to how much effort it takes to build them right. For this reason, you should probably not build your own custom image carousels without expecting to dedicate significant amount of time to achieve a top quality component. Some things to take note of when building accessible image carousels.

#### Mobile-friendliness[​](https://www.greatfrontend.com/questions/system-design/image-carousel#mobile-friendliness "Direct link to Mobile-friendliness")

- Interactive elements should be large enough to for mobile (at least 44px x 44px).
- Enable swiping to scroll through images (this is already the case with an `overflow-x: scroll` + [CSS scroll snap](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type) implementation).
- Progress dots be spaced further apart or made non-interactive.

#### Screen readers[​](https://www.greatfrontend.com/questions/system-design/image-carousel#screen-readers "Direct link to Screen readers")

- `<img>` tags should have a meaningful `alt` description specified or use an empty string.
- Add `aria-label`s to the Prev/Next buttons since there's no visible label within them.

#### Keyboard support[​](https://www.greatfrontend.com/questions/system-design/image-carousel#keyboard-support "Direct link to Keyboard support")

- Use the `<button>` HTML tag for the Prev/Next buttons where possible so that the buttons are focusable.
- Add `<div role="region" aria-label="Image Carousel" tabindex="0">` to make the carousel focusable and attach Left/Right keydown handlers to allow scrolling through the images with the keyboard.

---

## Changelog[​](https://www.greatfrontend.com/questions/system-design/image-carousel#changelog "Direct link to Changelog")

- 2023/01/22
    - Mention about Flux architecture.
    - Expand on the theming section.
    - Add Airbnb image carousel example.

## References[​](https://www.greatfrontend.com/questions/system-design/image-carousel#references "Direct link to References")

- [Creating an Accessible Image Carousel](https://www.aleksandrhovhannisyan.com/blog/image-carousel-tutorial/)
- [Designing A Perfect Carousel UX](https://www.smashingmagazine.com/2022/04/designing-better-carousel-ux/)
- [A Content Slider](https://inclusive-components.design/a-content-slider/)