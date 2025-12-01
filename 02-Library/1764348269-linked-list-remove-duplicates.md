---
link: "[[1745441052-linked-list|Linked List]]"
aliases: 
  - "Linked List Remove Duplicates"
tags:
  - Knowledge
created_date:
  "[[2025-11-28]]"
---
# Linked List Remove Duplicates
## Problem
Remove all duplicate values, keeping only first occurrence

## Core Idea
- Use two pointers: current (outer loop) and runner (inner loop)
- For each current node, runner scans ahead for duplicates
- When duplicate found (runner.next.value == current.value)
  - Skip the duplicate node (runner.next = runner.next.next)
  - Don't advance runner
- Otherwise advance runner

## [[1744043004-big-o-timer-and-space-complexity|Time And Space Complexity]]
- **Time Complexity:** O(n²) - nested loops
- **Space Complexity:** O(1)
