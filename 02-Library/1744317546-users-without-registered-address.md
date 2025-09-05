---
link: "[[1744296520-sql-practice-with-dummy-database-created-by-deepseek|SQL Practice Deepseek]]"
aliases:
  - Users Without Registered Address
tags:
  - Knowledge
created_date: 2025/04/10
---
# Users Without Registered Address
```SQL
SELECT *
FROM usuarios
WHERE direccion IS NULL OR direccion = ""
;
```
