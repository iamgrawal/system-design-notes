# Binary Search

Languages

JSTS

Difficulty

Medium

Recommended duration to spend during interviews

15 mins

Users completed

2915 completed

Implement a function that performs binary search on an array of numbers. The function should take in a sorted array of integers and a target integer to find. It returns the index of the target element or -1, if the target element doesn't exist in the array.

## Examples

binarySearch([1, 2, 3, 6, 9, 11], 6); // 3

binarySearch([1, 2, 3, 12, 14, 16], 5); // -1

## Recap

Binary search is a search algorithm that can efficiently determine if a sorted array of integers contain a specific number. The algorithm repeatedly divides the input array into half until the target element is found, thereby decreasing the search space by half each step. It is a significant improvement versus linear search.

Here is a quick explanation of how binary search works on an array that is already sorted:

1. Calculate the middle index of the array and retrieve the middle element.
2. If the target element is greater than the middle element, search the right half of the array (ignore the left half).
3. If the target element is lesser than the middle element, search the left half of the array.
4. If the target element is equal to the middle element, return the index of the element.
5. Repeat the steps above until we complete the search. Return -1 if the target was not found.

# Try these questions next

- [Breadth-first Search](https://www.greatfrontend.com/questions/javascript/breadth-first-search)
    
    Difficulty
    
    Medium
    
- [Depth-first Search](https://www.greatfrontend.com/questions/javascript/depth-first-search)
    
    Difficulty
    
    Medium
    
- [Merge Sort](https://www.greatfrontend.com/questions/javascript/merge-sort)
    
    Difficulty
    
    Medium
    
- [Quick Sort](https://www.greatfrontend.com/questions/javascript/quick-sort)
    
    Difficulty
    
    Medium
    
- [Selection Sort](https://www.greatfrontend.com/questions/javascript/selection-sort)
    
    Difficulty
    
    Easy
    

Code

Test cases