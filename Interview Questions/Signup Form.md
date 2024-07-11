# Signup Form

Premium

FrameworkVanilla JS

Author

[![Yangshun Tay](https://www.greatfrontend.com/img/team/yangshun.jpg)](https://www.linkedin.com/in/yangshun)

[Yangshun Tay](https://www.linkedin.com/in/yangshun)[](https://www.linkedin.com/in/yangshun)

Ex-Meta Staff Engineer

Languages

HTMLJS

Difficulty

Medium

Recommended duration to spend during interviews

30 mins

Users completed

530 completed

Building robust forms is one of core skills that a Front End developer should have. One of the most common forms people encounter everyday is a signup form.

Implement a signup form to allow users to fill in their details and submit the form.

## Requirements

The form should contain the following elements with the following criteria:

- Username field
    - Minimum of 4 characters.
    - Alphanumeric only.
- Email field
    - Valid email format. A reasonable validation will suffice, you don't have to strictly follow any specification.
- Password field
    - Minimum of 6 characters.
- Confirm password field
    - Must match the password field.
- Submit button
    - Contains the text "Sign Up".
    - Clicking on the submit button submits the form.

You are free to decide when (during typing/after blur/upon submission) and how (native HTML validation or custom validation) to validate the form. If the validation fails, show the relevant errors near (beside or below) the corresponding `<input>` fields.

## Submission API

A `submitForm` function has been implemented for you in `index.js` which makes an AJAX `POST` request to a server-side API which validates the fields using the same criteria. You can use it to verify that your form is not allowing invalid input.

See what you're building

# Companies

LyftToptal

# Similar Questions

- [Contact Form](https://www.greatfrontend.com/questions/user-interface/contact-form)
    
    Difficulty
    
    Easy

```js
import './styles.css';

  

/**

* @param {string} username

* @param {string} email

* @param {string} password

* @param {string} passwordConfirm

*/

async function submitForm(

username,

email,

password,

passwordConfirm,

) {

try {

const response = await fetch(

'https://www.greatfrontend.com/api/questions/sign-up',

{

method: 'POST',

headers: {

'Content-Type': 'application/json',

},

body: JSON.stringify({

username,

email,

password,

password_confirm: passwordConfirm,

}),

},

);

  

const { message } = await response.json();

alert(message);

} catch (_) {

alert('Error submitting form!');

}

}

  

// Write any JavaScript here.
```