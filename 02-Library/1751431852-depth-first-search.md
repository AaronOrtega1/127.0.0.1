---
link: "[[1751401091-leetcode-patterns|LeetCode Patterns]]"
aliases: 
  - Depth-First Search
  - DFS
tags:
  - Knowledge
created_date:
  2025-07-01
---
# Depth-First Search
- Algorithm that builds on the foundation of [[1751408048-breadth-first-search|BFS]] but explore the tree or graph in a different way.
- This algorithm deeps into one path as far as possible before exploring the next path.
- Uses a **stack (usually call stack)** to explore nodes in a depth first manner.
- Uses **recursion**.
- More suited for problems you need to explore all paths or check every possible configuration.
  - Finding all paths in a tree.
  - Searching for a specific condition deep in the structure.
  - Detecting cycles.
- In some cases its more memory efficient but less suited for problems where the shortest path or shallow exploration is required.
- Use case: [[1751432380-number-of-islands|Number of Islands]]

