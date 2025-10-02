---
link: "[[1743802452-programming|Programming]]"
aliases:
  - Stored Procedure SQL
tags:
  - Knowledge
  - sql
created_date: 2025-10-01
---
# Stored Procedure SQL
## What is a Stored Procedure?
- Prepared SQL code that you can save, so the code can be reused over and over again.
## How to create a Stored Procedure?
```SQL
drop procedure if exists procedure_name;

delimiter $$
create procedure procedure_name(params <optional>)
begin
	select ...;
end$$
delimiter ;
```
## How to invoke Stored Procedures?
```SQL
-- If you already have selected the DB you're working on
call procedure_name();

-- If you didn't select the DB you're working on
call db_name.procedure_name();
```
## How to drop a Stored Procedure?
```SQL
drop procedure procedure_name;
```

[SQL Stored Procedures](https://www.w3schools.com/SQL/sql_stored_procedures.asp)