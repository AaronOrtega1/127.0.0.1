---
link: "[[1743802452-programming|Programming]]"
aliases:
  - Transversal Of A Linked List
tags:
  - resource
  - data-structure
  - python
  - linear
created_date: 2025/04/24
---
# Transversal Of A Linked List
## Summary
- Goes through the linked list until the next value is null.
## Key Ideas
- To go through the linked list by following the links from one node to the next.
- It starts by the head and in[[1745501364-linked-lists-types#^SinglyLinkedList| singly linked list]] goes until the next address is null.

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def traverseAndPrint(head):
    currentNode = head
    while currentNode:
        print(currentNode.data, end=" -> ")
        currentNode = currentNode.next
    print("null")

node1 = Node(7)
node2 = Node(11)
node3 = Node(3)
node4 = Node(2)
node5 = Node(9)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

traverseAndPrint(node1)
```
## Related Links
- [[]]
## Source
[Linked list operations w3schools](https://www.w3schools.com/dsa/dsa_algo_linkedlists_operations.php) 