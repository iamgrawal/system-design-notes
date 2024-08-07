## Question

Design a poll widget that can be easily embedded on websites, such as articles and blogs to allow website viewers to vote on options.

![Poll Widget Example](https://www.greatfrontend.com/img/questions/poll-widget/poll-widget-example.png)

### Requirements

- The widget displays the following information:
    - A list of options for users to vote on.
    - The latest number of votes for each option. This is only shown after the user has submitted a vote.
- The following back end APIs are provided:
    - Fetching of the poll results.
    - Record a new vote on an existing poll option.
    - Remove a vote from an existing poll option.
- It should not require much effort for a website owner to embed a poll widget within their websites.

---

## Requirements exploration[​](https://www.greatfrontend.com/questions/system-design/poll-widget#requirements-exploration "Direct link to Requirements exploration")

These are questions you should be asking your interviewer to dive deeper into the problem and refine the requirements.

### What are the most critical aspects of the component?[​](https://www.greatfrontend.com/questions/system-design/poll-widget#what-are-the-most-critical-aspects-of-the-component "Direct link to What are the most critical aspects of the component?")

- Ease of embedding the polling widget within websites.
- User experience as a voter.

### Does the widget show details of people (e.g. thumbnail) who voted for an option?[​](https://www.greatfrontend.com/questions/system-design/poll-widget#does-the-widget-show-details-of-people-eg-thumbnail-who-voted-for-an-option "Direct link to Does the widget show details of people (e.g. thumbnail) who voted for an option?")

Whether we show that level of detail will affect the data model and APIs. We assume a basic version where we just have to show the count.

### Can a user vote on multiple options?[​](https://www.greatfrontend.com/questions/system-design/poll-widget#can-a-user-vote-on-multiple-options "Direct link to Can a user vote on multiple options?")

Yes, a user can vote on multiple options.

### How do we determine the length/proportion of each option bar to render?[​](https://www.greatfrontend.com/questions/system-design/poll-widget#how-do-we-determine-the-lengthproportion-of-each-option-bar-to-render "Direct link to How do we determine the length/proportion of each option bar to render?")

You are free to decide that.

### In what order should the options be shown? By popularity/user has voted/random?[​](https://www.greatfrontend.com/questions/system-design/poll-widget#in-what-order-should-the-options-be-shown-by-popularityuser-has-votedrandom "Direct link to In what order should the options be shown? By popularity/user has voted/random?")

Popularity.

### How are the options determined? Can users add more options?[​](https://www.greatfrontend.com/questions/system-design/poll-widget#how-are-the-options-determined-can-users-add-more-options "Direct link to How are the options determined? Can users add more options?")

The poll is created by the website owner in a separate admin portal and the options are determined during poll creation and cannot be modified after that.

### Is there a maximum number of options shown in the widget?[​](https://www.greatfrontend.com/questions/system-design/poll-widget#is-there-a-maximum-number-of-options-shown-in-the-widget "Direct link to Is there a maximum number of options shown in the widget?")

Maximum number of options is 6.

### Must users be logged in on the page in order to vote?[​](https://www.greatfrontend.com/questions/system-design/poll-widget#must-users-be-logged-in-on-the-page-in-order-to-vote "Direct link to Must users be logged in on the page in order to vote?")

Anyone can vote regardless of whether they are logged in or out. Votes should be persisted for the same user.

## Architecture[​](https://www.greatfrontend.com/questions/system-design/poll-widget#architecture "Direct link to Architecture")

### Rendering approach[​](https://www.greatfrontend.com/questions/system-design/poll-widget#rendering-approach "Direct link to Rendering approach")

We should first evaluate the possible rendering approaches because it will affect the architecture and subsequent discussions.

Generally speaking, there are two approaches for rendering external widgets/components on a page:

- Render in an `<iframe>` (different browser context)
- Render directly within the page (same browser context)

Note that we're talking about how to render the widget, which is different from the distribution approach — how to run the code that renders the widget.

#### Render in an `<iframe>` (different browser context)[​](https://www.greatfrontend.com/questions/system-design/poll-widget#render-in-an-iframe-different-browser-context "Direct link to render-in-an-iframe-different-browser-context")

`<iframe>` (inline frame) is an HTML tag on a page which accepts a `src` attribute, which is a URL for a website you want to embed within the host website.

Popular embeddable widgets such as Facebook's Like button, Twitter's embedded tweets, YouTube's embedded videos, and Disqus' embedded comments are `iframe`s. They are essentially websites that only render the contents to be embedded.

Check out these examples to see for yourself:

**Facebook Like Button**

**Twitter Embedded Tweets**

Using `iframe`s is a very common technique for embedding your content within third party websites. In the case of a poll widget, the widget will be the only UI being rendered on the website that's defined as the `iframe`'s `src`.

**Pros**

- An `iframe` is a separate website and hence a separate [browsing context](https://developer.mozilla.org/en-US/docs/Glossary/Browsing_context). The contents of the `iframe` is isolated from the hosting site and vice versa.
    - The styling of the widget will not be affected by any CSS of the host website.
    - The widget's JavaScript environment is not affected by scripts running on the host website, which can contain polyfills or monkeypatching, affecting runtime behavior in an unpredictable manner.
- Simple to set up because adding an `<iframe>` on the page only involves changing HTML. Users do not need much technical knowledge to achieve that.

**Cons**

- Need a web server to host a website that renders the widget. This is not a huge deal because the a web server is needed to serve the poll results anyway. Depending on the type of website you build, this setup can range from simple to complex.
- It is slower to load a separate website than to render it directly into the page.
- Because of the isolation, the host website cannot use CSS to customize the component internals.

There are two common ways to get the `<iframe>` on the page, using [Facebook's Like Button developer documentation](https://developers.facebook.com/docs/plugins/like-button/) as an example:

**1. Run JavaScript code that dynamically adds an `<iframe>` into the DOM.**

![Facebook Like Button Plugin Docs JavaScript SDK](https://www.greatfrontend.com/img/questions/poll-widget/fb-like-button-plugin-docs-js-sdk.png)

**2. Directly embed the `<iframe>` code into the HTML.**

![Facebook Like Button Plugin Docs Inline Frame](https://www.greatfrontend.com/img/questions/poll-widget/fb-like-button-plugin-docs-iframe.png)

The benefit of the JavaScript approach is that the script can customize the iframe rendering (e.g. theme, size) based on the environment if necessary. The `<iframe>` approach is simpler but less flexible.

#### Render within the page (same browser context)[​](https://www.greatfrontend.com/questions/system-design/poll-widget#render-within-the-page-same-browser-context "Direct link to Render within the page (same browser context)")

Just like how a script can dynamically inject an `<iframe>` into the DOM, it can also directly add the DOM elements needed to render the poll and the poll results.

**Pros**

- It is fast to render the poll widget within the same page.

**Cons**

- The poll widget can be affected by the host website's JavaScript environment and global styling. There's no telling what kind of global styling is present and it is very likely for the widget's appearance to be affected by the website's CSS.

The question is how to run the 3rd party JavaScript on the page to achieve the above.

**1. Download the script via a CDN.**

This approach is similar to Facebook's Like Button JavaScript SDK approach, by adding a `<script>` tag into the page which downloads and executes some external JavaScript.

**2. Distribute the code via `npm`**

`npm` is a package manager for JavaScript projects and the widget code can be packaged into an npm project so that projects can add it as a dependency. Website owners will need to possess the technical knowledge on how to add a new `npm` package into their `package.json`.

Distributing only via `npm` is not a great idea because not all websites are built using a JavaScript-based build system. Low-code websites like Wordpress, Webflow and Blogger do not allow for including third party JavaScript code on the page via npm.

#### Which rendering approach is better?[​](https://www.greatfrontend.com/questions/system-design/poll-widget#which-rendering-approach-is-better "Direct link to Which rendering approach is better?")

For embedding widgets, the `<iframe>` approach is clearly superior due to the encapsulation of styles and environment that an `iframe` provides.

#### Which distribution approach is better for rendering `<iframe>`s?[​](https://www.greatfrontend.com/questions/system-design/poll-widget#which-distribution-approach-is-better-for-rendering-iframes "Direct link to which-distribution-approach-is-better-for-rendering-iframes")

Embedding `<iframe>`s directly in the HTML is the easiest and the upsides of using a `<script>`-based approach is not that much. That said, it'd be nice to give developers the choice to choose between the two approaches. Facebook and YouTube provides both JavaScript SDKs and direct `<iframe>` embed options.

The discussion below will assume an `<iframe>` embed approach.

### Diagram[​](https://www.greatfrontend.com/questions/system-design/poll-widget#diagram "Direct link to Diagram")

![Poll Widget Architecture](https://www.greatfrontend.com/img/questions/poll-widget/poll-widget-architecture.png)

### Component responsibilities[​](https://www.greatfrontend.com/questions/system-design/poll-widget#component-responsibilities "Direct link to Component responsibilities")

- **Host Website**: Host website that embeds the widget as an `<iframe>`.
- **App Server**: Renders the widget UI as a website by serving the HTML, CSS, JavaScript needed.
- **API Server**: Server that returns poll result JSON data for the widget and also accepts new polls.
- **Client Store**: The module that interacts with the API server and stores data for the UI.
- **Polls UI**: UI for the poll options.

_Note: The **App Server** and **API Server** have been split into separate components for clarity but they can be the same server with the same domain._

---

## Data model[​](https://www.greatfrontend.com/questions/system-design/poll-widget#data-model "Direct link to Data model")

The data model for a polling widget is quite simple. Something like this will be sufficient:

const state = {

  lastUpdated: 1628634891,

  totalVotes: 421,

  question: 'Which is your favorite JavaScript library/framework?',

  options: [

    {

      id: 123,

      label: 'React',

      count: 234,

      userVotedForOption: false,

    },

    {

      id: 124,

      label: 'Vue',

      count: 183,

      userVotedForOption: false,

    },

    {

      id: 125,

      label: 'Svelte',

      count: 51,

      userVotedForOption: false,

    },

    // ...

  ],

  // Which option(s) the user has selected.

  selectedOptions: [124, 125],

};

Only the `selectedOptions` field is client-only state, the rest of the fields are server-originated data.

---

## Interface definition (API)[​](https://www.greatfrontend.com/questions/system-design/poll-widget#interface-definition-api "Direct link to Interface definition (API)")

There are three kinds of APIs to discuss:

- **Embed API**: How websites should embed the `<iframe>`.
- **Components API**: How to build the poll widget and the props the components accept.
- **Server APIs**: The HTTP APIs to fetch results, record new votes and remove votes.

### Embed API[​](https://www.greatfrontend.com/questions/system-design/poll-widget#embed-api "Direct link to Embed API")

Websites should be provided with some code to be copied and pasted to render the poll widget. The `iframe`'s `src` attribute should be unique URL specific to a poll instance.

<iframe

  src="https://greatpollwidget.com/embed/{poll_id}"

  style="border:none;overflow:hidden"

  title="Poll widget for your favorite JavaScript framework"

  frameborder="0"

  scrolling="no"

  width="450"

  height="200" />

`iframe`s by default are rendered with default styling so attributes like `frameborder="0"`, `scrolling="no"` and the inline styles help remove borders and scrollbars to make the widget appear to be part of the page and not obvious that the widget is rendered by an `iframe`.

### Components API[​](https://www.greatfrontend.com/questions/system-design/poll-widget#components-api "Direct link to Components API")

- `Poll`
    - Server URL
- `PollOptionList`
    - Maximum number of options displayed
- `PollOptionItem`
    - Label
    - Number of votes for an option
    - Event handlers: `onClick`

// Example code in React

<Poll submitUrl="https://greatpollwidget.com/submit/{poll_id}">

  <PollOptionList>

    {options.map((option) => (

      <PollOptionItem

        key={option.id}

        label={option.label}

        count={option.count}

        isSelected={option.userVotedForOption}

        onVote={() => {

          submitVote(option.id);

        }}

        onUnvote={() => {

          removeVote(option.id);

        }}

      />

    ))}

  </PollOptionList>

</Poll>

### Server APIs[​](https://www.greatfrontend.com/questions/system-design/poll-widget#server-apis "Direct link to Server APIs")

The server APIs are ideally served on the same domain so that there is no need to mess with CORS, e.g. `https://greatpollwidget.com/api/{poll_id}/results` and `https://greatpollwidget.com/api/{poll_id}/submit`.

#### Fetching results[​](https://www.greatfrontend.com/questions/system-design/poll-widget#fetching-results "Direct link to Fetching results")

What format should the API return the results in?

##### **1. Return the options and the counts for each**[​](https://www.greatfrontend.com/questions/system-design/poll-widget#1-return-the-options-and-the-counts-for-each "Direct link to 1-return-the-options-and-the-counts-for-each")

The server returns something like:

{

  "totalVotes": 421,

  "question": "Which is your favorite JavaScript library/framework?",

  "options": [

    {

      "id": 123,

      "label": "React",

      "count": 234,

      "userVotedForOption": false

    },

    {

      "id": 124,

      "label": "Vue",

      "count": 183,

      "userVotedForOption": false

    },

    {

      "id": 125,

      "label": "Svelte",

      "count": 51,

      "userVotedForOption": false

    }

  ]

}

- Pros
    - Client does not need to do tabulation of results, simply render the results.
    - Payload is small, contains exactly the data that needs to be displayed.
- Cons
    - Server has to do the processing, but likely better because server can cache/memoize the results especially for popular polls and return the cached results for different users.
    - The server will need to update the tabulation every now and then. This is a good use case for in-memory key/value stores like Redis/Memcached.

##### **2. Raw list of poll responses**[​](https://www.greatfrontend.com/questions/system-design/poll-widget#2-raw-list-of-poll-responses "Direct link to 2-raw-list-of-poll-responses")

The server returns something like:

{

  "question": "Which is your favorite JavaScript library/framework?",

  "options": [

    {

      "id": 123,

      "label": "React"

    },

    {

      "id": 124,

      "label": "Vue"

    },

    {

      "id": 125,

      "label": "Svelte"

    }

  ],

  "votes": [

    {

      "optionId": 123,

      "createdAt": 1628634891

    },

    {

      "optionId": 123,

      "createdAt": 1628634892

    },

    {

      "optionId": 124,

      "createdAt": 1628634893

    }

    // ...

  ]

}

- Pros
    - Can do all the tabulation entirely on the client side and hence sorting/filtering does not have any network latency.
- Cons
    - Doesn't scale well when there are lots of responses, the network payload will be huge.
    - The client needs to do the tabulation of votes which can be expensive on low-end devices and when there are many votes.

##### **Which to choose?**[​](https://www.greatfrontend.com/questions/system-design/poll-widget#which-to-choose "Direct link to which-to-choose")

Directly returning the counts is usually the superior option as there is usually no need to do tabulation or manipulation of the data on the client, which does not scale for popular votes with tens of thousands of votes.

#### Submitting votes and unvoting[​](https://www.greatfrontend.com/questions/system-design/poll-widget#submitting-votes-and-unvoting "Direct link to Submitting votes and unvoting")

The vote submission/unvoting APIs can accept a list of option IDs and return the updated poll results in a similar format as the poll results fetching API.

---

## Optimizations and deep dive[​](https://www.greatfrontend.com/questions/system-design/poll-widget#optimizations-and-deep-dive "Direct link to Optimizations and deep dive")

### Persisting votes across sessions[​](https://www.greatfrontend.com/questions/system-design/poll-widget#persisting-votes-across-sessions "Direct link to Persisting votes across sessions")

Because anyone can vote without having to log in first, we will need a way to identify users across sessions, otherwise the user will not see that they have already voted after the browser tab is closed.

We can use cookies to uniquely identify each user by generating a unique string-based fingerprint (e.g. using `uuid`) to serve as the user ID cookie during the initial load if there's no existing user ID cookie present.

This helps the poll widget website to identify users to track the options they have already voted and prevent a user from voting for the same option multiple times.

Note that users can work around this by using different browsers or on different devices. The only way to prevent this sort of abuse is to have user authentication.

### Rendering the poll options[​](https://www.greatfrontend.com/questions/system-design/poll-widget#rendering-the-poll-options "Direct link to Rendering the poll options")

The polling results consists of multiple bars of various widths and there are multiple ways to render such a result. It's worth discussing the various ways of rendering bars of varying widths.

#### What a full bar represents[​](https://www.greatfrontend.com/questions/system-design/poll-widget#what-a-full-bar-represents "Direct link to What a full bar represents")

A full bar can have two common representations:

1. Full-width represents 100% of all responses. If an option is X% of the total, it will take up X% of the container width.
    - Accurate representation of proportion of options
    - Bad if the ratio is very even and there are many options with low %. Hard to discern because many bars will be very short
2. The top-voted option is rendered with the full width and other options are a proportion of it. E.g. the top voted option is 40% of the total votes but will take up the entire container width. If another option is 20%, it will take up half the width.
    - Useful for highlighting the relative difference between the options.
    - Might gives viewers a false impression that the top-voted option is higher ratio than it actually is.

The first option is the more common option and is used by Reddit and Twitter.

#### Rendering bars of dynamic widths[​](https://www.greatfrontend.com/questions/system-design/poll-widget#rendering-bars-of-dynamic-widths "Direct link to Rendering bars of dynamic widths")

The number of votes for an option over the total number of votes will be the proportion of the full width to render the bar. E.g. 400 votes for an option over a total of 1000 votes will mean that the bar should be rendered 40% of the full width. Since there are infinitely many possible values for the width, it is not practical to use static CSS classes to render a bar for a specific width. A better way would be to use inline styles that are dynamically generated during rendering.

##### **1. Using `width` style**[​](https://www.greatfrontend.com/questions/system-design/poll-widget#1-using-width-style "Direct link to 1-using-width-style")

This is the most common approach and the only small downside is that in case there's a need for animating of the bars expanding/contracting, animation of `width` property is slower than `transform`. However, the widget is mostly static so the animating issue is largely not present.

<div style="width: 40%">React</div>

<div style="width: 30%">Vue</div>

##### **2. Using `transform: scaleX()` style**[​](https://www.greatfrontend.com/questions/system-design/poll-widget#2-using-transform-scalex-style "Direct link to 2-using-transform-scalex-style")

<div style="transform: scaleX(40%)">React</div>

<div style="transform: scaleX(30%)">Vue</div>

Note that `scaleX()` will also transform contents within it and make them appear horizontally squished.

We should use a % of the full width of the widget instead of hardcoded px values calculated once when the page loads so that if the widget is resized, the bars' width will be updated. % widths can be achieved using `width` and `transform: scaleX()`.

If we are fine with some loss of precision, then we could have 101 classnames for percentages of 0 to 100. But in general, this is not a great approach and inline styles is the preferred approach.

### User experience[​](https://www.greatfrontend.com/questions/system-design/poll-widget#user-experience "Direct link to User experience")

- When the poll is still loading, instead of showing a spinner, use a [shimmer loading effect](https://docs.flutter.dev/cookbook/effects/shimmer-loading) in the shape of bars to hint that this is a poll and also reduce layout thrash after the poll is loaded.
- Poll results should be hidden before user has voted, to reduce bias.
- Consider having a "See responses" function for people who just want to see the results without voting.

### Performance[​](https://www.greatfrontend.com/questions/system-design/poll-widget#performance "Direct link to Performance")

#### Fast rendering[​](https://www.greatfrontend.com/questions/system-design/poll-widget#fast-rendering "Direct link to Fast rendering")

As mentioned earlier, to achieve fast rendering of the results, the server API should return the tabulated results, not raw results so that the client does not need to do any tabulation of results.

Prefer to use server-side rendering for the initial load rather than `fetch` the poll results over AJAX for a fast initial load.

#### Fast interactions via optimistic updates[​](https://www.greatfrontend.com/questions/system-design/poll-widget#fast-interactions-via-optimistic-updates "Direct link to Fast interactions via optimistic updates")

Optimistic update is a technique where the browser shows the new UI state after a server request is fired, even before a response is received from the server. Because the client has the current results during initial load, it is possible to increment the newly-voted option and compute the new ratio of all the bars on the client side.

However, there are a few caveats:

- This optimization is more useful for polls with very few votes where each new vote will make a noticeable difference to the visual results. For polls with many existing votes (>500), an extra vote will not result in a noticeable difference in the widths. Optimistic updates can be skipped for such polls.
- The client-side computation might be stale if the poll is a popular one with people constantly voting on it because the server response will contain many new votes since the widget was first loaded.

In most cases, the client can render an optimistic update first and render again with the most updated results from the server.

#### Scalability issues[​](https://www.greatfrontend.com/questions/system-design/poll-widget#scalability-issues "Direct link to Scalability issues")

Given there are only a maximum of 6 options, we will not run into the issue of rendering too many options and a large resulting DOM size. But if we do, we can use virtualized lists within a container with a max height to prevent the component from being too tall and only render the on-screen options within the container.

### Accessibility[​](https://www.greatfrontend.com/questions/system-design/poll-widget#accessibility "Direct link to Accessibility")

#### Screen readers[​](https://www.greatfrontend.com/questions/system-design/poll-widget#screen-readers "Direct link to Screen readers")

Polling widgets are inherently very visual UI elements and we need to take special care to ensure users relying on screen readers can still understand what is being shown on the screen.

- Screen reader users will not know how long a bar is, hence `aria-label`, `title`, `aria-describedby`s need to be used for the poll options to indicate the option name, the number of votes, and the percentage if they are not in the rendered visual output.
- Use `aria-live` to announce updates for any change in values of the results when the client receives a server response.
- ARIA roles for options: `role="radiogroup"` and `role="radio"` for polls where only one option can be selected.

#### Keyboard interaction[​](https://www.greatfrontend.com/questions/system-design/poll-widget#keyboard-interaction "Direct link to Keyboard interaction")

- `<button>`s are preferred for rendering poll options but if there's a reason to use `<div>`s, they should be made focusable by adding the `tabindex="0"` and `role="button"` attributes.

### Network[​](https://www.greatfrontend.com/questions/system-design/poll-widget#network "Direct link to Network")

- Request responses could be out-of-order if someone votes/unvotes in quick succession
    - Keep track of the latest response and ignore stale responses.
- Show errors in the UI if the API submission fails.

### Internationalization (i18n)[​](https://www.greatfrontend.com/questions/system-design/poll-widget#internationalization-i18n "Direct link to Internationalization (i18n)")

If there's a need for i18n of strings in the poll, especially the strings not from the poll creator (e.g. `aria-label`s), the `iframe` embed URL can accept a query parameter for the language and it'll be up to the website owner to provide the right language.

---

## References[​](https://www.greatfrontend.com/questions/system-design/poll-widget#references "Direct link to References")

- [Facebook Like Button](https://developers.facebook.com/docs/plugins/like-button/)
- [Twitter's Embedded Tweets](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/overview)
- [Disqus Universal Embed Code](https://help.disqus.com/en/articles/1717112-universal-embed-code)