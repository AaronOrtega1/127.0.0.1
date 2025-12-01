---
link: "[[1745441052-linked-list|Linked List]]"
aliases: 
  - "Linked List Has Loops"
tags:
  - Knowledge
created_date:
  "[[2025-11-28]]"
---
# Linked List Has Loops
## Problem
Detect if list contains a cycle (Floyd's Cycle Detection)

## Core Idea
- Use slow/fast pointer technique
- If fast reaches null, no loop exists
- If slow and fas meet, loop detected
- Fast moves twice as fast, will eventually catch slow if loop exists

### Edge cases:
- Fast or fast.next becomes null (no loop)

## [[1744043004-big-o-timer-and-space-complexity|Time And Space Complexity]]
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

