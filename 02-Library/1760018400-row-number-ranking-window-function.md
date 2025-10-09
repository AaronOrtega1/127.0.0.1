---
link: "[[1756144012-business-intelligence-analyst-udemy-course-2025|Business Intelligence Analyst Udemy Course 2025]]"
aliases:
  - Row Number Ranking Window Function
tags:
  - Knowledge
  - sql
created_date: 2025-10-09
---
# ROW_NUMBER() Ranking Window Function
## Summary
### What does `ROW_NUMBER()`?
- is used for assigning the row number to the rows in each of the partitions in the order in which they were sorted in the partition using the `PARTITION` clause, only the `ORDER` clause can be used inside the `OVER` clause.

```SQL
ROW_NUMBER() OVER ([PARTITION BY col_1,col_2...] ORDER BY col_3,col_4... ASC or DESC) AS column_name
```
## Related Links
- [[1760017227-intro-to-mysql-window-functions|Intro to MySQL Window Functions]]
- [SQL Server Row_Number Function With PARTITION BY - GeeksforGeeks](https://www.geeksforgeeks.org/sql-server/sql-server-row_number-function-with-partition-by/)
