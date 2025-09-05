---
link: "[[1744040981-leetcode-problems|Leetcode Problems]]"
aliases:
  - contains-duplicates-in-python
  - Contains Duplicates In Python
tags:
  - Knowledge
  - leetcode
  - arrays-hashing
created_date: 2025-04-07
---
# Contains Duplicates In Python
- Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.
## Desired Outcome
- **Input:** nums = [1,2,3,1]
- **Output:** true
- **Explanation:**
	- The element 1 occurs at the indices 0 and 3.
## My Solution
- Going through the array I first check if the num is not in the dictionary.
	- If it isn't I initialize it with 1.
	- If it already is in the dictionary then it has a duplicate and I return True.
- If the for cycle finishes it means it doesn't have a duplicate and I return False.
```python
class Solution:
	def containsDuplicate(self, nums: list[int]) -> bool:
		dic = {}
		for num in nums:
			if num not in dic:
				dic[num] = 1
			else:
				return True
		return False
```
## [[1744043004-big-o-timer-and-space-complexity|Time and Space Complexity]]
- **Time:**
	- O(N) because in the worst case it has to go through the while array.
- **Space:**
	- O(N) in worst case it doesn't have duplicates and initializes all the nums in the dictionary.
# Link
[217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/description/)