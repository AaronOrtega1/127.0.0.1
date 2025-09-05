---
link: "[[1744296520-sql-practice-with-dummy-database-created-by-deepseek|SQL Practice Deepseek]]"
aliases:
  - Users With More Than One Order
tags:
  - Knowledge
created_date: 2025/04/10
---
# Users With More Than One Order
```SQL
SELECT U.usuario_id, COUNT(O.orden_id) AS num_ordenes
FROM usuarios AS U
INNER JOIN ordenes AS O
	ON U.usuario_id = O.usuario_id
GROUP BY U.usuario_id
HAVING num_ordenes > 1
;
```
