---
link: "[[1756144012-business-intelligence-analyst-udemy-course-2025|Business Intelligence Analyst Udemy Course 2025]]"
aliases:
  - Common Table Expression
  - CTE
tags:
  - Knowledge
  - CTE
  - sql
created_date: 2025-10-14
---
# Common Table Expression
## Summary
- Tool for obtaining temporary result sets within the execution of a query.
```SQL
WITH cte_name as (SELECT ... FROM ...)
SELECT
	...
FROM
	cte_name...;
```

- Can be used in `INSERT`, `UPDATE`, `DELETE`, `SELECT` statements.
- Can be reused (referenced multiple times) within s MySQL statement.

### Multiple Subclasses in a WITH Clause.
```SQL
with cte1 as (
select
	avg(salary) as avg_salary
from
	salaries),
cte2 as(select
	s.emp_no,
	MAX(s.salary) as f_highest_salary
from
	salaries s
join employees e on
	s.emp_no = e.emp_no
where
	e.gender = 'F'
group by
	s.emp_no)
select
	sum(case when c2.f_highest_salary > c1.avg_salary then 1 else 0 end) as f_highest_salaries_above_avg,
	count(e.emp_no) as total_female_contracts
from
	employees e
join cte2 c2 on
	c2.emp_no = e.emp_no
	cross join cte1 c1;
```

