---
link: "[[1744153475-learning-sql|Learning SQL]]"
aliases:
  - Sql Common Table Expression
tags:
  - Knowledge
  - sql
created_date: 2025/04/09
---
# Sql Common Table Expression

## Summary


## Key Ideas
- Defines [[1744254730-sql-subqueries|subquery]]  block that can be referenced in the main query. 
- They are ephemeral so we have to use them immediately after we create them.
- Very useful for complex queries.

```SQL
WITH CTE_Example AS
(
	SELECT employee_id, gender, birth_date
	FROM Parks_and_Recreation.employee_demographics dem
	WHERE birth_date > '1985-01-01'
),
CTE_Example2 AS
(
	SELECT employee_id, salary
	FROM Parks_and_Recreation.employee_salary
	WHERE salary >= 50000
)
SELECT *
FROM CTE_Example cte1
LEFT JOIN CTE_Example2 cte2
	ON cte1. employee_id = cte2. employee_id
;
```

![[1744255366-sql-common-table-expression.webp]]

- we can override the column names in the next way:
```SQL
WITH CTE_Example (gender, sum_salary, min_salary, max_salary, count_salary) AS
(
	SELECT gender, SUM(salary), MIN(salary), MAX(salary), COUNT(salary)
	FROM Parks_and_Recreation.employee_demographics dem
	JOIN Parks_and_Recreation.employee_salary sal
	ON dem.employee_id = sal.employee_id
	GROUP BY gender
)
SELECT gender, ROUND(AVG(sum_salary/count_salary),2) AS rounded_avg
FROM CTE_Example
GROUP BY gender
;
```

![[1744255366-sql-common-table-expression-1.webp]]

