---
link: "[[1744153475-learning-sql|Learning SQL]]"
aliases:
  - Sql Temporary Tables
tags:
  - resource
  - sql
created_date: 2025/04/09
---
# Sql Temporary Tables

## Summary

## Key Ideas
- Are tables that are only visible in the session they are created.
- Are commonly used to store intermediate results for complex queries and to manipulate data before inserting it in a more permanent table:
### Ways to create a temp table:
```SQL
CREATE TEMPORARY TABLE temp_table
(
	first_name varchar(50),
	last_name varchar(50),
	favorite_movie varchar(100)
)
;
```

```SQL
CREATE TEMPORARY TABLE salary_over_50k
SELECT *
FROM Parks_and_Recreation.employee_salary
WHERE salary > 50000;
```
## Related Links
- [[ ]]