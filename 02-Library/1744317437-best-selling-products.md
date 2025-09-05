---
link: "[[1744296520-sql-practice-with-dummy-database-created-by-deepseek|SQL Practice Deepseek]]"
aliases:
  - Best Selling Products
tags:
  - Knowledge
created_date: 2025/04/10
---
# Best Selling Products
```SQL
SELECT P.nombre_producto, SUM(DO.cantidad) AS suma_cantidad
FROM detalles_orden AS DO
INNER JOIN productos AS P
	ON DO.producto_id = P.producto_id
GROUP BY P.producto_id
ORDER BY suma_cantidad DESC
LIMIT 5
;
```
