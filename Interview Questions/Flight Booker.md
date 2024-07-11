# Flight Booker

Premium

FrameworkReact

Author

[![Yangshun Tay](https://www.greatfrontend.com/img/team/yangshun.jpg)](https://www.linkedin.com/in/yangshun)

[Yangshun Tay](https://www.linkedin.com/in/yangshun)[](https://www.linkedin.com/in/yangshun)

Ex-Meta Staff Engineer

Languages

HTMLJS

Difficulty

Easy

Recommended duration to spend during interviews

15 mins

Users completed

1368 completed

Build a component that books a one-way or return flight for specified dates.

## Requirements

- The user can choose from two flight options: "One-way flight" and "Return flight".
- Input date fields
    - The date input fields represent the departure date and return dates.
    - The return date input is displayed if the "Return flight" option is chosen, hidden otherwise.
- Form validation should be done upon submission for invalid fields:
    - Dates are in the past.
    - Return date is before the departure date.
- Upon successful submission, a message is displayed informing the user of the selection:
    - One-way flight: "You have booked a one-way flight on YYYY-MM-DD"
    - Return-flight "You have booked a return flight, departing on YYYY-MM-DD and returning on YYYY-MM-DD"

Here's an example of the component, with both "One-way flight" and "Return flight" options.

![Flight booker example](https://www.greatfrontend.com/img/questions/flight-booker/flight-booker-example.png)

## Resources

- The [`<input type="date">` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date) would be helpful for the date input fields.

## Source

This question is modified from [7GUIs Flight Booker](https://7guis.github.io/7guis/tasks#flight).

See what you're building

File explorer

App.js

styles.css

Theme