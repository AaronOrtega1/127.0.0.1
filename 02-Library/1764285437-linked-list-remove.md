---
link: "[[1745441052-linked-list|Linked List]]"
aliases: 
  - "Linked List Remove"
tags:
  - Knowledge
created_date:
  "[[2025-11-27]]"
---
# Linked List Remove
## Problem
remove a [[1760038325-node|node]] at specific index

## Core Idea
- Validate index (0 to length inclusive)
- Handle special cases: index 0 -> [[1764176778-linked-list-remove-first|Remove First]] index == length -> [[1764176515-linked-list-remove-last|Remove Last]]
- Get node before target, save reference to target node
- Bypass target: `prev.next = target.next` 
- Disconnect target and return it

### Edge cases:
- Index out of bound
- Remove first or last element

## [[1744043004-big-o-timer-and-space-complexity|Time And Space Complexity]]
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

