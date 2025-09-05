---
link: "[[1744040981-leetcode-problems|Leetcode Problems]]"
aliases:
  - two-sum-in-python
  - Two Sum In Python
tags:
  - Knowledge
  - leetcode
  - arrays-hashing
created_date: 2025-04-07
---
# Two Sum In Python
- Given an array of integers `nums` and an integer `target`, return the indices `i` and `j` such that `nums[i] + nums[j] == target` and `i != j`.
- You may assume that *every* input has exactly one pair of indices `i` and `j` that satisfy the condition.
- Return the answer with the smaller index first.
## Desired Outcome
- Input: nums = [3,4,5,6], target = 7
- Output:[0,1]
## My Solution
1. Define a dictionary where we will have {value: index}.
2. Make and enumerate of the list of nums so we get the index and the num.
3. Go trough this enumerate and get the diff for each num.
4. If the diff is in the dictionary return the [value, index].
5. If it's not in the dictionary add it.
```python
class Solution:
	def twoSum(self, nums: list[int], target: int) -> list[int]:
		prevMap = {}
		for i, num in enumerate(nums):
			diff = target - num
			if diff in prevMap:
				return [prevMap[diff], i]
			prevMap[num] = i
```
## [[1744043004-big-o-timer-and-space-complexity|Timer And Space Complexity]]
- **Time:**
	- O(N)
- **Space:**
	- O(N)
## Link
[1. Two Sum](https://leetcode.com/problems/two-sum/)