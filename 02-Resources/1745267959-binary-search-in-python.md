---
link: "[[1744040981-leetcode-problems|Leetcode Problems]]"
aliases:
  - Binary Search In Python
tags:
  - resource
  - python
  - binary-search
created_date: 2025/04/21
---
# Binary Search In Python
- You are given an array of **distinct** integers `nums`, sorted in ascending order, and an integer `target`.
- Implement a function to search for `target` within `nums`. If it exists, then return its index, otherwise, return `-1`.
- Your solution must run in $O(logn)$ time.
## Desired Outcome
- **Input:** nums = [-1,0,2,4,6,8], target = 4
- **Output:** 3
## My Solution
- First we declare the start and the end of the list with 0 and the length of the list - 1 respectively.
- Start a while the start is less than or equal to the end:
	- Declare the mid of the list.
	- If the num in the mid of the list is equal to the target we return the mid index of the list.
	- If the num in the mid is lower than the target we move the start to mid index + 1
	- Else the num in the mid is higher than the target we move the end to the mid index - 1
- If we exit the while loop the target isn't in the list so we return `-1`.
```python
class Solution:
    def search(self, nums: list[int], target: int) -> int:
        start = 0
        end = len(nums) - 1
        while start <= end:
            mid = ( start + end ) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                start = mid + 1
            else:
                end = mid -1
        return -1
```
## [[1744043004-big-o-timer-and-space-complexity|Timer And Space Complexity]]
- **Time:**
	- O(logn) Because we divide the problem and only check the part that matters making the problem faster.
- **Space:**
	- O(1) We only declare some variables so the space is constant.
## Link
[Binary Search NeetCode](https://neetcode.io/problems/binary-search)