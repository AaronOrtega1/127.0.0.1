---
id: 1744047426-minimum-absolute-difference
aliases:
  - Minimum Absolute Difference
tags:
  - #resource
created_date: "2025-04-07"
link: "[[]]"
---

# Minimum Absolute Difference
- Given an array of **distinct** integers `arr`, find all pairs of elements with the minimum absolute difference of any two elements.
- Return a list of pairs in ascending order(with respect to pairs), each pair `[a, b]` follows
	- `a, b` are from `arr`
	- `a < b`
	- `b - a` equals to the minimum absolute difference of any two elements in `arr`

## Desired Outcome
- **Input:** arr = [4,2,1,3]
- **Output:** [ [1,2],[2,3],[3,4] ]
- **Explanation:** The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

## My Solution
1. [[]] the array 

```python
class Solution:
    def minimumAbsDifference(self, arr: list[int]) -> list[list[int]]:
        arr.sort()
        min_diff = float("inf")
        result = []
        for i in range(len(arr) - 1):
            diff = arr[i + 1] - arr[i]
            if diff < min_diff:
                min_diff = diff
                result = [[arr[i], arr[i + 1]]]
            elif diff == min_diff:
                result.append([arr[i], arr[i + 1]])
        return result
```

## [[1744043004-big-o-timer-and-space-complexity|Time and Space Complexity]]
- **Time:**
	- O()
- **Space:**
	- O()

# Link
[]()
