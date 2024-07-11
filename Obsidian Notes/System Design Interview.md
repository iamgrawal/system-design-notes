# FE SD Interview

---

created: 06-Mar-2022
tags: #frontend-system-design #frontend #system-design

---

## Index

[[#Types of FE System Design Interviews]]
[[#Things to consider in FE System Design Interview]]
[[#HLD vs LLD]]
[[#Types of Frontend System Design Interview Rounds]]
[[#Tools that are helpful for system design round]]
[[#Mantra to crack the system design round]]

## Content

### Types of FE System Design Interviews

> 💡 Most of the time system design are open ended

#### System Design

#### Product Sense

- Product tech
- UX, UI

#### UI Architecture

- Functional Requirement
- tech scoping
- component designing
- High level design

#### Machine Coding / Component Design

- Low Level Design

### Things to consider in FE System Design Interview

#### Requirements

- Functional Requirements
  - Demand / Supply
  - Module level thinking
    - User Management
    - Help & Support
    - Payment Gateway
    - Pricing & Subscription
    - Product Listing
    - Cart page
    - Account management
    - Feature level thinking
- Non-Functional Requirements
  - Mobile/Desktop
  - Responsive / Adaptive
  - Internet / Location / Devices
  - Accessibility
  - Asset Optimisation(CSS, JS, Images)
  - Performance(FCP, LCP, TTI, Web Vitals)
  - CSR/SSR
  - Authentication/Authorization
  - Security
  - Caching
  - Offline Support
  - Logging & Monitoring
  - A/B testing
  - Testing
  - Internationalization(Localization)
  - Versioning
  - PWA
  - CI/CD

#### Scoping (Prioritisation)

- Functional
  - Demand
  - Module
  - Product Listing
  - Cart Page
  - Features
  - Search
  - Listing
  - Product Details
  - Reviews
  - Add item to cart/ wishlist
  - Cart List
  - Price breakups
  - Add/Remove products
- Non-Functional
  - Desktop
  - Responsive
  - Accessibility
  - Asset optimization
  - Performance
  - CSR/SSR
  - Caching

> Disclaimer: These could be the scoped requirements that the interviewer would be interested in:

#### Tech Choices

- Library/Framework
  > For juniors it could work by saying that I have worked on a specific tech so going with that, but for senior people this won't work. You must know why you are going with a specific framework(telling according to the market what are the best suit, what are the best fit, and what are the skills your team has)
- State Management
- Folder Structure
- Packages
- Dependencies(Canvas/SVG, webRTC, maybe?)
- Design System
- Build Tools(Webpack, Rollup, Parcel, Vite, maybe?)

#### Component Architecture

- Component Hierarchy
- Routing
- Data Sharing

#### Data API & Protocols & Implementations

- Protocols
  - REST / GraphQL/SSE/RPC
  - JSON/Protocol Buffers
- Implementation Details
  - _Pagination/Infinite Scrolls_
  - _Debouncing/Throttling_
- APIs
  - _getProductList_
  - _getProductDetails_
  - _addProductToCart_
  - _removeProductFromCart_
- Data Modelling
  - URL
  - Method
  - Request (query, body)
  - Response (Data, Error)
  - Status Codes
- Component API
  - State/Props
  - Event Handlers
  - Customisation(Theming)
  - Reusability
  - Data Source

### HLD vs LLD

> It's important to get to know about what are the expectations from the interview, whether it is an HLD round or an LLD round. Depending on the expectation you should choose the things that you need to deep dive into.
> For an HLD round, You should focus more on the [[#Requirements]], Scoping ([[#Scoping Prioritisation]]), Tech Choices ([[#Tech Choices]]). Things that are being checked in this round are:

- Are you able to the requirements, functional, non-functional.
- Are you thinking about prioritising anything?
- Are you think in terms of users, product manager?
- Are you thinking in terms of senior level architect, making the right choice of the tech?
  > For an LLD, you should focus more on the Component Architecture([[#Component Architecture]]), Data API & Protocols & Implementations([[#Data API Protocols Implementations]]\). Some of the questions that you might see:
- Build an auto complete sort of functionality
- Build a chat app
- Build a product cart
- Build a product listing
- Build a customised form

### Types of Frontend System Design Interview Rounds

> 💡 Think from the perspective of _Business_, _Product_, _Design_, _Frontend_, _Backend_. Then you will be able to judge better.

#### System Design

- Requirements
- Scoping
- Tech Choices
- Component Architecture
- Data API & Implementation

#### Product Sense

- Requirements
- Scoping
- Data API & Implementation

#### UI Architecture

- Requirements
- Scoping
- Tech Choices
- Component Architecture
- Data API & Implementation

#### Machine Coding/ Component Design

- Component Architecture
- Data API & Implementation

### Tools that are helpful for system design round

- Draw.io
- Gliffy.com
- Lucidchart.com
- Miro.com
- One Note (Microsoft)
- Jamboard (Google)

### Mantra to crack the system design round

- Don't be like Pushpa.
- Keep on checking requirements/expectations
- Keep Talking
- Don't rush into implementation
- Pick one problem at a time.
- Get familiar with the tools
- Practice 2-3 system design using different tools
- Discuss > Think > Take an Approach > Repeat
