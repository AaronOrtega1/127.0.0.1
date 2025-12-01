---
link: "[[1745441052-linked-list|Linked List]]"
aliases: 
  - "Linked List Find Kth From End"
tags:
  - Knowledge
created_date:
  "[[2025-11-28]]"
---
# Linked List Find Kth From End
## Problem
Find the kth node from the end

## Core Idea
- Move fast pointer k nodes ahead
- Move both slow and fast together until fast reaches end
- Slow will be at kth from end (k positions behind fast)

```java
// Create k-node gap
for (int i = 0; i < k; i++) {
    fast = fast.next;
}
// Move together
while (fast != null) {
    slow = slow.next;
    fast = fast.next;
}
```

### Edge cases:
- k <= 0 or head ==null
- k == 1 return tail
- k > length (fast becomes null during gap creation)

## [[1744043004-big-o-timer-and-space-complexity|Time And Space Complexity]]
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)
