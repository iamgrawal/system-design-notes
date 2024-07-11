# Front End System Design Interview Evaluation Axes

Specific behaviors and signals interviewers look out for in front end system design interviews.

---

During interviews, interviewers look out for signals displayed by candidates before making an overall hiring and leveling recommendation. The more desired behaviors the candidate displays, the higher the likelihood the interviewer will recommend a "Hire" decision. The more detailed and mature the answers are, the higher the leveling recommendation.

This section lists some of the behaviors that candidates should display. Bear them in mind as you are answering the system design question and demonstrate them confidently during the interview.

## Problem Exploration[​](https://www.greatfrontend.com/system-design/evaluation-axes#problem-exploration "Direct link to Problem Exploration")

- Demonstrated thorough understanding of the problem.
- Explored the requirements sufficiently by asking relevant clarifying questions to minimize ambiguities.
- Gathered functional and non-functional requirements of the problem.
- Defined the scope of the problem.
- Identified the important aspects of the problem to focus on and address.

**Relevant framework sections:** Requirements Exploration

## Architecture[​](https://www.greatfrontend.com/system-design/evaluation-axes#architecture "Direct link to Architecture")

- Developed an architecture that solved the entire problem sufficiently.
- Broke down the problem into smaller independent parts of suitable granularity.
- Identified components of the system and defined their responsibilities clearly.
- Articulated how these components will work together and defined/described the API between these components.
- Developed an architecture that can be put into practice.
- Developed an architecture with scalability and reusability in mind, one that can be extended to support future requirements.

**Relevant framework sections:** Architecture/High-level Design, Data Model, Interface Definition

## Technical Proficiency[​](https://www.greatfrontend.com/system-design/evaluation-axes#technical-proficiency "Direct link to Technical Proficiency")

- Demonstrated technical knowledge and proficiency of front end fundamentals, common technologies and APIs.
- Able to dive into specific front end domain areas where relevant to the problem.
- Identified areas which need to be paid special attention to and addressed them by proposing solutions and analyzing their tradeoffs.

_Front end domain areas include Performance, Networking, HTML/CSS, Accessibility, Internationalization, Security, Scalability, etc._

**Relevant framework sections:** Architecture/High-level Design, Optimizations and Deep Dive

## Exploration and Tradeoffs[​](https://www.greatfrontend.com/system-design/evaluation-axes#exploration-and-tradeoffs "Direct link to Exploration and Tradeoffs")

- Offered various possible solutions to the problems at hand and explained the pros and cons of each solution.
    - The "problem" here doesn't necessarily refer to the given system design question.
    - While solving the given question, there would be smaller problems to solve/questions to answer and each small problem/question can have various solutions and choices to make.
- Explained the suitability of the solutions given the context and requirements and provided recommendations for the context of the question.
    - Do not insist there is only one possible solution. Good questions usually have a few possible solutions where the suitability of each depends on the context.
    - Even if the other solutions are clearly and obviously bad, do still mention them and briefly explain why they are bad.

**Relevant framework sections:** Requirements Exploration, Data Model, Interface Definition, Optimizations and Deep Dive

## Product and UX Sense[​](https://www.greatfrontend.com/system-design/evaluation-axes#product-and-ux-sense "Direct link to Product and UX Sense")

Relevant framework sections: **Optimizations and Deep Dive**

- Proposed a robust solution that lays the foundation of a good product.
- Considered user experience when answering: loading states, performance (perceived or actual), mobile friendliness, keyboard friendliness, etc.
- Considered error cases and suggested ways to handle them.

**Relevant framework sections:** Optimizations and Deep Dive

## Communication and Collaboration[​](https://www.greatfrontend.com/system-design/evaluation-axes#communication-and-collaboration "Direct link to Communication and Collaboration")

- Conveyed their thoughts and ideas clearly and concisely.
- Explained complex concepts with ease.
- Engaged the interviewer during the session, asks good questions and seeks opinions where relevant.
- Open to feedback from the interviewer and incorporates the feedback to refine their solutions.

**Relevant framework sections:** Architecture/High-level Design, Data Model, Interface Definition, Optimizations and Deep Dive

## Summary[​](https://www.greatfrontend.com/system-design/evaluation-axes#summary "Direct link to Summary")

Here's a table summarizing how the evaluation axes can be mapped to the various sections of the **RADIO framework**: Requirements Exploration, Architecture/High-level Design, Data Model, Interface Definition, Optimizations and Deep Dive.

| Axis                            |  R  |  A  |  D  |  I  |  O  |
| ------------------------------- | :-: | :-: | :-: | :-: | :-: |
| Problem Exploration             |  ✅  |  -  |  -  |  -  |  -  |
| Architecture                    |  -  |  ✅  |  ✅  |  ✅  |  -  |
| Technical Proficiency           |  -  |  ✅  |  -  |  -  |  ✅  |
| Exploration and Tradeoffs       |  -  |  ✅  |  ✅  |  ✅  |  ✅  |
| Product and UX Sense            |  -  |  -  |  -  |  -  |  ✅  |
| Communication and Collaboration |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |