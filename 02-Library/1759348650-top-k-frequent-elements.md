---
link: "[[1744040981-150-neetcode-problems|150 NeetCode Problems]]"
aliases:
  - Top K Frequent Elements
tags:
  - Knowledge
  - leetcode
  - arrays-hashing
created_date: 2025-10-01
XP: 10
difficulty: mid
solution_language: python
---
# Top K Frequent Elements
## The Challenge
Given an integer array `nums` and an integer `k`, return the `k` most frequent elements within the array.

The test cases are generated such that the answer is always **unique**.

You may return the output in **any order**.
## Desired Outcome
- **Input:** nums = [1,2,2,3,3,3], k = 2
- **Output:** [2, 3]
## The Approach
- Use a dictionary to create a frequency map of the numbers in the list nums.
- Iterate for each num in nums, If the num is not in the dictionary initialize it with 1, else add 1 to its value.
- Sort the frequency map with its items in a tuple, by the index 1 of the tuple which is the value, and return it in descending order.
- Make a list with only the top K keys of the dictionary.
## The Incantation (Code)
```python
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        frequency = {}
        for num in nums:
            if num not in frequency:
                frequency[num] = 1
            else:
                frequency[num] = frequency[num] + 1
        frequency = dict(sorted(frequency.items(), key=lambda x: x[1], reverse=True))
        # Make a list with the keys only including the top k elements
        result = list(frequency.keys())[:k]
        return result
```
## [[1744043004-big-o-timer-and-space-complexity|Time and Space Complexity]]
- **Time:** O(n log n)
	- Frequency map is O(n) because we iterate through all n elements of `nums`.
	- Sort the frequency map is O(m log m).
		- `m` = number of unique elements in `nums`.
	- Creating the result list is O(k).
		- create list with k first keys.
- **Space:** O(n)
# Link
[Top K Frequent Elements - LeetCode](https://leetcode.com/problems/top-k-frequent-elements/description/)
