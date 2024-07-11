# Mortgage Calculator

FrameworkReactVanilla JS

Author

[![Yangshun Tay](https://www.greatfrontend.com/img/team/yangshun.jpg)](https://www.linkedin.com/in/yangshun)

[Yangshun Tay](https://www.linkedin.com/in/yangshun)[](https://www.linkedin.com/in/yangshun)

Ex-Meta Staff Engineer

Languages

HTMLJS

Difficulty

Easy

Recommended duration to spend during interviews

20 mins

Users completed

1875 completed

Build a simple mortgage calculator widget that takes in a loan amount, interest rate, loan term, and calculates the monthly mortgage payment, total payment amount, and total interest paid.

## Requirements

- The user should be able to enter:
    - Loan amount ($)
    - Annual interest rate (%). This is also known as the annual percentage rate (APR)
    - Loan term (in years)
- Using the inputs, the calculator should compute the following and display the results to the user:
    - Monthly mortgage payment
    - Total payment amount
    - Total interest paid
- If a non-numerical string is entered into any input field, the calculator should display an error message. Additionally, the calculator should handle any other invalid inputs that may arise.
- Round the result amounts to 2 decimal places.

_The last two requirements might not be given to you during interviews, you're expected to clarify._

The formula for calculating the monthly payment is:

__M = P(i(1+i)n)/((1+i)n - 1)__

- M: Monthly mortgage payment
- P: Loan amount
- i: Monthly interest rate (APR / 12)
- n: Total number of payments (loan term in years x 12)

Here's an example of [Google's mortgage calculator](https://www.google.com/search?q=mortgage+calculator) (you might need to be in the US for it to appear):

![Google's mortgage calculator widget](https://www.greatfrontend.com/img/questions/mortgage-calculator/google-mortgage-calculator-example.png)

## Source

This question is adapted from [FrontendEval's Mortgage Calculator](https://frontendeval.com/questions/mortgage-calculator).