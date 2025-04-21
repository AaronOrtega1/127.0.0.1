---
link: "[[1744296520-sql-practice-with-dummy-database-created-by-deepseek|SQL Practice Deepseek]]"
aliases:
  - Users With Cancelled Orders
tags:
  - resource
created_date: 2025/04/10
---
# Users With Cancelled Orders
```SQL
SELECT U.usuario_id, U.nombre
FROM ordenes AS O
INNER JOIN usuarios AS U
	ON O.usuario_id = U.usuario_id
WHERE O.estado = "Cancelada"
;
```
