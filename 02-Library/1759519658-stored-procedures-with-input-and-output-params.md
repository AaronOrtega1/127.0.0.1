---
link: "[[1743802452-programming|Programming]]"
aliases:
  - Stored Procedures with Input and Output Params
tags:
  - Knowledge
  - sql
created_date: 2025-10-03
---
# Stored Procedures with Input and Output Params
## How to create a stored procedure with input and output params?
```SQL
DELIMITER $$
CREATE PROCEDURE emp_info(in p_first_name varchar(255), in p_last_name varchar(255), out p_emp_no integer)
BEGIN
SELECT
	e.emp_no
INTO p_emp_no FROM
	employees e
WHERE
	e.first_name = p_first_name
		AND e.last_name = p_last_name;
END$$
DELIMITER ;
```

- You pass the params inside the parenthesis and with `in` at the start, defining also the type, same for the output but with `out`.
- Put the output into the var with `INTO` in the query.
## Declare a variable in SQL
```SQL
set @v_emp_no = 0;
```
## Call the Stored Procedure and display the result
```SQL
call emp_info("Georgi", "Facello", @v_emp_no);

select @v_emp_no;
```
## Related Links
- [[1759342844-stored-procedure-sql|Stored Procedure SQL]]
