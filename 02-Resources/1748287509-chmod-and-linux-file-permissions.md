---
link: "[[1743802452-programming|Programming]]"
aliases:
  - Chmod And Linux File Permissions
tags:
  - resource
  - linux
created_date: 2025/05/26
---
# chmod And Linux File Permissions
## Summary
- 
## Key Ideas
### Types of permissions:
- **Read (r)** - Allows viewing/reading the file.
- **Write (w)** - Allows modifying/deleting the file.
- **Execute (x)** - Allows running the file as a program (or accessing a directory).
### To who are this assigned?
- **Owner (u)**
- **Groups (g)**
- **Others (o)**
### Permission Representation
#### Symbolic Mode
```bash
chmod u=rwx,g=rx,o=r file.txt
```
#### Numeric Mode (octal numbers)
- Each permission has numeric value:
	- **Read (r) = 4**
	- **Write (w) = 2**
	- **Execute (x) = 1**
- These are added together:
	- `7` (4+2+1) → **rwx**
	- `6` (4+2) → **rw-**
	- `5` (4+1) → **r-x**
	- `4` → **r--**
	- `0` → **no permissions**
## Related Links
- [[]]
## Source
[text](url) 