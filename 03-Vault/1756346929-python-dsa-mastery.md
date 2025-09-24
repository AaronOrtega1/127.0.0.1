---
link: "[[1743802452-programming|Programming]]"
aliases:
  - Python DSA Mastery
tags:
  - Quests
  - DSA
  - python
  - archived
start_date: 2025-08-27
end_date: 2025-10-27
XP: 0
---
# Python DSA Mastery — 56-Day Plan

---

## Week 1–2: Arrays, Strings, Hashing, Linked Lists

### Day 1 — Arrays & Complexity
**Concepts:** Python lists, dict, set, slicing, comprehension, enumerate, zip; Big-O basics; Array iteration  
**Guided Problems:** Two Sum, Best Time to Buy and Sell Stock, Maximum Subarray  
**Drill:** Valid Anagram  
**Reflection:** Dict vs brute force; Kadane’s reset logic

### Day 2 — Arrays II (Two Pointers)
**Concepts:** Two pointers pattern; common pitfalls  
**Guided Problems:** Remove Duplicates from Sorted Array, Move Zeroes, Container With Most Water  
**Drill:** Valid Palindrome  
**Reflection:** O(n²) → O(n) conversion

### Day 3 — Arrays III (Sliding Window)
**Concepts:** Fixed-size vs variable-size windows; expand/shrink logic  
**Guided Problems:** Maximum Average Subarray I, Longest Substring Without Repeating Characters, Minimum Size Subarray Sum  
**Drill:** Permutation in String  
**Reflection:** Window sizing patterns

### Day 4 — Strings I (Basics + Hashing)
**Concepts:** String immutability, frequency maps, palindrome tricks  
**Guided Problems:** Reverse String, Valid Parentheses, Group Anagrams  
**Drill:** Isomorphic Strings  
**Reflection:** Counter vs manual dict

### Day 5 — Strings II (Pattern Matching)
**Concepts:** Substring search, prefix tricks  
**Guided Problems:** Implement strStr(), Longest Common Prefix, Longest Palindromic Substring  
**Drill:** Repeated Substring Pattern  
**Reflection:** Palindrome expansion complexity

### Day 6 — Hashing I (Sets & Maps)
**Concepts:** Set for uniqueness, dict lookup, collision intuition  
**Guided Problems:** Contains Duplicate, Intersection of Two Arrays, Happy Number  
**Drill:** Longest Consecutive Sequence  
**Reflection:** Sets eliminating nested loops

### Day 7 — Hashing II (Advanced)
**Concepts:** Prefix sums + hashing, frequency maps, subarrays  
**Guided Problems:** Subarray Sum Equals K, Find Duplicate Subtrees, 4Sum II  
**Drill:** Ransom Note  
**Reflection:** Hashing for O(n) solutions

### Day 8 — Review Day
**Concepts:** Arrays, Strings, Hashing; cheat sheet for patterns  
**Guided Problems:** 3Sum, Longest Repeating Character Replacement, Product of Array Except Self  
**Drill:** Design HashSet  
**Reflection:** Pattern → problem mapping

### Day 9 — Linked Lists I
**Concepts:** ListNode, traversal, dummy head, fast/slow pointers  
**Guided Problems:** Reverse Linked List, Merge Two Sorted Lists, Linked List Cycle  
**Drill:** Palindrome Linked List  
**Reflection:** Dummy head utility, Floyd’s cycle detection

### Day 10 — Linked Lists II
**Concepts:** In-place reversal, detect/remove cycles, middle node finding  
**Guided Problems:** Remove Nth Node From End, Add Two Numbers, Reorder List  
**Drill:** Intersection of Two Linked Lists  
**Reflection:** Extra space vs O(1)

---

## Week 3: Stacks, Queues, Recursion & Backtracking

### Day 11 — Mini Mock #1
**Problems (60–75 min):** Valid Anagram, 3Sum, Reorder List  
**Reflection:** Algorithm vs code bugs; pacing

### Day 12 — Stacks I
**Concepts:** Stack in Python, balancing, monotonic stacks  
**Guided Problems:** Valid Parentheses, Min Stack, Daily Temperatures  
**Drill:** Next Greater Element I  
**Reflection:** Avoiding nested loops with stacks

