# Progress Bar

Premium

FrameworkReactVanilla JS

Author

[![Yangshun Tay](https://www.greatfrontend.com/img/team/yangshun.jpg)](https://www.linkedin.com/in/yangshun)

[Yangshun Tay](https://www.linkedin.com/in/yangshun)[](https://www.linkedin.com/in/yangshun)

Ex-Meta Staff Engineer

Languages

HTMLCSSJS

Difficulty

Easy

Recommended duration to spend during interviews

15 mins

Users completed

2058 completed

Implement a progress bar component which shows the completion progress by filling the bar proportionately to the progress (a number between 0-100, inclusive).

![Progress Bar Example](https://www.greatfrontend.com/img/questions/progress-bar/progress-bar-example.png)

## Requirements

- The filled bar can be of any color. The example uses `#c5c5c5` for the background color and `#0d6efd` for the progress color.
- The completion % is shown in the center of the filled bar.

A `ProgressBar.js` skeleton component has been created for you. You are free to decide the props of `<ProgressBar />`.

See what you're building

# Companies

Uber

# Try these questions next

- [Flatten](https://www.greatfrontend.com/questions/javascript/flatten)
    
    Difficulty
    
    Medium
    
- [Progress Bars](https://www.greatfrontend.com/questions/user-interface/progress-bars)
    
    Difficulty
    
    Easy
    
- [Star Rating](https://www.greatfrontend.com/questions/user-interface/star-rating)
    
    Difficulty
    
    Medium
    

# Similar Questions

- [Star Rating](https://www.greatfrontend.com/questions/user-interface/star-rating)
    
    Difficulty
    
    Medium


```js
// app.js
import ProgressBar from './ProgressBar';

  

import './styles.css';

  

export default function App() {

return (

<div>

<ProgressBar />

</div>

);

}

// progressBar.js
export default function ProgressBar() {

return <div className="progress"></div>;

}

```

```css
body {

font-family: sans-serif;

}

  

.progress {

background-color: rgb(233, 236, 239);

border: 1px solid #c5c5c5;

border-radius: 8px;

height: 20px;

}
```