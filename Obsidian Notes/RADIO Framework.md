# The RADIO Framework

Approach your front end system design interviews in a structured fashion. A good structure is half the battle won.

---

A good beginning is half the battle won. By using the **RADIO framework** to answer front end system design questions, you will already be much closer to acing your interview.

In the context of front end system design interviews, the systems you are asked to design tend to be products, so we'll refer to the system as "product" from here on. Start by understanding the **R**equirements, defining the high level **A**rchitecture and the **D**ata Model. Then define the **I**nterfaces between the components in the product and talk about any **O**ptimizations or dive deep into specific areas which require special attention.

## What is RADIO about?[​](https://www.greatfrontend.com/system-design/framework#what-is-radio-about "Direct link to What is RADIO about?")

1. **Requirements Exploration**: Understand the problem thoroughly and determine the scope by asking a number of clarifying questions.
2. **Architecture/High-level Design**: Identify the key components of the product and how they are related to each other.
3. **Data Model**: Describe the various data entities, the fields they contain and which component(s) they belong to.
4. **Interface Definition (API)**: Define the interface (API) between components in the product, functionality of each API, their parameters and responses.
5. **Optimizations and Deep Dive**: Discuss about possible optimization opportunities and specific areas of interest when building the product.

## Requirements Exploration[​](https://www.greatfrontend.com/system-design/framework#requirements-exploration "Direct link to Requirements Exploration")

**Objective**: Understand the problem thoroughly and determine the scope by asking a number of clarifying questions.

**Recommended Duration**: Not more than 15% of the session.

System design interview questions are open-ended in nature and are usually vague and under-specified on purpose. **You are required to dig deeper and clarify ambiguities in the problem by asking useful questions.** Treat your interviewer as a product manager you are working with on a new project, ask enough questions so that you know what problems you are trying to solve and what you need to build. In reality, some problems can be solved without any engineering at all!

No two system design interview experiences are the same even though you can be asked the same question. Interviewers have different backgrounds and might prioritize different aspects of the system. Take this chance to find out what they are most interested in and plan your answers accordingly.

Some general questions you should get answers to before moving on to the next part of the interview:

### What are the main use cases we should be focusing on?[​](https://www.greatfrontend.com/system-design/framework#what-are-the-main-use-cases-we-should-be-focusing-on "Direct link to What are the main use cases we should be focusing on?")

Imagine you were asked to "Design Facebook". Facebook is a huge platform, there's news feed, profiles, friends, groups, stories, and more. Which parts of Facebook should you focus on? The interviewer has the answer in mind but wants you to find out by asking questions. Typically you should focus on the most unique aspects of the product, the features which define it. For Facebook, it would be the news feed, pagination of the feed, and creating new posts. For YouTube, it would be the video-watching experience. The important areas for other type of products be found in the [types of questions](https://www.greatfrontend.com/system-design/types-of-questions).

For the rest of this page, we'll be using "Design Facebook" as the problem and apply the framework to it.

Let's assume you didn't clarify which parts of the product to focus on, assumed you should talk about the befriending flow and started talking about it. In the best case, good interviewers will steer you back in the direction the question was meant to proceed, but they will make a mental note that you didn't clarify the question. In the worst case, inexperienced interviewers will let you keep talking and politely try to find an opportunity to correct you, but you would have already wasted some precious minutes discussing an unimportant topic.

### What are the functional requirements and non-functional requirements?[​](https://www.greatfrontend.com/system-design/framework#what-are-the-functional-requirements-and-non-functional-requirements "Direct link to What are the functional requirements and non-functional requirements?")

Firstly, what are functional and non-functional requirements?

- **Functional requirements**: Basic requirements of the product such that the product cannot function without them. This is usually whether a user can complete the core flows correctly.
- **Non-functional requirements**: Requirements that are viewed as improvements to the product, but not strictly required for the product to be usable, i.e. the product can still be used without these. These include performance (how fast the page loads, how fast the interaction takes), scalability (how many items can be present on the page), good user experience, etc.

There are two ways you can get the answer to this question:

