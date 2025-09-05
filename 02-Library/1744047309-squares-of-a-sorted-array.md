---
id: 1744047309-squares-of-a-sorted-array
aliases:
  - Squares Of A Sorted Array
tags:
  - #resource
created_date: "2025-04-07"
link: "[[]]"
---

# Squares Of A Sorted Array
- Given an integer array `nums` sorted in **non-decreasing** order, return _an array of **the squares of each number** sorted in non-decreasing order_.

## Desired Outcome
- **Input:** nums = [-4,-1,0,3,10]
- **Output:** [0,1,9,16,100]
- **Explanation:** After squaring, the array becomes [16,1,0,9,100]. After sorting, it becomes [0,1,9,16,100].

## My Solution
1. Declare a empty array
2. Iterate through the whole list of nums
3. square each num and append it to the empyt array
4. Use the [[1743010403-sorted-in-python|sorted function]] to return the list in asc order.

```python
class Solution:
    def sortedSquares(self, nums: list[int]) -> list[int]:
        sqr_nums = []
        for num in nums:
            sqr_nums.append(num**2)
        return sorted(sqr_nums)
```

## [[1744043004-big-o-timer-and-space-complexity|Time and Space Complexity]]
- **Time:**
	- O(N log N)
- **Space:**
	- O(N)

# Link
[977. Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)
