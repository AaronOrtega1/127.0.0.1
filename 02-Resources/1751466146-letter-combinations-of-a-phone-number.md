---
link: "[[1744040981-leetcode-problems|Leetcode Problems]]"
aliases: 
  - Letter Combinations of a Phone Number
tags:
  - resource
created_date:
  2025-07-02
---
# Letter Combinations of a Phone Number
- Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
- A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
![[1751466146-letter-combinations-of-a-phone-number.webp]]

## Desired Outcome
- **Input:** digits = "23"
- **Output:** ["ad","ae","af","bd","be","bf","cd","ce","cf"]

## My Solution
1. 

```python
digit_to_char = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
}

class Solution:
    def letterCombinations(self, digits: str) -> list[str]:
        if not digits:
            return []
        res = []
        def dfs(start_idx, path):
            if start_idx == len(digits):
                res.append("".join(path))
                return
            for char in digit_to_char[digits[start_idx]]:
                path.append(char)
                dfs(start_idx + 1, path)
                path.pop()
        dfs(0, [])
        return res
```

## [[1742934546-big-(o)-time-and-space-complexity|Time and Space Complexity]]

- **Time:**
	- hol
- **Space:**
	- a

# Link
[Number of Islands](https://leetcode.com/problems/number-of-islands/)
