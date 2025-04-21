---
link: "[[1744153475-learning-sql|Learning SQL]]"
aliases:
  - Sql Triggers And Events
tags:
  - resource
  - sql
created_date: 2025/04/09
---
# Sql Triggers And Events

## Summary

## Key Ideas
- **Triggers** are for when some action happens in our database and we want some other action to happen too.
	- Here in this example we are making a `TRIGGER` that every time there is an insertion in the `Parks_and_Recreation.employee_salary` table we are going to also update the `Parks_and_Recreation.employee_demographics` table with the specified params.

```SQL
USE `Parks_and_Recreation`;
DELIMITER $$

CREATE TRIGGER employee_insert2
	AFTER INSERT ON Parks_and_Recreation.employee_salary
    FOR EACH ROW
BEGIN
    INSERT INTO Parks_and_Recreation.employee_demographics (employee_id, first_name, last_name) VALUES (NEW.employee_id,NEW.first_name,NEW.last_name);
END $$

DELIMITER ; 
```

- **Events** are for creating a scheduled task to run after a specified period of time.
	- Here in this example we create an `EVENT` that every 30 seconds deletes the people over the age of 60 from our `Parks_and_Recreation.employee_demographics` table.

```SQL
DROP EVENT IF EXISTS delete_retirees;
DELIMITER $$
CREATE EVENT delete_retirees
ON SCHEDULE EVERY 30 SECOND
DO BEGIN
	DELETE
	FROM Parks_and_Recreation.employee_demographics
    WHERE age >= 60;
END $$

DELIMITER ;
```
## Related Links
- [[ ]]