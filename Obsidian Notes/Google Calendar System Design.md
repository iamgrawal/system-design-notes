# Google Calendar

---

created: 12-Mar-2022, 22:57:53
tags: #frontend-system-design #frontend #system-design

---

## Index

- [[#Requirements]]
  - [[#Functional Requirements]]
  - [[#Non-Functional Requirements]]
- [[#Scoping the requirements]]
  - [[#Functional Requirements]]
  - [[#Non-Functional Requirements]]
- [[#Tech Stack Discussion]]
- [[#Implementation]]

## Contents

### Requirements

#### Functional Requirements

- Calendar View
	- Week View 
	- Month View
	- Year View
	- Day View
- Create/Update
	- Tasks
	- Events
	- Reminders
- Sharable Calendars
- Event
	- Add Location
	- Add video conferencing
		- Google Meet Link
		- Zoom Link
	- Add people/guests
- Notification
- Accessibility
	- Keyboard compatible
	- Different color options(for color blindness people)

#### Non-Functional Requirements
- Mobile/Tablet/Desktop View 
- Email Notification
- Authentication
- Authorization
- Performance
- Time Change Update (Daylight Savings) 
- Multiple Time Zones Capabilities
- Testing
- SSR
- Notifications(Service Worker)
- Reporting API(for getting notifications for the policy violations)
- HTTP 1.1
- Offline(Service Worker)
- Asset Caching
- Testing
- Resource Hints
- Responsive
- Versioning

### Scoping the requirements

#### Functional Requirements
- Calendar View
	- Week View 
	- Month View
	- Year View
	- Day View
- Create/Update
	- Tasks
	- Events
	- Reminders
- Sharable Calendars

#### Non-Functional Requirements

- Notification(SW)
- Performance
- Time Change Update (Daylight Savings) 
- Multiple Time Zones Capabilities
- SW Caching
- Offline(Service Worker)

### Tech Stack Discussion

#### Libraries/Frameworks
- React JS
- Type Script

#### Design System
- Material Design

#### Build Tool
- Webpack/Vite

#### Dependencies
- HTTP 1.1
- SVGs
- Browser Time Localisations(Intl)

### Implementation

#### Protocols
- REST/GraphQL
- Server Sent Events (For real time updates)
- Service Workers:
	- For Caching Assets
- For push notifications
	- Notification Trigger API
- Browser Time Localisation

#### APIs
- Get/Create/update events/reminder/Task
- Remove events/reminder/Task
- Add Video conferencing
- SSE

#### UI Design
![[Google Calendar-Layout_2022-03-13 00.23.14.excalidraw]]


#### Component Structures

- Calendar View Component
	- Day
	- Week
	- Month
	- Year
- Event Creation Modal
- Accordion
- Button

```ad-note
https://medium.com/@khriziakamille/design-patterns-of-google-calendar-fa2823537b4c
```

### Backend Perspective
- youtube video: <iframe width="560" height="315" src="https://www.youtube.com/embed/2rIDzq29214" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
- [https://dev.to/emasuriano/building-a-collaborative-calendar-with-google-and-gatsby-bkd](https://dev.to/emasuriano/building-a-collaborative-calendar-with-google-and-gatsby-bkd)
- [https://www.learnbay.io/google-calendar-high-level-system-design/](https://www.learnbay.io/google-calendar-high-level-system-design/)
- [https://stackoverflow.com/questions/12611/designing-a-calendar-system-like-google-calendar](https://stackoverflow.com/questions/12611/designing-a-calendar-system-like-google-calendar)

### References:
- Notification Triggers: [https://web.dev/notification-triggers/](https://web.dev/notification-triggers/)
- [https://css-tricks.com/hey-lets-create-a-functional-calendar-app-with-the-jamstack/](https://css-tricks.com/hey-lets-create-a-functional-calendar-app-with-the-jamstack/)
- Web Notification API: [https://notifications.spec.whatwg.org/](https://notifications.spec.whatwg.org/)
- Notification Trigger API: [https://web.dev/notification-triggers/](https://web.dev/notification-triggers/)
- How Push Notifications Work: [https://developers.google.com/web/fundamentals/push-notifications/how-push-works](https://developers.google.com/web/fundamentals/push-notifications/how-push-works)
- Web Workers vs Service Workers vs Worklets: [https://bitsofco.de/web-workers-vs-service-workers-vs-worklets/](https://bitsofco.de/web-workers-vs-service-workers-vs-worklets/)
- Periodic Background Sync API: [https://web.dev/periodic-background-sync/](https://web.dev/periodic-background-sync/)
- [https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- [https://www.smashingmagazine.com/2018/02/sse-websockets-data-flow-http2/](https://www.smashingmagazine.com/2018/02/sse-websockets-data-flow-http2/)
- Intersection Observer API [https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events)
- [https://web.dev/reporting-api/](https://web.dev/reporting-api/)
- [https://developers.google.com/web/updates/2015/12/background-sync](https://developers.google.com/web/updates/2015/12/background-sync)