### Day 13 — Stacks II (Expression Evaluation)
**Concepts:** Infix → postfix, expression evaluation, two stacks pattern  
**Guided Problems:** Evaluate Reverse Polish Notation, Basic Calculator II, Remove K Digits  
**Drill:** Simplify Path  
**Reflection:** Operator/operand stack usage

### Day 14 — Queues & Deques
**Concepts:** collections.deque, BFS, monotonic deque  
**Guided Problems:** Implement Queue using Stacks, Sliding Window Maximum, Design Circular Queue  
**Drill:** Number of Recent Calls  
**Reflection:** Deque O(1) vs list O(n)

### Day 15 — Recursion & Backtracking I
**Concepts:** Recursion basics, backtracking template  
**Guided Problems:** Subsets, Permutations, Combination Sum  
**Drill:** Generate Parentheses  
**Reflection:** Undoing choices

### Day 16 — Recursion & Backtracking II
**Concepts:** Avoid duplicates, DFS pruning  
**Guided Problems:** Word Search, N-Queens, Letter Combinations of a Phone Number  
**Drill:** Palindrome Partitioning  
**Reflection:** Pruning effectiveness

### Day 17 — Trees I (Basics)
**Concepts:** TreeNode, DFS/BFS, recursion  
**Guided Problems:** Maximum Depth, Same Tree, Invert Binary Tree  
**Drill:** Diameter of Binary Tree  
**Reflection:** Recursion for trees

### Day 18 — Trees II (Traversals)
**Concepts:** Inorder, Preorder, Postorder (recursive & iterative), BFS  
**Guided Problems:** Binary Tree Inorder, Level Order, Zigzag Level Order  
**Drill:** Right Side View  
**Reflection:** Iterative vs recursive

### Day 19 — Trees III (Construction)
**Concepts:** Build trees from traversals, recursion + indices  
**Guided Problems:** Construct Binary Tree from Preorder/Inorder, Inorder/Postorder, Serialize/Deserialize  
**Drill:** Convert Sorted Array to BST  
**Reflection:** Hashmaps for speed

### Day 20 — Mini Mock #2
**Problems (60–75 min):** Reverse Linked List, Daily Temperatures, Word Search  
**Reflection:** Weak areas; recursion timing

---

## Week 4: Binary Search, Sorting, Heap, Graph Basics

### Day 21 — Binary Search I
**Concepts:** Classic binary search, edge handling, left/right boundaries  
**Guided Problems:** Binary Search, Search Insert Position, First Bad Version  
**Drill:** Find Minimum in Rotated Sorted Array  
**Reflection:** Off-by-one errors

### Day 22 — Binary Search II (Advanced)
**Concepts:** Search in 2D arrays, floor/ceiling, parametric search  
**Guided Problems:** Search a 2D Matrix, Find Peak Element, Kth Smallest Element in a Sorted Matrix  
**Drill:** Median of Two Sorted Arrays (easy variant)  
**Reflection:** Transforming problems to classic BS

### Day 23 — Sorting & Selection
**Concepts:** QuickSort, MergeSort, HeapSort; built-in `sorted` with key  
**Guided Problems:** Merge Intervals, Sort Colors, Top K Frequent Elements  
**Drill:** K Closest Points to Origin  
**Reflection:** When to use heap vs sort

### Day 24 — Heap / Priority Queue
**Concepts:** `heapq`, min-heap/max-heap, custom comparators  
**Guided Problems:** Kth Largest Element, Sliding Window Median, Merge K Sorted Lists  
**Drill:** Task Scheduler  
**Reflection:** Time-space tradeoffs

### Day 25 — Graph Basics I
**Concepts:** Adjacency list/matrix, BFS, DFS  
**Guided Problems:** Number of Islands, Clone Graph, Course Schedule I  
**Drill:** Surrounded Regions  
**Reflection:** BFS vs DFS choice

### Day 26 — Graph Basics II
**Concepts:** Topological sort, connected components, cycles  
**Guided Problems:** Course Schedule II, Minimum Height Trees, Graph Valid Tree  
**Drill:** Pacific Atlantic Water Flow  
**Reflection:** Cycle detection patterns

