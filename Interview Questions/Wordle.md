60 mins

Users completed

79 completed

> Wordle is a web-based word game created and developed by Welsh software engineer Josh Wardle. Players have six attempts to guess a five-letter word, with feedback given for each guess in the form of colored tiles indicating when letters match or occupy the correct position.

_Source: [Wikipedia](https://en.wikipedia.org/wiki/Wordle)_

Build a clone of Wordle.

![Wordle Example](https://www.greatfrontend.com/img/questions/wordle/wordle-example.png)

## Requirements

Be familiar with the rules of Wordle. You can read the [rules on Wikipedia](https://en.wikipedia.org/wiki/Wordle) and [try out the game](https://www.nytimes.com/games/wordle/index.html) for yourself on New York Times.

For practice sake, we'll implement Wordle with the following differences:

- Wordle has a global word of the day and can only be played once per day which complicates development. For our Wordle, a random word is chosen every time the app launches. Some five-letter words are provided to you in the skeleton.
- No need to validate if a guess is a valid 5-letter word.
- Add a "Reset" button that's displayed after the game ends so that the user can play again with another randomly-chosen word.

Wordle's colors should you choose to use them:

- Default (Light Gray): #d3d6da
- Correct (Green): #6aaa64
- Present (Yellow): #c9b458
- Absent (Dark Gray): #787c7e

```js
// index.js
import React, { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

  

import App from './App';

  

const root = createRoot(document.getElementById('root'));

root.render(

<StrictMode>

<App />

</StrictMode>,

);
```


```js
// app.js
import './styles.css';

  

const WORDS = Object.freeze([

'APPLE',

'BEAST',

'FAINT',

'FEAST',

'FRUIT',

'GAMES',

'PAINT',

'PASTE',

'TOWER',

'REACT',

]);

  

export default function App() {

return <div>Hello World</div>;

}

```

```css
body {

font-family: sans-serif;

}
```