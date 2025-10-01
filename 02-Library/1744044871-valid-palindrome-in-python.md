---
link: "[[1744040981-150-neetcode-problems|Leetcode Problems]]"
aliases:
  - valid-palindrome-in-python
  - Valid Palindrome In Python
tags:
  - Knowledge
  - leetcode
  - two-pointer
created_date: 2025-04-07
XP: 5
---
# Valid Palindrome In Python
- A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
- Given a string `s`, return `true` _if it is a **palindrome**, or_ `false` _otherwise_.
## Desired Outcome
- **Input:** s = "A man, a plan, a canal: Panama"
- **Output:** true
- **Explanation:** "amanaplanacanalpanama" is a palindrome.
## My Solution
1. We start by making all the string lowecases.
2. Declare the left and the right pointer at 0 and length-1 of the string.
3. Make a loop while left pointer is less than the right pointer.
	1. Check if the char in left of the string is not an alphanumeric char, if so skip it.
	2. The same for the char in the right, if it isn't an alphanumeric char, skip it.
	3. Finally we check if the char in the left and the char in the right are not the same, if so return False.
	4. If we pass all this if statements we update the values and continue checking.
4. Return True if we exit the loop since it means that the word is a palindrome.

```python
class Solution:
	def isPalindrome(self, s: str) -> bool:
		s_lower = s.lower()
		start = 0
		end = len(s_lower) - 1
		while start < end:
			if not s_lower[start].isalnum():
				start += 1
				continue
			if not s_lower[end].isalnum():
				end -= 1
				continue
			if s_lower[start] != s_lower[end]:
				return False
			start += 1
			end -= 1
		return True
```

## [[1744043004-big-o-timer-and-space-complexity|Big O Timer And Space Complexity]]
- **Time:**
	- O(n) - Because we have to iterate through the whole string to check if its a palindrome.
- **Space:**
	- O(n) - Because we make a copy of the string with `.lower()`
## Cleaner Solution:
```python
class Solution:
	def isPalindrome(self, s: str) -> bool:
		filtered = ""
        for c in s:
            if c.isalnum():
                filtered += c
        return filtered.lower() == filtered.lower()[::-1]
```
# Link
[125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)