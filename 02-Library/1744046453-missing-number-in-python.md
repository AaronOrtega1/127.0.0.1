---
id: 1744046453-missing-number-in-python
aliases:
  - Missing Number In Python
tags:
  - #resource
created_date: "2025-04-07"
link: "[[1744040981-leetcode-problems|Leetcode Problems]]"
---

# Missing Number In Python
- Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return *the only number in the range that is missing from the array.*

## Desired Outcome
- **Input:** nums = [9,6,4,2,3,5,7,0,1]
- **Output:** 8

## My Solution
- Convert the list into a [[1743523692-sets-in-python|set]].
- Iterate from 0 to the length of the list + 1
	- Check if the iterable is not in the set, if it isn't return it

```python
class Solution:
	def missingNumber(self, nums: list[int]) -> int:
		nums_set = set(nums)
		for i in range(len(nums)+1):
			if i not in nums_set:
				return i
```

## [[1744043004-big-o-timer-and-space-complexity|Time and Space Complexity]]
- **Time:**
	- O(N) because we have to iterate through the list once.
- **Space:**
	- O(N) to convert the list into a set.

# Link
[268. Missing Number](https://leetcode.com/problems/missing-number/description/)
