---
id: 1744047120-how-many-numbers-are-smaller-than-the-current-number
aliases:
  - How Many Numbers Are Smaller Than The Current Number
tags:
  - #resource
created_date: "2025-04-07"
link: "[[]]"
---

# How Many Numbers Are Smaller Than The Current Number
- Given the array `nums`, for each `nums[i]` find out how many numbers in the array are smaller than it. That is, for each `nums[i]` you have to count the number of valid `j's` such that `j != i` **and** `nums[j] < nums[i]`.
- Return the answer in an array.

## Desired Outcome
- **Input:** nums = [8,1,2,2,3]
- **Output:** [4,0,1,1,3]
- **Explanation:** 
	- For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
	- For nums[1]=1 does not exist any smaller number than it.
	- For nums[2]=2 there exist one smaller number than it (1). 
	- For nums[3]=2 there exist one smaller number than it (1). 
	- For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

## My Solution
1. Use the [[1743010403-sorted-in-python|sorted()]] function to sort the list of nums.
2. Initialize a empty dictionary.
3. Use [[1743009999-enumerate-in-python|enumerate()]] to iterate through the sorted list with index-value pairs.
4. Check if the num is not in the dictionary, if it isn't add it.
5. Return a [[1743009814-list-comprehensions-in-python|list comprehension]] of the value of the dictionary using the the num in nums as the key to retrive it.

```python
class Solution:
	def smallerNumbersThanCurrentSortedEnumerate(self, nums: list[int]) -> list[int]:
		sorted_nums = sorted(nums) 
		index_map = {}
		for i, num in enumerate(sorted_nums):
			if num not in index_map:
				index_map[num] = i
		return [index_map[num] for num in nums]
```

## [[1742934546-big-(o)-time-and-space-complexity|Time and Space Complexity]]
- **Time:**
	- O(n log n) + O(n) + O(n) = O(n log n) (`sorted()` dominates).
- **Space:**
	- O(n) + O(n) + O(n) = O(n) (All structures grow linearly).

# Link
[1365. How Many Numbers Are Smaller Than the Current Number](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/)
