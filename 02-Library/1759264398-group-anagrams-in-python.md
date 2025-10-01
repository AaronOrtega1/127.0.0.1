---
link: "[[1744040981-150-neetcode-problems|NeetCode Problems]]"
aliases:
  - Group Anagrams in Python
tags:
  - Knowledge
  - leetcode
  - arrays-hashing
created_date: 2025-09-30
XP: 10
difficulty: mid
---
# Group Anagrams in Python
- Given an array of strings `strs`, group all _anagrams_ together into sublists. You may return the output in **any order**.
- An **anagram** is a string that contains the exact same characters as another string, but the order of the characters can be different.
## Desired Outcome
- **Input:** strs = ["act","pots","tops","cat","stop","hat"]
- **Output:** \[["hat"],["act", "cat"],["stop", "pots", "tops"]]
## My Solution
1. Create a default dictionary with list as values.
2. Iterate through the string in the string list.
	1. Save the sorted string as a var.
	2. Use the var to append the string to its value list. {"sorted_string": ["string"]}
3. Return the default dictionary values as a list.

```python
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # assign a list value to newly created keys
        ans = defaultdict(list)
        # iterate through the string in the string list
        for s in strs:
            # save the the sorted string as a var
            key = "".join(sorted(s))
            # use the sorted string to append the s in its value list
            ans[key].append(s)
        return list(ans.values())
```
## [[1744043004-big-o-timer-and-space-complexity|Time and Space Complexity]]
- **Time:**
	- O(n x k log k)
		- **Outer loop**: O(n) where n is number of strings
		- **Sorting each string**: O(k log k) where k is average string length
- **Space:**
	- O(n x k)
		- **ans dictionary**: Stores all n strings → O(n × k)
		- **Sorted keys**: Each key is same length as original strings → O(n × k)
		- **Auxiliary sorting space**: O(k) for each sort, but this is temporary
## Link
[49. Group Anagrams](https://leetcode.com/problems/group-anagrams/)
