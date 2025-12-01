---
link: "[[1745441052-linked-list|Linked List]]"
aliases: 
  - "Linked List Find Middle Node"
tags:
  - Knowledge
created_date:
  "[[2025-11-27]]"
---
# Linked List Find Middle Node
## Problem
Find middle node using slow/fast pointer technique

## Core Idea
- Initialize two pointers at head
- Move slow one step, fast two steps each iteration
- When fast reaches end, slow is at middle
- For even-length list, returns second middle node

```java
slow = slow.next;
fast = fast.next.next;
```

### Edge cases:
- Fast.next == null (odd length, fast at last node)

## [[1744043004-big-o-timer-and-space-complexity|Time And Space Complexity]]
- **Time Complexity:** O(n/2) = O(n)
- **Space Complexity:** O(1)

