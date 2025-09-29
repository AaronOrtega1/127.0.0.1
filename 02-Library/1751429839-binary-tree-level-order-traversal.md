---
link: "[[1744040981-150-neetcode-problems|Leetcode Problems]]"
aliases:
  - Binary Tree Level Order Traversal
tags:
  - Knowledge
created_date: 2025-07-01
---
# Binary Tree Level Order Traversal
- Given the `root` of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

## Desired Outcome
- **Input:** root = [3,9,20,null,null,15,7]
- **Output:** [[3],[9,20],[15,7]]

## My Solution
1. 

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:  # check if the root isn't empty.
            return []

        result = []
        queue = deque([root])  # add the root to the queue.
        while len(queue) > 0:  # go while the queue still has elements
            level = []
            for i in range(len(queue)):
                node = queue.popleft()  # pop the first element in the queue
                level.append(node.val)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            result.append(level)
        return result
```

## [[1742934546-big-(o)-time-and-space-complexity|Time and Space Complexity]]

- **Time:**
	- hol
- **Space:**
	- a

# Link
[Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/)
