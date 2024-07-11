# Identical DOM Trees

Premium

Author

[![Zhenghao He](https://www.greatfrontend.com/img/team/zhenghao.jpg)](https://www.linkedin.com/in/zhenghao-he/)

[Zhenghao He](https://www.linkedin.com/in/zhenghao-he/)[](https://www.linkedin.com/in/zhenghao-he/)

Senior Engineer, Ex-Amazon

Languages

HTMLJSTS

Difficulty

Medium

Recommended duration to spend during interviews

20 mins

Users completed

735 completed

Implement a function `identicalDOMTrees` that checks if two DOM trees are identical or not. The function takes two DOM nodes as the root nodes of two DOM trees and returns a boolean result.

Two DOM trees are considered identical if they are structurally similar, and the DOM nodes on one tree have the exact same attributes as the nodes on the same relative position on the other tree.

## Examples

Tree A and Tree B are considered the same.

<!-- Tree A -->

<div>Hello World</div>

<!-- Tree B -->

<div>Hello World</div>

Tree C and Tree D are considered the different.

<!-- Tree C -->

<div class="header">Hello World</div>

<!-- Tree D -->

<div id="foo">Hello World</div>

## Notes

- The only types of `Node`s present in the tree are `Element` nodes and `Text` nodes.

# Similar Questions

- [Deep Equal](https://www.greatfrontend.com/questions/javascript/deep-equal)
    
    Difficulty
    
    Medium