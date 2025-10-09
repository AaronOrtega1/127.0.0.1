---
link: "[[1756144012-business-intelligence-analyst-udemy-course-2025|Business Intelligence Analyst Udemy Course 2025]]"
aliases:
  - Intro to MySQL Window Functions
tags:
  - Knowledge
  - sql
created_date: 2025-10-09
---
# Intro to MySQL Window Functions
## Summary
- An advance tool performing a calculation for **every record in the data set**, using **other records** associated with the specified one from the table.
- There are two types:
	- **Aggregate window functions**
		- Aggregate functions used in the context of window functions.
	- **Nonaggregate window functions**
		- **Ranking window functions**
		- **Value window functions**
### Syntax
```SQL
select
	...,
	ROW_NUMBER() OVER () AS ...
from
	...;
```

- `OVER` clase will lead to a **window specification**.

### How to use multiple Window Functions in a same query:
1. Add an **ORDER BY** clause to the **outer** query.
```SQL
SELECT
	s.emp_no ,
	s.salary ,
	ROW_NUMBER() OVER () AS row_num1,
	ROW_NUMBER() OVER (PARTITION BY s.emp_no ) AS row_num2,
	ROW_NUMBER() OVER (PARTITION BY s.emp_no ORDER BY s.salary DESC) AS row_num3,
	ROW_NUMBER() OVER (ORDER BY s.salary DESC) AS row_num4
FROM 
	salaries s
ORDER BY
	s.emp_no,
	s.salary;
```
2. Use **only window specifications requiring identical partitions.**
```SQL
SELECT
	s.emp_no ,
	s.salary ,
	ROW_NUMBER() OVER (PARTITION BY s.emp_no ) AS row_num2,
	ROW_NUMBER() OVER (PARTITION BY s.emp_no ORDER BY s.salary DESC) AS row_num3,
FROM 
	salaries s
```