1. Take the initiative to list out what you think are the requirements and get feedback and alignment from the interviewer (Preferred).
2. Ask the interviewer directly. However, most of the time they'd want you to define them. Even if they give you an answer, it won't be too detailed.

At the very minimum, your design has to meet the functional requirements. After meeting all the function requirements, move on to talk about how to fulfill the non-functional requirements.

### What are the core features to focus on and which are good-to-have?[​](https://www.greatfrontend.com/system-design/framework#what-are-the-core-features-to-focus-on-and-which-are-good-to-have "Direct link to What are the core features to focus on and which are good-to-have?")

Even after you know the functional requirements, there can still be a ton of small features that make up the large feature. For example, when creating new Facebook posts, what kind of post formats should be supported? Besides the usual text-based posts, should the user be able to upload photos, upload videos, create polls, check in to a location, etc.

You should clarify the core features beforehand and design for them before moving on to the extra features.

### Other questions:[​](https://www.greatfrontend.com/system-design/framework#other-questions "Direct link to Other questions:")

- What devices/platforms (desktop/tablet/mobile) need to be supported?
- Is offline support necessary?
- Who are the main users of the product?
- What are the performance requirements, if any? (Performance requirements typically fall under non-functional requirements.)

The list above should give you a good starting list of questions but it is not an exhaustive list! Different problems will require you to ask domain-specific questions, which we will talk about in the case studies.

You are recommended to write down the agreed requirements somewhere so that you can refer to them throughout the interview and ensure that you've covered them.

---

## Architecture/High-level Design[​](https://www.greatfrontend.com/system-design/framework#architecturehigh-level-design "Direct link to Architecture/High-level Design")

**Objective**: Identify the key components of the product and how they are related to each other.

**Recommended Duration**: Roughly 20% of the session.

With the requirements in mind, we can move on to the architecture design proper. Your next task is to come up with a product/system architecture by identifying the key components of the product, how the components interact with each other, and how they are related. Remember to focus on the **client-side architecture**, not the back end.

Diagrams are your friends here. Each component can be represented using a rectangle and your high-level design usually ends up looking like a few rectangular boxes with arrows between them to demonstrate the flow of data. It is also possible to have components within components, in that case, draw the parent using bigger rectangles since they need to fit multiple subcomponents.

Examples of components/modules which are commonly found in a high-level front end design:

- **Server**: In front end system design interviews, we can treat the server as a black box and assume it exposes some APIs you can call via HTTP/WebSockets.
- **View**: This represents what the user sees, and it usually contains smaller subviews within it. Can contain client-side only state.
- **Controller**: The module which responds to user interactions and processes the data from the store/model in a format the view expects. This module is not always needed if the application is small and there's not much passing of data between modules.
- **Model/Client Store**: Where the data lives. Stores contain data which will be presented to the user via views and stores tend to be app-wide for an interview context. In reality, you can have multiple stores within an application and stores can contain other stores.

Other things to consider when defining the responsibilities of components:

- **Separation of concerns**: Components are meant to be modular and serve to encapsulate a set of functionality and data. Consider the purpose/functionality of each component, what data it should contain and how it can service the rest of the system (what it can do for the other components).
- **Where computation should occur**: If some amount of computation is needed (e.g. filtering of results given a search term, calculating the total amount for a cart), should the work be done on the server or the client? There are tradeoffs to each approach and the decision is both question-dependent and context-dependent.

It is important to realize that not every common component mentioned above will be relevant and needed for every question, it depends on the product.

After drawing out the architecture diagram, verbally describe the responsibilities of each component (box in the diagram).

### Architecture Example[​](https://www.greatfrontend.com/system-design/framework#architecture-example "Direct link to Architecture Example")

Here's an example architecture diagram for the [News Feed](https://www.greatfrontend.com/questions/system-design/news-feed-facebook) question drawn using Excalidraw.

