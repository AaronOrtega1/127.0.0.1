---
link: "[[1744040981-150-neetcode-problems|Leetcode Problems]]"
aliases:
  - valid-anagram-in-python
  - Valid Anagram In Python
tags:
  - Knowledge
  - leetcode
  - arrays-hashing
created_date: 2025-04-07
---
# Valid Anagram In Python
- Given two strings `s` and `t`, return `true` if `t` is an **anagram** of `s`, and `false` otherwise.
## Desired Outcome
- **Input:** s = "anagram", t = "nagaram"
- **Output:** true
## My Solution
1. First we check if the string are the same length, if they aren't they cannot be anagrams so we return false.
2. Then we declare two empty dictionaries, to keep count of the occurrences of each char in the strings.
3. We iterate from 0 to the length of any string since they are the same length.
	1. For each string in its respectively dictionary we start a count of the occurrences, with the `.get()` method we get the value of a specific key in the dictionary or 0 if it isn't initialized.
4. Finally we return the comparison of both dictionaries to see if they are equal.

```python
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        len_s = len(s)
        len_t = len(t)
        if len_s != len_t:
            return False
        s_dic = {}
        t_dic = {}
        for i in range(len(s)):
            s_dic[s[i]] = 1 + s_dic.get(s[i], 0)
            t_dic[t[i]] = 1 + t_dic.get(t[i], 0)
        return s_dic == t_dic
```
## [[1744043004-big-o-timer-and-space-complexity|Time and Space Complexity]]
- **Time:**
	- O(n) - because we have to go through the whole string length.
- **Space:**
	- O(1) - since the number of possible character is limited to the lowercase English letters (26).
## Link
[242. Valid Anagram](https://leetcode.com/problems/valid-anagram/)