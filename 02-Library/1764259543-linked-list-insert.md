---
link: "[[1745441052-linked-list|Linked List]]"
aliases: 
  - "Linked List Insert"
tags:
  - Knowledge
created_date:
  "[[2025-11-27]]"
---
# Linked List Insert
## Problem
Insert a [[1760038325-node|node]] specific index

## Core Idea
- Validate index (0 to length inclusive)
- Handle special cases: index 0 -> [[1764176393-linked-list-prepend|Prepend]] index == legth -> [[1763743787-linked-list-append|Append]]
- Else, get node at (index - 1), insert new node after it
- Update pointers: newNode.next = temp.next, temp.next = newNode
 
```Java
Node newNode = new Node(value);
Node temp = get(index - 1);
newNode.next = temp.next;
temp.next = newNode;
```

### Edge cases:
- Index out of bound
- Insert at beginning (index 0)
- Insert at end (index == length)

## [[1744043004-big-o-timer-and-space-complexity|Time And Space Complexity]]
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

