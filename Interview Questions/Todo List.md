# Todo List

FrameworkReactVanilla JS

Author

[![Yangshun Tay](https://www.greatfrontend.com/img/team/yangshun.jpg)](https://www.linkedin.com/in/yangshun)

[Yangshun Tay](https://www.linkedin.com/in/yangshun)[](https://www.linkedin.com/in/yangshun)

Ex-Meta Staff Engineer

Languages

HTMLJS

Difficulty

Medium

Recommended duration to spend during interviews

20 mins

Users completed

4020 completed

You're given some existing HTML for a Todo List app. Add the following functionality to the app:

1. Add new tasks on clicking the "Submit" button.
    - The `<input>` field should be cleared upon successful addition.
2. Remove tasks from the Todo List upon clicking the "Delete" button.

## Notes

- The focus of this question is on functionality, not the styling. There's no need to write any custom CSS.
- You may modify the markup (e.g. adding `id`s, data attributes, replacing some tags, etc), but the result should remain the same visually.
- You may want to think about ways to improve the user experience of the application and implement them (you get bonus credit for doing that during interviews).

See what you're building

# Companies

Toptal

# Try these questions next

- [Holy Grail](https://www.greatfrontend.com/questions/user-interface/holy-grail)
    
    Difficulty
    
    Easy
    
- [Flatten](https://www.greatfrontend.com/questions/javascript/flatten)
    
    Difficulty
    
    Medium
    
- [Promise.any](https://www.greatfrontend.com/questions/javascript/promise-any)
    
    Difficulty
    
    Medium
    

# Similar Questions

- [Temperature Converter](https://www.greatfrontend.com/questions/user-interface/temperature-converter)
    
    Difficulty
    
    Easy

```js
import './styles.css';

  

export default function App() {

return (

<div>

<h1>Todo List</h1>

<div>

<input type="text" placeholder="Add your task" />

<div>

<button>Submit</button>

</div>

</div>

<ul>

<li>

<span>Walk the dog</span>

<button>Delete</button>

</li>

<li>

<span>Water the plants</span>

<button>Delete</button>

</li>

<li>

<span>Wash the dishes</span>

<button>Delete</button>

</li>

</ul>

</div>

);

}
```