---
id: 1744047020-find-all-numbers-disappeared-in-an-array-in-python
aliases:
  - Find All Numbers Disappeared In An Array In Python
tags:
  - #resource
created_date: "2025-04-07"
link: "[[]]"
---

# Find All Numbers Disappeared In An Array In Python
- Given an array `nums` of `n` integers where `nums[i]` is in the range `[1, n]`, return *an array of all the integers in the range* `[1, n]` *that do not appear in* `nums`.

## Desired Outcome
- **Input:** nums = [4,3,2,7,8,2,3,1]
- **Output:** [5,6]

## My Solution
- Make an empty array and convert the list of numbers into a [[1743523692-sets-in-python|set]].
- Iterate from 1 to the len of the list + 1.
	- Check if the iterable isn't in the nums_set.
		- If it isn't append it to the empty array.
- When the for loop finishes return the missing nums array.

```python
class Solution:
	def findDisappearedNumbers(self, nums: list[int]) -> list[int]:
		missing = []
		nums_set = set(nums)
		for i in range(1, len(nums) + 1):
			if i not in nums_set:
				missing.append(i)
		return missing
```

## [[1744043004-big-o-timer-and-space-complexity|Time and Space Complexity]]
- **Time:**
	- O(N) - Because as the N of nums increases so does the for cycle that we need to check.
- **Space:**
	- O(N) - Because python goes though the list once to convert it to a [[Sets|set]] its O(N) and in the worst case the missing list could store O(N) elements:
	- *Creating the set* O(N) + *Worst case scenario for missing list* O(N) = O(2N), simplified O(N).

# Link
[448. Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/)
