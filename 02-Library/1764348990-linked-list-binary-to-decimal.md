---
link: "[[1745441052-linked-list|Linked List]]"
aliases: 
  - "Linked List Binary To Decimal"
tags:
  - Knowledge
created_date:
  "[[2025-11-28]]"
---
# Linked List Binary To Decimal
## Problem
Convert binary number represented as linked list to decimal

## Core Idea
- Treat list as binary number (head = most significant bit)
- Use formula: result = result * 2 + current_bit
- This effectively shifts left and adds new bit

```java
res = res * 2 + current.value;
```

## [[1744043004-big-o-timer-and-space-complexity|Time And Space Complexity]]
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)
