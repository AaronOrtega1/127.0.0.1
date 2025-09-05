---
link: "[[1744040981-leetcode-problems|Leetcode Problems]]"
aliases:
  - best-time-to-buy-and-sell-stock
  - Best Time To Buy And Sell Stock
tags:
  - Knowledge
  - leetcode
  - sliding-window
created_date: 2025-04-07
---
# Best Time To Buy And Sell Stock
- You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.
- You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.
- Return _the maximum profit you can achieve from this transaction_. If you cannot achieve any profit, return `0`.
## Desired Outcome
- **Input:** prices = [7,1,5,3,6,4]
- **Output:** 5
- **Explanation:** Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
- Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
## My Solution
- First we declare the left and right pointers initialized in 0 and 1 respectively along our max_profit variable initialized in 0.
- We go through the list while the right pointer is smaller than the len of the list.
	- We check if the operation is profitable, by checking if the left pointer is smaller than the right one.
	- If it's profitable we save the temp profit in a variable and compare it with our own max_profit variable if it bigger we change it.
	- If it's not we move our left pointer to the position of the right pointer
	- And then update our right pointer += 1.
- Finally we return the max_profit.

```python
class Solution:
	def maxProfit(self, prices: list[int]) -> int:
		max_profit = 0
		l_pointer = 0 
		r_pointer = 1
		end = len(prices)
		while r_pointer < end:
			if prices[l_pointer] < prices[r_pointer]:
				window_profit = prices[r_pointer] - prices[l_pointer]
				max_profit = max(max_profit, window_profit)
			else:
				l_pointer = r_pointer
			r_pointer += 1
		return max_profit
```
## [[1744043004-big-o-timer-and-space-complexity|Time and Space Complexity]]
- **Time:**
	- O(N) - Because we iterate through the array once to get the max profit.
- **Space:**
	- O(1) - Because we don't use any extra data structures.
# Link
[121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)