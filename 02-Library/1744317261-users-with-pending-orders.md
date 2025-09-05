---
link: "[[1744296520-sql-practice-with-dummy-database-created-by-deepseek|SQL Practice Deepseek]]"
aliases:
  - Users With Pending Orders
tags:
  - Knowledge
created_date: 2025/04/10
---
# Users With Pending Orders
```SQL
SELECT O.usuario_id, O.estado
FROM ordenes AS O
INNER JOIN usuarios AS U
	ON O.usuario_id = U.usuario_id
WHERE O.estado = "Pendiente"
;
```
