---
link: "[[1745441052-linked-list|Linked List]]"
aliases: 
  - "Linked List Prepend"
tags:
  - Knowledge
  - DSA
created_date:
  "[[2025-11-26]]"
---
# Linked List Prepend
## Problem
Add a new [[1760038325-node|node]] to the beginning of the list

## Core Idea
- Create new node
- If empty, set both head and tail to new node
- Otherwise, point new node to current head, then update head
- Increment length

```java
newNode.next = head;
head = newNode;
```

### Edge cases:
- Empty list (length == 0)

## [[1744043004-big-o-timer-and-space-complexity|Time And Space Complexity]]
- **Time Complexity:** O(1)
- **Space Complexity:** O(1)

