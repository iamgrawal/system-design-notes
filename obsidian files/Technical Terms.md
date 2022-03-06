# Technical Terms

## Index

- [[#Architectural Patterns]]
- [[#Communication Protocols]]
- [[#Availability]]
- [[#Accessibility]]
- [[#Consistency]]
- [[#Credibility and Trust (SEO)]]
- [[#Logging & Monitoring]]
- [[#Databases & caching]]
- [[#Security]]
- [[#Performance & Optimisations]]
- [[#Testing]]

## Content

### Architectural Patterns

- Monolith architecture
- Micro-services / **Micro-frontend** architecture
  - How to achieve micro-frontend architecture
    - Iframe
    - Web Components
    - Module Federations(React Components)
    - Micro Apps / Route Based

### Communication Protocols

- **Long Polling**
  - Generally used in analytics and showing data
- **Web Sockets**
  - Used to show realtime database
- **Server Sent Events (SSE)**
  - Mainly used for notifications

### Availability

Main focus is to keep the engagement intact

- Offline Mode
  - Mainly done using service worker

### Accessibility

Things to take care of:

- Keyboard accessibility
- Screen Reader
- Alter Color/Contrast for color blinded people

### Consistency

Measures that we do:

- Altering CSS properties
- Adding support CSS properties
- Poly fills

Need to make sure that we have consistent design and behaviour across all the devices

Keep a common **design system**

Popular Design Systems:

- Material UI by Google
- Atlassian Design System
- Fluent Ui by Microsoft
- Semantic by Amazon

### Credibility and Trust (SEO)

Types:

- On Page Optimisations
  - title
  - description
  - meta
  - content
  - performance
- Off Page Optimisations
  - Backlinks
  - Ads(GTM, Facebook Tags)

### Logging & Monitoring

- Error Logging
  - Sentry, Prick, Track js
- User Tracking
- User Activity
- Feature Uses
- Infra / Capacity monitoring

### Databases & caching

- HTTP Caching
  - Caching static assets like css, js, images, etc.
- In memory Caching
- Apollo Caching
- State Management Libraries(Redux, Context)
- Local Storage
- Session Storage
- Cookie
- IndexedDB

### Security

- Things that we need to take care of
  - DDoS
  - Authentication / Authorisation
  - Content Security Policy (CSP)
  - Cross Origin Request Security(CORS)
  - Man in the middle

### Performance & Optimisations

- Main focus if to improve the experience
- Things that we should do:
  - Assets Optimisation
    - Lazy Loading
    - Code Splitting
  - Delivery option
  - Build assets
  - Server Side Rendering
  - Service Worker
  - Web Vitals
  - Perceived Performance

### Testing

- Types of testing
  - Unit testing (Individual testing)
  - Integration testing (Combination testing)
  - End to end testing (System Testing)
- Frameworks
  - jest
  - mocha
  - chai
  - cypress
  - selenium
  - protractor
  - playwright
