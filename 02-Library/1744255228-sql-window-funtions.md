---
link: "[[1744153475-learning-sql|Learning SQL]]"
aliases:
  - Sql Window Funtions
tags:
  - Knowledge
  - sql
created_date: 2025/04/09
---
# Sql Window Funtions

## Summary


## Key Ideas
- They realize calculations over a set of rows related to the actual row, without grouping the results like the traditional agregated functions.
- They allow more detailed analysis.
	- It uses the `OVER()`, that can include:
		- `PARTITION BY` : Divides in groups to calculate the partition.
		- `ORDER BY` : Defines the order inside each window.
		- `FRAME` : Specify the range of rows.

```SQL
SELECT ED.employee_id, ED.first_name, ED.last_name, ED.gender, ES.salary,
AVG(ES.salary) OVER(PARTITION BY gender)
FROM Parks_and_Recreation.employee_demographics AS ED
JOIN Parks_and_Recreation.employee_salary AS ES
	ON ED.employee_id = ES.employee_id
;
```

![[1744255228-sql-window-funtions.webp]]
## Common example.
- `ROW_NUMBER()`: Assigns a sequential number to each row inside the partition.
- `RANK()`: Ranks the rows according to the order by designated, allows draws.
- `RANK_DENSE()`: Similarly to `RANK()` but doesn't allow draws.

```SQL
SELECT ED.employee_id, ED.first_name, ED.last_name, ED.gender, ES.salary,
ROW_NUMBER() OVER(PARTITION BY gender ORDER BY salary DESC) AS row_num,
RANK() OVER(PARTITION BY gender ORDER BY salary DESC) AS rank_num,
DENSE_RANK() OVER(PARTITION BY gender ORDER BY salary DESC) AS dense_rank_num
FROM Parks_and_Recreation.employee_demographics AS ED
JOIN Parks_and_Recreation.employee_salary AS ES
	ON ED.employee_id = ES.employee_id
;
```

![[1744255228-sql-window-funtions-1.webp]]



## Related Links
- [[ ]]

## Source
[text](url) 
