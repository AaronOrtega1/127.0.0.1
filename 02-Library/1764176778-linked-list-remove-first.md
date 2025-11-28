---
link: "[[1745441052-linked-list|Linked List]]"
aliases: 
  - "Linked List Remove First"
tags:
  - Knowledge
  - DSA
created_date:
  "[[2025-11-26]]"
---
# Linked List Remove First
## Problem
Remove and return the first [[1760038325-node|node]]

## Core Idea
- Save reference to current head
- Move head to next node
- Disconnect old head
- Decrement length
- If list becomes empty, set tail to null

### Edge cases:
- Empty list -> return null
- Single node -> set tail to null

## [[1744043004-big-o-timer-and-space-complexity|Time And Space Complexity]]
- **Time Complexity:** O(1)
- **Space Complexity:** O(1)

