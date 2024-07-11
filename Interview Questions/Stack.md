# Stack

Author

[![Yangshun Tay](https://www.greatfrontend.com/img/team/yangshun.jpg)](https://www.linkedin.com/in/yangshun)

[Yangshun Tay](https://www.linkedin.com/in/yangshun)[](https://www.linkedin.com/in/yangshun)

Ex-Meta Staff Engineer

Languages

JSTS

Difficulty

Easy

Recommended duration to spend during interviews

10 mins

Users completed

5890 completed

Implement a stack data structure in JavaScript that contains the following operations:

- `new Stack()`: Creates an instance of a `Stack` class that doesn't contain any items. The constructor does not accept any arguments.
- `push()`: Pushes an item onto the top of the stack and returns the new length of the stack. Required time complexity: O(1).
- `pop()`: Removes an item at the top of the stack and returns that item. Required time complexity: O(1).
- `isEmpty()`: Determines if the stack is empty. Required time complexity: O(1).
- `peek()`: Returns the item at the top of the stack without removing it from the stack. Required time complexity: O(1).
- `length()`: Returns the number of items in the stack. Required time complexity: O(1).

## Examples

const stack = new Stack();

stack.isEmpty(); // true

stack.push(1);

stack.push(2);

stack.length(); // 2

stack.push(3);

stack.peek(); // 3

stack.pop(); // 3

stack.isEmpty(); // false

# Try these questions next

- [Queue](https://www.greatfrontend.com/questions/javascript/queue)
    
    Difficulty
    
    Medium
    

# Similar Questions

- [Queue](https://www.greatfrontend.com/questions/javascript/queue)
    
    Difficulty
    
    Medium


```js
export default class Stack {

constructor() {

throw 'Not implemented!';

}

  

/**

* Pushes an item onto the top of the stack.

* @param {*} item The item to be pushed onto the stack.

* @return {number} The new length of the stack.

*/

push(item) {

throw 'Not implemented!';

}

  

/**

* Remove an item at the top of the stack.

* @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.

*/

pop() {

throw 'Not implemented!';

}

  

/**

* Determines if the stack is empty.

* @return {boolean} `true` if the stack has no items, `false` otherwise.

*/

isEmpty() {

throw 'Not implemented!';

}

  

/**

* Returns the item at the top of the stack without removing it from the stack.

* @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.

*/

peek() {

throw 'Not implemented!';

}

  

/**

* Returns the number of items in the stack.

* @return {number} The number of items in the stack.

*/

length() {

throw 'Not implemented!';

}

}
```