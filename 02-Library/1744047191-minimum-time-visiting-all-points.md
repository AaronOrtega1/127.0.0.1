---
id: 1744047191-minimum-time-visiting-all-points
aliases:
  - Minimum Time Visiting All Points
tags:
  - #resource
created_date: "2025-04-07"
link: "[[]]"
---

# Minimum Time Visiting All Points
- On a 2D plane, there are `n` points with integer coordinates `points[i] = [xi, yi]`. Return _the **minimum time** in seconds to visit all the points in the order given by_ `points`.
- You can move according to these rules:
- In `1` second, you can either:
    - move vertically by one unit,
    - move horizontally by one unit, or
    - move diagonally `sqrt(2)` units (in other words, move one unit vertically then one unit horizontally in `1` second).
- You have to visit the points in the same order as they appear in the array.
- You are allowed to pass through points that appear later in the order, but these do not count as visits. 

## Desired Outcome

## My Solution
1. Initialize the seg counter in 0.
2. Pop the last item and put it in x1, y1.
3. The while loop is going to continue while points has elements in it.
4. Pop the last item and put it in x2, y2.
5. Sum to the seg counter the max value between the absolute value of (y2-y1) and (x2-x1).
6. Update x1, y1 for the values of x2, y2 and continue.
7. Finally once points has no elements return the counter.

```python
class Solution:
	def minTimeToVisitAllPoints(self, points: list[list[int]]) -> int:
		sec_count = 0
		x1, y1 = points.pop()
		while points:
			x2, y2 = points.pop()
			sec_count += max(abs(y2-y1), abs(x2-x1))
			x1, y1 = x2, y2
		return sec_count
```

## Key info to this problem solution
- The distance between two points is the maximum difference of one coord. 

## [[1742934546-big-(o)-time-and-space-complexity|Time and Space Complexity]]
- **Time:**
	- O(N) since it has to iterate in each element of the list.
- **Space:**
	- O(1) since it only uses variables to achieve the solution, not needing more space.

# Link
[1266. Minimum Time Visiting All Points](https://leetcode.com/problems/minimum-time-visiting-all-points/)
