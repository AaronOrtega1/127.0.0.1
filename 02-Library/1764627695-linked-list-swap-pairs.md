---
link: "[[1745441052-linked-list|Linked List]]"
aliases: 
  - "Linked List Swap Pairs"
tags:
  - Knowledge
created_date:
  "[[2025-12-01]]"
---
# Linked List Swap Pairs
## Problem
Swap every two adjacent nodes

## Core Idea
- Use dummy node pointing to head
- For each pair, perform three pointer updates:
  - Point previous to second node
  - Point first to node after second
  - Point second to first
- Move pointers forward by 2 nodes

```java
prev.next = second;
first.next = second.next;
second.next = first;
```

### Edge cases:
- Odd number of nodes (last node stays in place)
- Empty or single-node list

## [[1744043004-big-o-timer-and-space-complexity|Time And Space Complexity]]
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

