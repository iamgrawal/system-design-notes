# Introduction to Front End System Design

Learn useful techniques and how to approach the top front end system design questions, written by ex-interviewers at FAANG.

---

Unlike coding and quiz questions, system design interviews are open-ended style interviews where there are no right answers. You're given a vague problem or scenario and you're expected to work with the interviewer to answer the question by coming up with a suitable software design on a whiteboard, or some collaborative drawing app if it's a virtual interview. It is similar to the process at certain companies where engineers write technical design documents to outline the possible approaches to a project they are working on, explain technical decisions and discuss tradeoffs with coworkers except that you have to do it within 30-60 minutes.

System design interviews are usually given to candidates who have some number of years of working experience (aka non-fresh grads) and your performance in the system design interview has significant influence on the job level you will be offered. Most of the time, failing the system design interview will result in an overall rejection. It's really important to ace your system design interviews!

However, given the open-ended nature of system design interviews, it is much harder to practice for it as compared to coding interviews. Many candidates also don't have real life experience building various systems and it's hard to draw from experience when answering system design interview questions. Also, there are very few resources available for front end system design. Most existing system design resources are targeted at general Software Engineers and hence focus on distributed systems.

GreatFrontEnd's system design resources are perhaps the most comprehensive you can find and will help you handle front end system design interviews with ease!

## Front End vs Back End System Design[​](https://www.greatfrontend.com/system-design#front-end-vs-back-end-system-design "Direct link to Front End vs Back End System Design")

In traditional Software Engineer system design interviews, candidates will be asked to describe the architecture of a distributed system, usually involving web servers, load balancers, caches, databases, microservices, task queues, etc. For Front End Engineers, system design interviews are slightly different, there's more emphasis on what goes on in the client and API design between the client and the server, as opposed to what goes on in the back end.

|Aspect|Back End|Front End|
|---|---|---|
|Gather requirements|Required|Required|
|Architecture/High-level design|Distributed cloud services|Application/Component|
|Back-of-the-envelope estimation|Required|Not required|
|Components of the system|Cloud services (e.g. Load balancer, Application server, Database, File storage, Caches, Message queues, CDN)|Application modules (Model, View, Controller)|
|Data Model|SQL Schema|Application state|
|Type of APIs between components|Network (Any protocol)|Network (HTTP, WebSocket), JavaScript functions|
|Focus areas|Scalability, Reliability, Availability|Performance, User Experience, Accessibility, Internationalization|
|Less important (Can treat as a black box)|Client|Server|

_Read more on the differences between Front End and Back End System Design Interviews on [Zhenghao's blog](https://www.zhenghao.io/posts/system-design-interviews)._

For example, a classic question is to ask about designing a Twitter feed UI which can be asked during both back end and front end system interviews.

- **Back end**: Capacity estimation, designing the database schemas, how to ensure the services can scale with the traffic, how to generate a user's Twitter feed?
- **Front end**: How do you implement the interactions with a tweet, how to implement pagination in the feed, and how users can create new tweets?

As you can see, the focus of front end system design interviews can be very different from back end and answering them well requires a different approach.

## What you will learn in this guide[​](https://www.greatfrontend.com/system-design#what-you-will-learn-in-this-guide "Direct link to What you will learn in this guide")

Our Front End System Design guide is structured into two parts, you will first gain a deeper understanding system design interviews are about, then dive into some front end system design case studies using the RADIO framework.

- [[Types of Questions]]
- [[RADIO Framework]]
- [[Evaluation Axes]]
- [[Common Mistakes]]