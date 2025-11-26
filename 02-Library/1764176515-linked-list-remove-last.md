---
link: "[[1745441052-linked-list|Linked List]]"
aliases: 
  - "Linked List Remove Last"
tags:
  - Knowledge
  - DSA
created_date:
  "[[2025-11-26]]"
---
# Linked List Remove Last
## Problem
Delete the last [[1760038325-node|node]] of a Linked List.

## Core Idea
- Traverse to second-to-last node
- Update tail to this node
- Set its next to null
- Decrement length

### Edge cases:
- Empty list -> return null
- Single node -> set head and tail to null

## [[1744043004-big-o-timer-and-space-complexity|Time And Space Complexity]]
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

