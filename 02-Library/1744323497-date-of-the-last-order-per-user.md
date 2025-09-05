---
link: "[[1744296520-sql-practice-with-dummy-database-created-by-deepseek|SQL Practice Deepseek]]"
aliases:
  - Date Of The Last Order Per User
tags:
  - Knowledge
created_date: 2025/04/10
---
# Date Of The Last Order Per User
```SQL
SELECT U.usuario_id, MAX(O.fecha_orden) AS ultima_fecha_orden
FROM usuarios AS U
INNER JOIN ordenes AS O
	ON U.usuario_id = O.usuario_id
GROUP BY U.usuario_id
;
```
