---
link: "[[1745441052-linked-list|Linked List]]"
aliases: 
  - "Linked List Partition List"
tags:
  - Knowledge
created_date:
  "[[2025-12-01]]"
---
# Linked List Partition List
## Problem
Partition list so all nodes < x come before nodes >= x

## Core Idea
- Create two dummy list: one for values < x, one for value >= x
- Traverse original list, appending to appropriate dummy list
- Connect the two lists (dummy1's tails -> dummy2's head)
- Remove dummy nodes and update head

```java
// Connect lists
prev1.next = dummy2.head.next;
// Update head
head = dummy1.head.next;
```

## [[1744043004-big-o-timer-and-space-complexity|Time And Space Complexity]]
- **Time Complexity:** O(n)
- **Space Complexity:** O(n) - Creates new nodes