### Day 27 — Mini Mock #3
**Problems (60–75 min):** Top K Frequent Elements, Number of Islands, Merge Intervals  
**Reflection:** Heap & Graph comfort level

### Day 28 — Dynamic Programming I (1D)
**Concepts:** Fibonacci, DP array, bottom-up vs top-down  
**Guided Problems:** Climbing Stairs, House Robber, Maximum Subarray (review)  
**Drill:** Coin Change (1D)  
**Reflection:** State definition

### Day 29 — Dynamic Programming II (2D)
**Concepts:** Matrix DP, subproblem overlap  
**Guided Problems:** Unique Paths, Minimum Path Sum, Longest Common Subsequence  
**Drill:** Edit Distance  
**Reflection:** 2D DP index mapping

### Day 30 — Mini Mock #4
**Problems (60–75 min):** Climbing Stairs, Number of Islands, Merge K Sorted Lists  
**Reflection:** DP vs graph distinction

---

## Week 5: Advanced DP, Graphs, Greedy, Backtracking

### Day 31 — DP III (Knapsack / Subset)
**Concepts:** 0-1 Knapsack, subset sum  
**Guided Problems:** Partition Equal Subset Sum, Target Sum, House Robber II  
**Drill:** Coin Change II  
**Reflection:** DP array optimization

### Day 32 — DP IV (String / Sequence)
**Concepts:** LCS, LPS, string DP  
**Guided Problems:** Longest Palindromic Subsequence, Edit Distance, Decode Ways  
**Drill:** Distinct Subsequences  
**Reflection:** DP over strings

### Day 33 — Greedy I
**Concepts:** Interval scheduling, sorting-based greedy  
**Guided Problems:** Non-overlapping Intervals, Merge Intervals, Queue Reconstruction  
**Drill:** Candy  
**Reflection:** Greedy choice validation

### Day 34 — Greedy II
**Concepts:** Huffman-like patterns, local vs global  
**Guided Problems:** Jump Game, Gas Station, Minimum Number of Arrows  
**Drill:** Partition Labels  
**Reflection:** Why greedy works here

### Day 35 — Graphs III (Weighted / Dijkstra)
**Concepts:** Dijkstra, BFS/DFS weighted  
**Guided Problems:** Network Delay Time, Cheapest Flights Within K Stops, Path With Minimum Effort  
**Drill:** Swimin Rising Water  
**Reflection:** Priority queue usage in graphs

### Day 36 — Graphs IV (Union-Find)
**Concepts:** Disjoint set, cycle detection, Kruskal  
**Guided Problems:** Redundant Connection, Number of Connected Components, Accounts Merge  
**Drill:** Satisfiability of Equality Equations  
**Reflection:** Union-Find optimization

### Day 37 — Mini Mock #5
**Problems (60–75 min):** Jump Game, Number of Connected Components, Partition Equal Subset Sum  
**Reflection:** Graph + DP agility

### Day 38 — Backtracking III
**Concepts:** Combination problems, DFS on trees/graphs  
**Guided Problems:** Subsets II, Combination Sum II, Word Search II  
**Drill:** N-Queens II  
**Reflection:** Duplicate pruning patterns

### Day 39 — Bit Manipulation I
**Concepts:** XOR, AND, OR, bit tricks  
**Guided Problems:** Single Number, Single Number II, Number of 1 Bits  
**Drill:** Missing Number  
**Reflection:** XOR patterns

### Day 40 — Mini Mock #6
**Problems (60–75 min):** N-Queens, Single Number, Non-overlapping Intervals  
**Reflection:** Backtracking + Bit manipulation recall

---

## Week 6: Advanced Trees, Graphs, DP

### Day 41 — Trees IV (Binary Search Trees)
**Concepts:** BST properties, search, insert, delete  
**Guided Problems:** Validate BST, Lowest Common Ancestor, Kth Smallest Element in BST  
**Drill:** Serialize/Deserialize BST  
**Reflection:** BST invariants

