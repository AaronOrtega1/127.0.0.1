---
id: 1744045269-valid-parentheses
aliases:
  - valid-parentheses
  - Valid Parentheses
tags:
  - resource
  - leetcode
  - stack
created_date: 2025-04-07
link: "[[1744040981-leetcode-problems|Leetcode Problems]]"
---
# Valid Parentheses
- Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.
- An input string is valid if:
	- Open brackets must be closed by the same type of brackets.
	- Open brackets must be closed in the correct order.
	- Every close bracket has a corresponding open bracket of the same type.
## Desired Outcome
- **Input:** s = "()"
- **Output:** true
## My Solution
- Define a empty [[Stack|stack]] and a dictionary with closing parentheses as the key and opening as the value.
- Iterate for each character in the string.
	- Check if the char is in the dictionary.
		- If stack is not empty and the top element of the stack is equal to the current closing bracket in the dictionary.
			- If this is true we pop the last element.
		- Else the brackets don't match and we return False.
	- Else the char is a opening bracket and we push it to the top of the stack.

```python
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        hash = {
            ')': '(',
            ']': '[',
            '}': '{'
        }
        for char in s:
            if char in hash:
                if stack and stack[-1] == hash[char]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(char)
        return not stack
```
## [[1744043004-big-o-timer-and-space-complexity|Time and Space Complexity]]
- **Time:**
	- O()
- **Space:**
	- O()
# Link
