# Holy Grail

FrameworkReactVanilla JS

Author

[![Yangshun Tay](https://www.greatfrontend.com/img/team/yangshun.jpg)](https://www.linkedin.com/in/yangshun)

[Yangshun Tay](https://www.linkedin.com/in/yangshun)[](https://www.linkedin.com/in/yangshun)

Ex-Meta Staff Engineer

Languages

HTMLCSS

Difficulty

Easy

Recommended duration to spend during interviews

15 mins

Users completed

7269 completed

The Holy Grail layout is a famous CSS page layout that has traditionally been hard to implement. It consists of a header, footer, and three columns. The left column contains navigation items, the middle column contains the page contents, and the right column contains ads.

![Holy Grail layout example](https://www.greatfrontend.com/img/questions/holy-grail/holy-grail-example.png)

Implement the Holy Grail layout using just CSS. You shouldn't need to change the HTML too much.

## Requirements

- Header
    - Stretches horizontally across the whole page.
    - 60px tall.
- Columns
    - Both the left and right columns have a fixed width of 100px.
    - The center column is fluid-width.
    - All the columns should have the same height, regardless of which column is the tallest.
- Footer
    - Stretches horizontally across the whole page.
    - 100px tall.
    - The footer should be at the bottom of the page even if there is not enough content to fill up the viewport height.

See what you're building

# Try these questions next

- [Contact Form](https://www.greatfrontend.com/questions/user-interface/contact-form)
    
    Difficulty
    
    Easy
    
- [Flatten](https://www.greatfrontend.com/questions/javascript/flatten)
    
    Difficulty
    
    Medium
    
- [Todo List](https://www.greatfrontend.com/questions/user-interface/todo-list)
    
    Difficulty
    
    Medium
    

# Similar Questions

- [Tweet](https://www.greatfrontend.com/questions/user-interface/tweet)
    
    Difficulty
    
    Easy

```js
// app.js
import './styles.css';

  

export default function App() {

return (

<>

<header>Header</header>

<div>

<nav>Navigation</nav>

<main>Main</main>

<aside>Sidebar</aside>

</div>

<footer>Footer</footer>

</>

);

}
```

```css
body {

font-family: sans-serif;

font-size: 12px;

font-weight: bold;

margin: 0;

}

  

* {

box-sizing: border-box;

}

  

header,

nav,

main,

aside,

footer {

padding: 12px;

}

  

header {

background-color: tomato;

}

  

nav {

background-color: coral;

}

  

main {

background-color: moccasin;

}

  

aside {

background-color: sandybrown;

}

  

footer {

background-color: slategray;

}
```