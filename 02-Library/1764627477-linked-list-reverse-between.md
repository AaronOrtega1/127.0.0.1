---
link: "[[1745441052-linked-list|Linked List]]"
aliases: 
  - "Linked List Reverse Between"
tags:
  - Knowledge
created_date:
  "[[2025-12-01]]"
---
# Linked List Reverse Between
## Problem
Reverse a sublist between two indices.

## Core Idea
- Use dummy node to simplify edge cases.
- Navigate to node before sublist (previousNode)
- Repeatedly move nodes from their position to start of sublist
- Each iteration: detach nodeToMove, insert at sublist start

```java
// The key reversal step
nodeToMove = currentNode.next;
currentNode.next = nodeToMove.next;
nodeToMove.next = previousNode.next;
previousNode.next = nodeToMove;
```

### Edge cases:
- Empty list
- Reversing from index 0 (affects head)

## [[1744043004-big-o-timer-and-space-complexity|Time And Space Complexity]]
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

