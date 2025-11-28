---
link: "[[1745441052-linked-list|Linked List]]"
aliases: 
  - "Linked List Reverse"
tags:
  - Knowledge
created_date:
  "[[2025-11-27]]"
---
# Linked List Reverse
## Problem
Reverse the entire linked list in-place

## Core Idea
- Swap head and tail
- Use three pointers: before (null), temp (head), after.
- Iterate through list reversing each link:
  - Save next [[1760038325-node|node]] (after = temp.next)
  - Reverse current link (temp.next = before)
  - Move pointers forward (before = temp, temp = after)

```java
Node after = temp.next;
temp.next = before;
before = temp;
temp = after;
```

## [[1744043004-big-o-timer-and-space-complexity|Time And Space Complexity]]
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

