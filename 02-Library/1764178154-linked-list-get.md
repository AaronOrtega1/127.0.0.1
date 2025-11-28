---
link: "[[1745441052-linked-list|Linked List]]"
aliases: 
  - "Linked List Get"
tags:
  - Knowledge
  - DSA
created_date:
  "[[2025-11-26]]"
---
# Linked List Get
## Problem
Access the [[1760038325-node|node]] in a specific index.

## Core Idea
- Validate index is within bounds
- Traverse from head i times
- Return node at index position

```java
for (int i = 0; i < index; i++) {
    temp = temp.next;
}
```

### Edge cases:
- Index out of bounds (<0 or >= length) -> return null

## [[1744043004-big-o-timer-and-space-complexity|Time And Space Complexity]]
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