![Example architecture diagram](https://www.greatfrontend.com/img/questions/news-feed-facebook/news-feed-architecture.png)

#### Component Responsibilities[​](https://www.greatfrontend.com/system-design/framework#component-responsibilities "Direct link to Component Responsibilities")

- **Server**: Serves feed data and provides a HTTP API for new feed posts to be created.
- **Controller**: Controls the flow of data within the application and makes network requests to the server.
- **Client Store**: Stores data needed across the whole application. In the context of a news feed, most of the data in the store will be server-originated data needed by the feed UI.
- **Feed UI**: Contains a list of feed posts and the UI for composing new posts.
    - **Feed Post**: Presents the data for a feed post and contains buttons to interact with the post (like/react/share/comment).
    - **Post Composer**: UI for users to create new feed posts.

Common free drawing tools that you might be asked to use include [diagrams.net](https://app.diagrams.net/) and [Excalidraw](https://excalidraw.com/). It'd be a good idea to familiarize yourself with these tools beforehand.

---

## Data Model[​](https://www.greatfrontend.com/system-design/framework#data-model "Direct link to Data Model")

**Objective**: Describe the various data entities, the fields they contain and which component(s) they belong to.

**Recommended Duration**: Roughly 10% of the session.

We now have to think about what data fields are present in the client. There are two kinds of data on client applications:

### Server-originated Data[​](https://www.greatfrontend.com/system-design/framework#server-originated-data "Direct link to Server-originated Data")

Data that originates from the server, usually from a database and meant to be seen by multiple people or accessed from multiple different devices. Common examples include user data (name, profile picture) and user-generated data (feed posts, comments).

### Client-only Data[​](https://www.greatfrontend.com/system-design/framework#client-only-data "Direct link to Client-only Data")

Client-only data, also commonly known as state, is data that only needs to live on the client and does not have to be sent to the server for writing into the database. Client data can be further broken down into two:

- **Data to be persisted**: Usually user input such as data entered into form fields. These data usually has to be sent to the server and saved into a database for it to be useful.
- **Ephemeral data**: Temporary state that lasts for a short time. Common examples include form validation state, the current tab, whether a section is expanded, etc. It's usually acceptable to lose these data when the browser tab is closed.

When listing the data fields, it'd be useful to identify what kind of data that field is, whether it's server-originated data or client-only data.

### Data Model Example[​](https://www.greatfrontend.com/system-design/framework#data-model-example "Direct link to Data Model Example")

Here's a basic example of data model for the various entities using the [News Feed](https://www.greatfrontend.com/questions/system-design/news-feed-facebook) question.

|Source|Entity|Belongs To|Fields|
|---|---|---|---|
|Server|`Post`|Feed Post|`id`, `created_time`, `content`, `image`, `author` (a `User`), `reactions`|
|Server|`Feed`|Feed UI|`posts` (list of `Post`s), `pagination` (pagination metadata)|
|Server|`User`|Client Store|`id`, `name`, `profile_photo_url`|
|User input (client)|`NewPost`|Feed Composer UI|`message`, `image`|

Depending on how far you progress along in the question and how the requirements have evolved and grown during the interview, you might need to add more fields. It's a dynamic and iterative process.

You might want to write these fields near the components which owns them in your architecture diagram.

---

## Interface Definition (API)[​](https://www.greatfrontend.com/system-design/framework#interface-definition-api "Direct link to Interface Definition (API)")

**Objective**: Define the interface between components in the product, functionality of the various APIs, their parameters and responses.

**Recommended Duration**: Roughly 15% of the session.

With the components and data within each components, we can move on to discuss the interface (APIs) between the components. API is an overloaded term and generally refer to the protocol which software components communicate and request/send data between components. Client and server communicate via network layer APIs (HTTP/WebSockets). Client components generally communicate via functions in the browser runtime. All APIs have three things in common whether they are between the server and the client or between client components:

|Parts of an API|Server-Client|Client-Client|
|---|---|---|
|Name and functionality|HTTP path|JavaScript function|
|Parameters|HTTP GET query and POST parameters|Function parameters|
|Return Value|HTTP response, typically JSON format|Function return value|

### Server-Client API Example[​](https://www.greatfrontend.com/system-design/framework#server-client-api-example "Direct link to Server-Client API Example")

Using the [News Feed](https://www.greatfrontend.com/questions/system-design/news-feed-facebook) example yet again, we have a server API that allows the client to fetch the latest feed posts.

|Field|Value|
|---|---|
|HTTP Method|`GET`|
|Path|`/feed`|
|Description|Fetches the feed results for a user.|

#### Parameters[​](https://www.greatfrontend.com/system-design/framework#parameters "Direct link to Parameters")

A feed response is a paginated list so the API expects pagination parameters.

```json
{
  "size": 10,
  "cursor": "=dXNlcjpXMDdRQ1JQQTQ"
}

```

#### Response[​](https://www.greatfrontend.com/system-design/framework#response "Direct link to Response")

```json
{
  "pagination": {
    "size": 10,
    "next_cursor": "=dXNlcjpVMEc5V0ZYTlo"
  },
  "results": [
    {
      "id": "123",
      "author": {
        "id": "456",
        "name": "John Doe"
      },
      "content": "Hello world",
      "image": "https://www.example.com/feed-images.jpg",
      "reactions": {
        "likes": 20,
        "haha": 15
      },
      "created_time": 1620639583
    }
    // ... More posts.
  ]
}

```

### Client-Client API Example[​](https://www.greatfrontend.com/system-design/framework#client-client-api-example "Direct link to Client-Client API Example")

The client-client API can be written in a similar fashion as the server-client API, main difference being they are JavaScript functions, or events that are being listened to. The most important parts to describe are the functionality of the API, the parameters and the return/response value.

### API for UI Component System Design[​](https://www.greatfrontend.com/system-design/framework#api-for-ui-component-system-design "Direct link to API for UI Component System Design")

If you're asked to design a UI component, for the "Interface" section, discuss about the customization options for the component, similar to the props for React components.

---

## Optimizations and Deep Dive[​](https://www.greatfrontend.com/system-design/framework#optimizations-and-deep-dive "Direct link to Optimizations and Deep Dive")

**Objective**: Discuss about possible optimization opportunities and specific areas of interest when building the product.

**Recommended Duration**: Roughly 40% of the session.

There's no fixed way to go about the optimization and deep dive section and you are free to focus on different areas of the product. There will not be sufficient time to cover every area, so select how you want to spend your time carefully according to these guidelines:

- **Focus on the important areas of the product.** For e-commerce websites, performance is crucial and you'd want to spend the bulk of your time diving into the various performance optimizations that can be done. For collaborative editors, the complexity is in how to handle race conditions and concurrent modifications, so you'd want to focus on explaining that.
- **Focus on your strengths.** Showcase your domain knowledge. If you are well-versed in accessibility, talk about the various accessibility pitfalls that can occur in the product and how to address them. Impress the interviewer with your knowledge. If you are a performance guru, explain the various performance optimization opportunities that can provide a buttery smooth user experience.

### General Optimization/Deep Dive Areas[​](https://www.greatfrontend.com/system-design/framework#general-optimizationdeep-dive-areas "Direct link to General Optimization/Deep Dive Areas")

Here's a list of topics you can talk about for this section. Bear in mind that the importance of a topic depends on the question and some topics are entirely irrelevant to certain questions (possible but unlikely).

- Performance
- User Experience
- Network
- Accessibility (a11y)
- Multilingual Support
- Multi-device Support
- Security

Refer to our [Best Practices for Building User Interfaces Guide](https://www.greatfrontend.com/front-end-interview-guidebook/user-interface-questions-cheatsheet) for details on each topic.

---

## Summary[​](https://www.greatfrontend.com/system-design/framework#summary "Direct link to Summary")

| Step                           | Objective                                                                                                                 | Recommended Duration |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| Requirements Exploration       | Understand the problem thoroughly and determine the scope by asking a number of clarifying questions.                     | <15%                 |
| Architecture/High-level Design | Identify the key components of the product and how they are related to each other.                                        | ~20%                 |
| Data Model                     | Describe the various data entities, the fields they contain and which component(s) they belong to.                        | ~10%                 |
| Interface Definition           | Define the interface (API) between components in the product, functionality of each APIs, their parameters and responses. | ~15%                 |
| Optimizations and Deep Dive    | Discuss about possible optimization opportunities and specific areas of interest when building the product.               | ~40%                 |