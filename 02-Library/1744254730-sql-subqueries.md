---
link: "[[1744153475-learning-sql|Learning SQL]]"
aliases:
  - Sql Subqueries
tags:
  - Knowledge
  - sql
created_date: 2025/04/09
---
# Sql Subqueries

## Summary


## Key Ideas
- Queries that can be used in different parts of our main query
### Where
```SQL
SELECT *
FROM Parks_and_Recreation.employee_demographics AS ED
WHERE ED.employee_id IN
	(
		SELECT ES.employee_id
		FROM Parks_and_Recreation.employee_salary AS ES
		WHERE ES.dept_id = 1
	)
;
```

![[1744254730-sql-subqueries.webp]]
### Select
```SQL
SELECT ES.first_name, ES.salary,
(
	SELECT AVG(ES.salary)
	FROM Parks_and_Recreation.employee_salary AS ES
)
FROM Parks_and_Recreation.employee_salary AS ES
;
```

![[1744254730-sql-subqueries-1.webp]]
### From
```SQL
SELECT AVG(max_age), AVG(min_age), AVG(count_age)
FROM
(
	SELECT ED.gender, AVG(ED.age) AS avg_age, MAX(ED.age) AS max_age, MIN(ED.age) AS min_age, COUNT(ED.age) as count_age
	FROM Parks_and_Recreation.employee_demographics AS ED
	GROUP BY ED.gender
) AS agg_table
;
```

![[1744254730-sql-subqueries-2.webp]]
## Related Links
- [[ ]]
