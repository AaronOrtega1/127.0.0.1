---
link: "[[1744296520-sql-practice-with-dummy-database-created-by-deepseek|SQL Practice Deepseek]]"
aliases:
  - Orders With More Than One Product
tags:
  - Knowledge
created_date: 2025/04/10
---
# Orders With More Than One Product
```SQL
SELECT o.orden_id, COUNT(d.producto_id) AS total_productos
FROM ordenes o
INNER JOIN detalles_orden d ON o.orden_id = d.orden_id
GROUP BY o.orden_id
HAVING total_productos > 1
;
```
