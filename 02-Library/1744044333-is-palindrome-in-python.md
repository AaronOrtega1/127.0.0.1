---
id: 1744044333-is-palindrome-in-python
aliases:
  - is-palindrome-in-python
  - Is Palindrome In Python
tags:
  - Knowledge
  - leetcode
  - two-pointer
created_date: 2025-04-07
link: "[[1744040981-leetcode-problems|Leetcode Problems]]"
---
# Is Palindrome In Python
- Given an integer `x`, return `true` _if_ `x` _is a palindrome_ _, and_ `false` _otherwise_.
## Desired Outcome
- **Input:** x = 121
- **Output:** true
- **Explanation:** 121 reads as 121 from left to right and from right to left.
## My Solution
- Parse the integer into a string, declare the left and right pointer in 0 and the length of the string respectively.
- While the left pointer is less than the right one we do the following:
	- Check if a the string in left position is not equal to string in right position, if so return False
	- If the previous doesn't apply update the pointers.
- If we exit the while loop it means that it's a palindrome so we return True
```python
class Solution:
    def isPalindrome(self, x: int) -> bool:
        str_int = str(x)
        left = 0
        right = len(str_int) - 1
        while left < right:
            if str_int[left] != str_int[right]:
                return False
            left += 1
            right -= 1
        return True
```
## [[1744043004-big-o-timer-and-space-complexity|Timer And Space Complexity]]
- **Time:**
	- O(n) porque recorre el string una vez.
- **Space:**
	- O(n) por la conversión a string.

## My Solution Reduced.
- Parse de integer into a string.
- Use a comparison in the return to see if the string is equal to itself but reversed.

```python
class Solution:
    def isPalindrome(self, x: int) -> bool:
        str_int = str(x)
        return str_int == str_int[::-1]
```
## [[1744043004-big-o-timer-and-space-complexity|Time and Space Complexity]]
- **Time:**
	- O(n) porque recorre el string una vez.
- **Space:**
	- O(n) por la conversión a string.
# Link
[9. Palindrome Number](https://leetcode.com/problems/palindrome-number/description/)