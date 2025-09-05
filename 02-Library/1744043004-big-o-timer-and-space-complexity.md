---
link: "[[1743802452-programming|Programming]]"
aliases:
  - big-o-timer-and-space-complexity
  - Big O Timer And Space Complexity
  - Time and Space Complexity
tags:
  - Knowledge
  - time_complexity
  - space_complexity
created_date: 2025-04-07
---
# Big O Timer And Space Complexity
## Key Ideas
### Big (O)
- Used to describe algorithms according to **how fast they run** (time complexity) or **how much space they take** (space complexity) *as the input size grows* in the worst case escenario.
- Is a mathematical notations that describes the limiting behavior of a function when the argument tends towards a particular value or infinity.
## Time Complexity
- Describes the amount of time necessary to execute an algorithm.
^TimeComplexity
### Time complexity from fastest to slowest
- #### O(1) - Constant:
	- Time taken remains constant regardless of input size.
	- Ex. Accessing an element in an array by index.
- #### O(log N) - Logarithmic:
	- Time taken increases logarithmically as the input size grows. Time increases linearly as N goes up exponentially
	- Ex. Binary search in a sorted array.
- #### O(N) - Linear:
	- Time taken increases proportionally to the size of the input.
	- Ex. Finding an item in an unsorted list.
- #### O(N log N) - Linearithmic:
	- Time taken increases in a linearithmic manner, often seen in divide and conquer algorithms.
	- Ex. Merge sort or quick sort.
- #### O(N^2) - Quadratic:
	- Time taken increases quadractically as the input size grows. Each element needs to be compared to every other element (nested loops).
	- Ex. Bubble sort or selection sort.
- #### O(2^N) - Exponential:
	- Time taken doubles with each addition to N, leading to rapidly growing execution times.
	- Ex. Finding all subsets of a set.
- #### O(N!) - Factorial:
	- Time taken increases factorially with each increase in input size.
	- Ex. Solving the traveling salesman problem exhaustively.
## Space Complexity
- Describes the amount of memory or space utilized by and algorithm/program.
^SpaceComplexity
# References
- [70 Leetcode problems in 5+ hours (every data structure) (full tutorial)](https://www.youtube.com/watch?v=lvO88XxNAzs&t=133s)