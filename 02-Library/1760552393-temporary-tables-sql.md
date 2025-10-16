---
link: "[[1756144012-business-intelligence-analyst-udemy-course-2025|Business Intelligence Analyst Udemy Course 2025]]"
aliases:
  - Temporary Tables SQL
tags:
  - Knowledge
  - sql
created_date: 2025-10-15
---
# Temporary Tables SQL
## Summary
- Can be beneficial if we need to refer to a specific result set multiple times in our analysis.
- Can be used like any other table from the default database during the MySQL session it has been created in.

```SQL
CREATE TEMPORARY TABLE temporary_table_name
SELECT
	...
FROM
	...;
```

- Can be drop.

```SQL
DROP TABLE IF EXISTS temporary_table_name;
```

- Are valid **only within the scope of a MySQL session and not beyond.**

### Other Features
- Cannot invoke a temporary table twice within a query.

```SQL
--- SQL will have and error that it cannot reopen it.
SELECT 
	*
from temporary_table_name t1
UNION SELECT 
	*
from temporary_table_name t2
```
