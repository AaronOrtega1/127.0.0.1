---
link: "[[1744040981-150-neetcode-problems|150 NeetCode Problems]]"
aliases:
  - Valid Sudoku In Python
tags:
  - Knowledge
  - leetcode
  - arrays-hashing
created_date: 2025-10-10
XP: 10
difficulty: mid
solution_language: python
---
# Valid Sudoku In Python
## The Challenge
You are given a `9 x 9` Sudoku board `board`. A Sudoku board is valid if the following rules are followed:

1. Each row must contain the digits `1-9` without duplicates.
2. Each column must contain the digits `1-9` without duplicates.
3. Each of the nine `3 x 3` sub-boxes of the grid must contain the digits `1-9` without duplicates.

Return `true` if the Sudoku board is valid, otherwise return `false`

Note: A board does not need to be full or be solvable to be valid.
## Desired Outcome
- **Input:** 
```python
board = [
	["5", "3", ".", ".", "7", ".", ".", ".", "."],
	["6", ".", ".", "1", "9", "5", ".", ".", "."],
	[".", "9", "8", ".", ".", ".", ".", "6", "."],
	["8", ".", ".", ".", "6", ".", ".", ".", "3"],
	["4", ".", ".", "8", ".", "3", ".", ".", "1"],
	["7", ".", ".", ".", "2", ".", ".", ".", "6"],
	[".", "6", ".", ".", ".", ".", "2", "8", "."],
	[".", ".", ".", "4", "1", "9", ".", ".", "5"],
	[".", ".", ".", ".", "8", ".", ".", "7", "9"],
]
```
- **Output:** True
## The Approach
- First define 3 dictionaries with [[1743523692-sets-in-python|sets]] as it's values to check if there are duplicates.
- Iterate through the whole 9 rows:
	- Iterate through the whole 9 rows:
		- If the current char is a "." skip it.
		- If the current char is in the rows, cols or squares in it's row, col or division of r/3 and c/3 respectively
			- Return false
		- Else add the current char to our sets.
- Return True if it exits the for loops
## The Incantation (Code)
```python
class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rows = defaultdict(set)
        cols = defaultdict(set)
        squares = defaultdict(set)
        for r in range(9):
            for c in range(9):
                if board[r][c] == ".":
                    continue
                if (
                    board[r][c] in rows[r]
                    or board[r][c] in cols[c]
                    or board[r][c] in squares[(r // 3, c // 3)]
                ):
                    return False
                rows[r].add(board[r][c])
                cols[c].add(board[r][c])
                squares[(r // 3, c // 3)].add(board[r][c])
        return True
```
## [[1744043004-big-o-timer-and-space-complexity|Time and Space Complexity]]
- **Time:** $O(1)$
	- Since the board size is fixed at $9*9=81$ -> $O(81)$ -> $O(1)$.
- **Space:** $O(1)$
	- `rows`: 9 sets, each contains up to 9 elements -> 81 elements max.
	- `cols`: 9 sets, each contains up to 9 elements -> 81 elements max.
	- `squares`: 9 sets, each contains up to 9 elements -> 81 elements max.
	- Worst case scenario: $3*81=243$ elements -> $O(243)$ -> $O(1)$
# Link
[Valid Sudoku - LeetCode](https://leetcode.com/problems/valid-sudoku/description/)