### Day 42 — Trees V (Advanced)
**Concepts:** Tree diameter, diameter/path DP, max path sum  
**Guided Problems:** Binary Tree Maximum Path Sum, Sum of Left Leaves, Count Univalue Subtrees  
**Drill:** Path Sum II  
**Reflection:** Rooted vs general tree path DP

### Day 43 — Graphs V (Advanced DFS/BFS)
**Concepts:** Multi-source BFS, bipartite check  
**Guided Problems:** Walls and Gates, Rotten Oranges, Is Graph Bipartite?  
**Drill:** Number of Islands II  
**Reflection:** Multi-source BFS pattern

### Day 44 — DP V (Advanced)
**Concepts:** DP with state compression, interval DP  
**Guided Problems:** Burst Balloons, Strange Printer, Palindrome Partitioning II  
**Drill:** Minimum Cost to Merge Stones  
**Reflection:** Advanced DP state design

### Day 45 — Mini Mock #7
**Problems (60–75 min):** Binary Tree Maximum Path Sum, Walls and Gates, Burst Balloons  
**Reflection:** Complexity management

### Day 46 — Graphs VI (Advanced Algorithms)
**Concepts:** Bellman-Ford, Floyd-Warshall, Topological DP  
**Guided Problems:** Cheapest Flights, Course Schedule II (review), Longest Increasing Path in Matrix  
**Drill:** Word Ladder  
**Reflection:** Weighted DAG pattern

### Day 47 — Advanced Topics I
**Concepts:** Trie, Prefix Tree  
**Guided Problems:** Implement Trie, Add and Search Word, Replace Words  
**Drill:** Palindrome Pairs  
**Reflection:** Trie vs HashMap

### Day 48 — Advanced Topics II
**Concepts:** Segment Tree, Fenwick Tree  
**Guided Problems:** Range Sum Query, Range Sum Query 2D, Count of Smaller Numbers After Self  
**Drill:** Maximum Sum of Rectangle No Larger Than K  
**Reflection:** Tree-based data structures

### Day 49 — Mini Mock #8
**Problems (60–75 min):** Trie problem, Segment Tree range query, Longest Increasing Path  
**Reflection:** Advanced DS mastery

---

## Week 8: Final Review & Interview Simulation

### Day 50 — Mixed Patterns I
**Concepts:** Revisit all array, string, linked list patterns  
**Guided Problems:** 3Sum, Longest Substring Without Repeating Characters, Merge Two Sorted Lists  
**Drill:** Product of Array Except Self  
**Reflection:** Pattern recognition

### Day 51 — Mixed Patterns II
**Concepts:** Review stack, queue, recursion/backtracking  
**Guided Problems:** Daily Temperatures, Word Search, N-Queens  
**Drill:** Generate Parentheses  
**Reflection:** Backtracking fluency

### Day 52 — Mixed Patterns III
**Concepts:** Review tree traversal, BST, graph BFS/DFS  
**Guided Problems:** Binary Tree Level Order, Lowest Common Ancestor, Number of Islands  
**Drill:** Course Schedule  
**Reflection:** Multi-domain integration

### Day 53 — Mixed Patterns IV
**Concepts:** Review DP 1D/2D, knapsack, interval DP  
**Guided Problems:** Climbing Stairs, Unique Paths, Partition Equal Subset Sum  
**Drill:** Coin Change II  
**Reflection:** DP agility

### Day 54 — Mock Interview #9
**Problems (75–90 min):** 3 problems (1 array/string, 1 tree/graph, 1 DP/backtracking)  
**Reflection:** Time management, weak areas

### Day 55 — Mock Interview #10
**Problems (75–90 min):** 3 problems (1 array/linked list, 1 graph, 1 advanced DP)  
**Reflection:** Review notes, identify patterns missed

### Day 56 — Final Review & Reflection
**Tasks:**  
- Go through all cheat sheets  
- Re-solve problems you struggled with  
- Time-box 5 problems (random) to simulate real interview  
- Write down top 10 “patterns” for fast recall  

**Reflection:** Are you comfortable with pattern recognition, edge cases, and coding under time pressure? Identify final weak points.

---

✅ End of 56-Day Python DSA Mastery Roadmap  
This roadmap builds **progressively from basics → advanced topics → mock interviews** to simulate real coding interviews.

