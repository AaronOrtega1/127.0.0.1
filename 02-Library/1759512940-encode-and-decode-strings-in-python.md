---
link: "[[1744040981-150-neetcode-problems|150 NeetCode Problems]]"
aliases:
  - Encode and Decode Strings In Python
tags:
  - Knowledge
  - leetcode
  - arrays-hashing
created_date: 2025-10-03
XP: 10
difficulty: mid
solution_language: python
---
# Encode and Decode Strings
## The Challenge
- Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.
- Please implement `encode` and `decode`
## Desired Outcome
- **Input:** ["neet","code","love","you"]
- **Output:** ["neet","code","love","you"]
## The Approach
- `encode`
	- Declare a empty string for the result.
	- Iterate through each element in the list.
		- Append to the result `str_len#string`
	- Return the result string.
- `decode`
	- Declare an empty list for the result and an i index to go through the array.
	- While the i index is less than the len of the encoded string.
		- Find the "#" delimiter to get the length.
		- Extract the length num and convert it to int.
		- Move past the "#" to the start of the actual string.
		- Calculate where this string ends.
		- Extract the string and add to result.
		- Move to next encoded string.
## The Incantation (Code)
``` Python
class Solution:
    def encode(self, strs: List[str]) -> str:
        res = ""
        for s in strs:
            res += f"{str(len(s))}#{s}"
        return res

    def decode(self, s: str) -> List[str]:
        res = []
        i = 0
        while i < len(s):
            j = i
            while s[j] != "#":
                j += 1
            length = int(s[i:j])
            i = j + 1
            j = i + length
            res.append(s[i:j])
            i = j
        return res
```
## [[1744043004-big-o-timer-and-space-complexity|Time and Space Complexity]]
- **Time:** O(n).
- **Space:** O(n).
# Link
[Encode and Decode Strings - NeetCode](https://neetcode.io/problems/string-encode-and-decode?list=neetcode150)
