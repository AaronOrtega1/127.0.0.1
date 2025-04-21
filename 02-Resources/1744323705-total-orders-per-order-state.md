---
link: "[[1744296520-sql-practice-with-dummy-database-created-by-deepseek|SQL Practice Deepseek]]"
aliases:
  - Total Orders Per Order State
tags:
  - resource
created_date: 2025/04/10
---
# Total Orders Per Order State
```SQL
SELECT estado, COUNT(orden_id) as count_estado
FROM ordenes
GROUP BY estado
;
```
