# Whack-A-Mole

Premium

FrameworkReactAngularSvelte

Author

[![Utpal Singh](https://www.greatfrontend.com/img/team/utpal.jpg)](https://www.linkedin.com/in/utpalsingh/)

[Utpal Singh](https://www.linkedin.com/in/utpalsingh/)[](https://www.linkedin.com/in/utpalsingh/)

Frontend @ Rattle

Languages

HTMLCSSJS

Difficulty

Medium

Recommended duration to spend during interviews

30 mins

Users completed

156 completed

Build a popular arcade game where players attempt to hit moles as they pop up from holes in a board.

![whack-a-mole Example](https://www.greatfrontend.com/img/questions/whack-a-mole/whack-a-mole-example.png)

## Requirements

- The game should have a grid of 9 holes.
- When the game starts, a mole will pop up randomly from one of the holes.
- The player must click on the mole to whack it. When the player whacks the mole, they will get a point.
- If the player does not whack the mole within 1.5 seconds, the mole will disappear.
- The next mole randomly appears from one of the holes and the process repeats.
- The player has 15 seconds to hit as many moles as possible.
- The game ends when the timer runs out, the score is displayed and the player has the option to play again.

See what you're building

# Companies

Lyft

```js
import './styles.css';

  

export default function App() {

return (

<div>

{/* Optional: you can use emojis 🐻 or any alphabets instead. */}

<img src="https://www.greatfrontend.com/img/questions/whack-a-mole/mole-head.png" />

<img src="https://www.greatfrontend.com/img/questions/whack-a-mole/mole-hill.png" />

</div>

);

}
```