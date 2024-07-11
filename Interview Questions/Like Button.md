# Like Button

Premium

FrameworkReactVanilla JSAngularSvelte

Author

[![Yangshun Tay](https://www.greatfrontend.com/img/team/yangshun.jpg)](https://www.linkedin.com/in/yangshun)

[Yangshun Tay](https://www.linkedin.com/in/yangshun)[](https://www.linkedin.com/in/yangshun)

Ex-Meta Staff Engineer

Languages

HTMLCSSJS

Difficulty

Medium

Recommended duration to spend during interviews

20 mins

Users completed

790 completed

Create a Like button which appearance changes based on the following states:

![Like Button States](https://www.greatfrontend.com/img/questions/like-button/like-button-states.png)

The heart and spinner icons are provided for your convenience. The focus of this question is on the handling of the various states, not so much on being pixel perfect. As for colors, you can use `#f00` for the red and `#888` for the gray.

## Requirements

- In the button's default state, when it is clicked, it goes into the loading state and a request is made to the provided back end API which has a 50% chance to succeeding/failing.
    - If the request was successful, the button changes to the "Liked" state.
    - Otherwise it returns to the "Default"/"Hovered" state depending on whether the cursor is still over the button. The error message from the back end API should be shown below the button.
- If the user clicks on a "Liked"-state button, the reverse flow happens.

## Submission API

- URL: `https://www.greatfrontend.com/api/questions/like-button`
- HTTP Method: `POST`
- Content Type: `json`

### Parameters

The following fields are accepted in the **request body**:

- `action`: A string of either `'like'` or `'unlike'` depending on the desired action.

### Response

The API has a 50% chance of succeeding (HTTP 200) or failing (HTTP 500) so as to make it easy for you to test the request failure cases. It returns a JSON payload of the following shape depending on the outcome.

- Success: `{ message: 'Success!' }`
- Failure: `{ message: 'Unknown error during attempted {{action}}. Please try again later.!' }`

See what you're building

# Companies

Amazon

```js
// Icn.js
export function SpinnerIcon({ className }) {

return (

<svg

className={className}

width={16}

height={16}

viewBox="0 0 38 38"

xmlns="http://www.w3.org/2000/svg"

stroke="currentColor">

<g fill="none" fillRule="evenodd">

<g transform="translate(1 1)" strokeWidth="2">

<circle

strokeOpacity=".5"

cx="18"

cy="18"

r="18"

/>

<path d="M36 18c0-9.94-8.06-18-18-18">

<animateTransform

attributeName="transform"

type="rotate"

from="0 18 18"

to="360 18 18"

dur="1s"

repeatCount="indefinite"

/>

</path>

</g>

</g>

</svg>

);

}

  

export function HeartIcon({ className }) {

return (

<svg

className={className}

fill="currentColor"

viewBox="0 0 24 24"

width="16"

height="16">

<g>

<path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>

</g>

</svg>

);

}
```