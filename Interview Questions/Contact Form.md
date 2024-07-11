# Contact Form

FrameworkReactVanilla JSAngularSvelte

Author

[![Yangshun Tay](https://www.greatfrontend.com/img/team/yangshun.jpg)](https://www.linkedin.com/in/yangshun)

[Yangshun Tay](https://www.linkedin.com/in/yangshun)[](https://www.linkedin.com/in/yangshun)

Ex-Meta Staff Engineer

Languages

HTML

Difficulty

Easy

Recommended duration to spend during interviews

15 mins

Users completed

9249 completed

Building forms is a common task in Front End. In this exercise, we will build a basic "Contact Us" form, commonly seen on marketing websites for visitors to ask questions or provide feedback.

## Requirements

- The form should contain the following elements:
    - Name field.
    - Email field.
    - Message field. Since the message can be long, a `<textarea>` will be more suitable.
    - Submit button
        - Contains the text "Send".
        - Clicking on the submit button submits the form.
- The form and submission should be implemented entirely in HTML. Do not use any JavaScript or framework-specific features for this question.
- There is no need to do any client-side validation on the fields. Validation will be done on the server side.

## Submission API

Upon submission, `POST` the form data to `https://www.greatfrontend.com/api/questions/contact-form` with the following fields in the **request body**: `name`, `email`, `message`.

If all the form fields are correctly filled up, you will see an alert containing a success message. Congratulations!

## Notes

You do not need JavaScript for this question, the focus is on HTML form validation and submission.

See what you're building

# Companies

Lyft

# Try these questions next

- [Flatten](https://www.greatfrontend.com/questions/javascript/flatten)
    
    Difficulty
    
    Medium
    
- [Signup Form](https://www.greatfrontend.com/questions/user-interface/signup-form)
    
    Difficulty
    
    Medium
    

# Similar Questions

- [Signup Form](https://www.greatfrontend.com/questions/user-interface/signup-form)
    
    Difficulty
    
    Medium
    

File explorer

App.js
```import './styles.css';

import submitForm from './submitForm';

  

export default function App() {

return (

<form

// Ignore the onSubmit prop, it's used by GFE to

// intercept the form submit event to check your solution.

onSubmit={submitForm}>

<input type="text" />

</form>

);

}
```

submitForm.js
```js
const SUBMIT_URL =

'https://www.greatfrontend.com/api/questions/contact-form';

  

export default async function submitForm(event) {

event.preventDefault();

const form = event.target;

  

try {

if (form.action !== SUBMIT_URL) {

alert('Incorrect form action value');

return;

}

  

if (form.method.toLowerCase() !== 'post') {

alert('Incorrect form method value');

return;

}

  

const formData = new FormData(form);

const response = await fetch(SUBMIT_URL, {

method: 'POST',

headers: {

'Content-Type': 'application/json',

},

body: JSON.stringify({

name: formData.get('name'),

email: formData.get('email'),

message: formData.get('message'),

}),

});

  

const text = await response.text();

alert(text);

} catch (_) {

alert('Error submitting form!');

}

}
```

Style.css
```css
body {

font-family: sans-serif;

}
```