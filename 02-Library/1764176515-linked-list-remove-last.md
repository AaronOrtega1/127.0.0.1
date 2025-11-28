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
Remove and return the last [[1760038325-node|node]]

## Core Idea
- Traverse to second-to-last node using two pointers (temp and pre)
- Set tail to pre, disconnect last node
- Decrement length
- If list becomes empty, set both head and tail to null

```java
// Iterate till we find the node before tail
while (temp.next != null) {
    pre = temp;
    temp = temp.next;
}
```


### Edge cases:
- Empty list -> return null
- Single node -> set head and tail to null

## [[1744043004-big-o-timer-and-space-complexity|Time And Space Complexity]]
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

