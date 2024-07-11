# Types of Front End System Design Questions

Question formats you can expect in a front end system design interview.

---

There are two main kinds of front end system design questions: (1) Applications and (2) UI components.

## Applications[​](https://www.greatfrontend.com/system-design/types-of-questions#applications "Direct link to Applications")

As mentioned above, designing applications for front end system design interviews will feel similar to general Software Engineering system design interviews, and in fact, the questions are highly similar. However, instead of talking about distributed systems, you should focus on the client side of things and talk about application architecture and client-side implementation details.

In this day and age, many websites are interactive and rich applications that can do virtually what many desktop applications can. If you've used Gmail, Facebook, YouTube, Google Calender on the web, you'd have used a web app. Web apps tend to be dynamic and navigations in a web app usually don't require a full page refresh and instead use JavaScript to fetch remote data for the next page and dynamically change the contents and URL. Since web apps are complex software involving multiple modules, the common application architectures we learnt in Software Engineering classes like Model-view-controller (MVC), Model-view-viewmodel (MVVM) are also applicable when building web apps. React is one of the most popular JavaScript libraries by Facebook to build interactive web applications and many React web apps adopt a unidirectional Flux/Redux-based architecture.

Different applications have their own unique aspects and talking points. It's imperative that you focus on the parts that are unique to the application and not spend too much time talking about general stuff that are applicable to all questions. Firstly, design the high-level architecture, identify the components in the system, and the API between the components. Then dive into a few areas that are interesting to the problem and how to implement or optimize them.

### Examples[​](https://www.greatfrontend.com/system-design/types-of-questions#examples "Direct link to Examples")

Here's a list of application questions commonly asked during front end system design interviews and the areas you should focus on:

|Application|Examples|Important Areas|
|---|---|---|
|[News Feed](https://www.greatfrontend.com/questions/system-design/news-feed-facebook)|Facebook, Twitter|Feed interactions, Feed pagination approaches, Message/post composer|
|[Messaging/Chat](https://www.greatfrontend.com/questions/system-design/chat-application-messenger)|Messenger, Slack, Discord|Message syncing, Real-time chat, Messages list, Chat list|
|[E-commerce Marketplaces](https://www.greatfrontend.com/questions/system-design/e-commerce-amazon)|Amazon, eBay|Product listing pages, Product detail pages, Cart, Checkout|
|[Photo Sharing](https://www.greatfrontend.com/questions/system-design/photo-sharing-instagram)|Instagram, Flickr, Google Photos|Photos browsing, Photos editing, Photos uploading|
|[Travel Booking](https://www.greatfrontend.com/questions/system-design/travel-booking-airbnb)|Airbnb, Skyscanner|Search UI, Search results, Booking UI|
|[Email Client](https://www.greatfrontend.com/questions/system-design/email-client-outlook)|Outlook, Apple Mail, Gmail|Mailbox syncing, Mailbox UI, Email composer,|
|[Video Streaming](https://www.greatfrontend.com/questions/system-design/video-streaming-netflix)|Netflix, YouTube|Video player, Video streaming, Recommended videos|
|[Pinterest](https://www.greatfrontend.com/questions/system-design/pinterest)|Pinterest|Masonry layout implementation and media feed optimizations|
|Collaborative Apps|Google Docs, Google Sheets, Google Slides, Notion|Real-time collaboration, State syncing|
|Drawing|Figma, Lucidchart|Rendering approach, Client state/data model|
|Maps|Google/Apple Maps, Foursquare City Guide|Map rendering, Displaying locations|
|File Storage|Google Drive, Dropbox|File uploading, File downloading, File explorer|
|Video Conferencing|Zoom, Google Meet|Video streaming, Various viewing modes|
|Ridesharing|Uber, Lyft|Trip booking, Driver location|
|Music Streaming|Spotify, Apple Music|Music player UI, Playlists UI|
|Games|Tetris, Snake|Game state, Game loop, Game logic|

## UI Components[​](https://www.greatfrontend.com/system-design/types-of-questions#ui-components "Direct link to UI Components")

In modern front end development, it is common to use component libraries to build applications. Some popular component libraries you might have used before include jQuery UI (how old school!), Bootstrap, Material UI, Chakra UI, etc.

It is an expectation of Front End Engineers to be able to build the various UI components needed by an application. Some UI components can be easy to build (e.g. text, button, badge, etc), while others can be much more complex (autocomplete, dropdown, modal, etc). Most of the time, if you are asked to design a UI component, it would be from the latter category.

Firstly determine the subcomponents of the component (e.g. for an image carousel, there's the image, the pagination buttons, thumbnails), define the external-facing API of the component (what options/props the component should accept), describe the internal component state, API between the subcomponents (if relevant), then dive into optimizations and considerations for performance, accessibility, user experience, security, etc where relevant.

You might have to write a small amount code for one or more of the following purposes:

1. Describe the component hierarchy.
2. Describe the shape of the component state.
3. Explain some non-trivial logic within the component.

```jsx
<ImageCarousel
  images={...}
  onPrev={...}
  onNext={...}
  layout="horizontal">
  <ImageCarouselImage style={...} />
  <ImageThumbnail onClick={...} />
</ImageCarousel>

```

### Customizing Theming[​](https://www.greatfrontend.com/system-design/types-of-questions#customizing-theming "Direct link to Customizing Theming")

You will most certainly be expected to design a way for users of the component (developers) to customize the component appearance. Refer to [Front End Interview Guidebook's UI Components API Design Principles Section](https://www.greatfrontend.com/front-end-interview-guidebook/user-interface-components-api-design-principles) for an overview and comparison of the different approaches.

### Examples[​](https://www.greatfrontend.com/system-design/types-of-questions#examples-1 "Direct link to Examples")

Examples of UI components asked during front end system design interviews:

- Design an [autocomplete component](https://www.greatfrontend.com/questions/system-design/autocomplete)
- Design a [dropdown menu component](https://www.greatfrontend.com/questions/system-design/dropdown-menu)
- Design an [embeddable poll widget](https://www.greatfrontend.com/questions/system-design/poll-widget)
- Design an [image carousel](https://www.greatfrontend.com/questions/system-design/image-carousel)
- Design a [modal component](https://www.greatfrontend.com/questions/system-design/modal-dialog)
- Design a data table with sorting and pagination
- Design a datepicker
- Design a multiselect component

## What to do during interviews?[​](https://www.greatfrontend.com/system-design/types-of-questions#what-to-do-during-interviews "Direct link to What to do during interviews?")

Now that you have an understanding of the kind of questions you can be asked during Front End System Design interviews, how do you go about answering them? We came up with the [RADIO framework](https://www.greatfrontend.com/system-design/framework), an easy-to-remember structured approach that you can use to ace system design interview questions.