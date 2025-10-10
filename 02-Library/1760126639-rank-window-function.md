---
link: "[[1756144012-business-intelligence-analyst-udemy-course-2025|Business Intelligence Analyst Udemy Course 2025]]"
aliases:
  - Rank Window Function
tags:
  - Knowledge
  - sql
  - pending
created_date: 2025-10-10
---
# RANK() Window Function
## Summary
- Tool used to assign a position or rank to each row in a result set based on specific criteria.
- If two or more rows share the same value according the specified criteria, they will receive the same rank. The rank of the next row is incremented by the number of tied rows.

```SQL
select
	s.emp_no,
	s.salary,
	RANK() over w as rank_num
from
	salaries s
where
	s.emp_no = 11839
window w as (partition by s.emp_no order by s.salary desc)
```

![[1760126639-rank-window-function.webp]]
## Related Links
- [[1760126958-dense-rank-window-function|DENSE RANK Window Function]]
## Source
[Rank and Dense Rank in SQL Server - GeeksforGeeks](https://www.geeksforgeeks.org/sql-server/rank-and-dense-rank-in-sql-server/)
