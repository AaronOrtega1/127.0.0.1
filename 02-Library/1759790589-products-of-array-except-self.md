---
link: "[[1744040981-150-neetcode-problems|150 NeetCode Problems]]"
aliases:
  - Products of Array Except Self
tags:
  - Knowledge
  - leetcode
  - arrays-hashing
created_date: 2025-10-06
XP: 10
difficulty: mid
solution_language: python
---
# Products of Array Except Self
## The Challenge
- Given an integer array `nums`, return an array `output` where `output[i]` is the product of all the elements of `nums` except `nums[i]`.
- Each product is **guaranteed** to fit in a **32-bit** integer.
- Follow-up: Could you solve it in $O(n)$ time without using the division operation?
## Desired Outcome
- **Input:** [1,2,4,6]
- **Output:** [48,24,12,8]
## The Approach
- 
## The Incantation (Code)
```Python
class Solution:
    def productExceptSelfBrute(self, nums: List[int]) -> List[int]:
        n = len(nums)
        res = [0] * n
        for i in range(n):
            prod = 1
            for j in range(n):
                if i == j:
                    continue
                prod *= nums[j]
            res[i] = prod
        return res

    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        res = [1] * n
        prefix = 1
        for i in range(n):
            res[i] = prefix
            prefix *= nums[i]
        suffix = 1
        for i in range(n - 1, -1, -1):
            res[i] *= suffix
            suffix *= nums[i]
        return res
```
## [[1744043004-big-o-timer-and-space-complexity|Time and Space Complexity]]
- **Time:**
- **Space:**
# Link
[text]()
