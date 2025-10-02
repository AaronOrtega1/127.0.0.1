---
link: "[[1744040981-150-neetcode-problems|150 NeetCode Problems]]"
aliases:
  - Top K Frequent Elements
tags:
  - Knowledge
  - leetcode
  - pending
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

## The Approach
- 
## The Incantation (Code)
```python
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # Make frequency map
        frequency = {}
        for num in nums:
            if num not in frequency:
                frequency[num] = 1
            else:
                frequency[num] = frequency[num] + 1
        # sort the frequency map, with each item we get a tuple (key, value)
        # we sort it by the [1] index of the tuple (value) and return it in descending order
        frequency = dict(sorted(frequency.items(), key=lambda x: x[1], reverse=True))
        # Make a list with the keys only including the top k elements
        result = list(frequency.keys())[:k]
        return result
```
## [[1744043004-big-o-timer-and-space-complexity|Time and Space Complexity]]
- **Time:**
- **Space:**
# Link
[text]()
