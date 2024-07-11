# Turtle

Premium

Languages

JSTS

Difficulty

Medium

Recommended duration to spend during interviews

15 mins

Users completed

315 completed

Python comes with a `turtle` module that is a great graphical way for introducing programming to kids. The turtle starts at (0, 0) on an x-y plane, and you can move the turtle around and change the direction its facing. When the turtle moves, it leaves a line trail behind it that appears on a canvas. With these movement APIs, users can draw shapes and even complex ones by leveraging loops.

Implement a `Turtle` class in JavaScript that simulates the movement of a turtle. The turtle starts at (0, 0) facing north, and has the following methods:

- `forward(distance)`: Moves the turtle forward by `distance` units in the direction it is facing.
- `backward(distance)`: Moves the turtle backward by `distance` units while facing the same direction.
- `left()`: Rotates the turtle in-place 90 degrees to the left, changing only the direction it is facing.
- `right()`: Rotates the turtle in-place 90 degrees to the right, changing only the direction it is facing.
- `position()`: Returns the coordinates of the turtle as `[x, y]`.

## Examples

const turtle = new Turtle();

turtle.position(); // [0, 0]

turtle.forward(1); // Position: [0, 1]

turtle.backward(1); // Position: [0, 0]

turtle.right(); // Position remains unchanged

turtle.forward(2); // Position: [2, 0] because it moved 2 units to the right.

// Methods can also be chained.

turtle.right().right().forward(5); // Position: [-3, 0] because it turned 180 degrees and moved 5 units forward (towards the left).

## Resources

- [Python Turtle graphics](https://docs.python.org/3/library/turtle.html)

```js
export default class Turtle {

constructor() {

throw 'Not implemented';

}

  

/**

* @param {number} distance Distance to move forward while facing the current direction.

* @return {Turtle}

*/

forward(distance) {

throw 'Not implemented';

}

  

/**

* @param {number} distance Distance to move backward while facing the current direction.

* @return {Turtle}

*/

backward(distance) {

throw 'Not implemented';

}

  

/**

* Turns the turtle left.

* @return {Turtle}

*/

left() {

throw 'Not implemented';

}

  

/**

* Turns the turtle right.

* @return {Turtle}

*/

right() {

throw 'Not implemented';

}

  

/**

* @return {[number, number]} Coordinates [x, y]

*/

position() {

throw 'Not implemented';

}

}
```