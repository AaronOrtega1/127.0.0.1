---
link: "[[1756144012-business-intelligence-analyst-udemy-course-2025|Business Intelligence Analyst Udemy Course 2025]]"
aliases:
  - DENSE RANK Window Function
tags:
  - Knowledge
  - sql
  - pending
created_date: 2025-10-10
---
# DENSE_RANK() Window Function
## Summary
- Assign ranks to rows based on specified criteria, but it avoids gaps by tied rows consecutive ranks, ensuring a continuos sequence.

```SQL
select
	s.emp_no,
	s.salary,
	DENSE_RANK() over w as rank_num
from
	salaries s
where
	s.emp_no = 11839
window w as (partition by s.emp_no order by s.salary desc)
```

![[1760126958-dense-rank-window-function.webp]]

## Related Links
- [[1760126639-rank-window-function|Rank Window Function]]
## Source
[Rank and Dense Rank in SQL Server - GeeksforGeeks](https://www.geeksforgeeks.org/sql-server/rank-and-dense-rank-in-sql-server/)
