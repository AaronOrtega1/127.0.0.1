---
link: "[[1744296520-sql-practice-with-dummy-database-created-by-deepseek|SQL Practice Deepseek]]"
aliases:
  - Total Spend Per User
tags:
  - resource
created_date: 2025/04/10
---
# Total Spend Per User
```SQL
SELECT U.usuario_id, U.nombre, SUM(O.total) AS total_gastado
FROM usuarios AS U
INNER JOIN ordenes AS O
	ON U.usuario_id = O.usuario_id
GROUP BY U.usuario_id
;
```
