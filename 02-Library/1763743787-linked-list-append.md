---
link: "[[1745441052-linked-list|Linked List]]
aliases: 
  - "Linked List Append"
tags:
  - Knowledge
  - DSA
created_date:
  "[[2025-11-21]]"
---
# Linked List Append
## Problem
Add a new node to the end of the list

## Core Idea
- Create new [[1760038325-node|node]] with the given value
- If list is empty, both head and tail point to new node
- Otherwise, link current tail to new node and update tail pointer
- Increment length

```java
tail.next = newNode;
tail = newNode;
```

### Edge cases:
- Empty list (length == 0)

## [[1744043004-big-o-timer-and-space-complexity|Time And Space Complexity]]
- **Time Complexity:** O(1)
- **Space Complexity:** O(1)

