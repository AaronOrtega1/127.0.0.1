---
link: "[[1744153475-learning-sql|Learning SQL]]"
aliases:
  - Sql Case Statements
tags:
  - Knowledge
  - sql
created_date: 2025/04/09
---
# Sql Case Statements

## Summary


## Key Ideas
![[1744254487-sql-case-statements.webp]]
### Small Exercise:
- Pay Increase and Bonus
- < 50000 = 5%
- > 50000 = 7%
- Finance = 10% bonus

```SQL
SELECT ES.first_name, ES.last_name, ES.salary ,PD.department_name,
CASE
	WHEN ES.salary < 50000 THEN ES.salary * 1.05
	WHEN ES.salary > 50000 THEN ES.salary * 1.07
END AS salary_increased,
CASE
	WHEN PD.department_name = "Finance" then ES.salary * 0.1
END bonus
FROM Parks_and_Recreation.employee_salary AS ES
LEFT JOIN Parks_and_Recreation.parks_departments AS PD
	ON ES.dept_id = PD.department_id
;
```

![[1744254487-sql-case-statements-1.webp]]

## Related Links
- [[ ]]
