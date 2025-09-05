---
link: "[[1744296520-sql-practice-with-dummy-database-created-by-deepseek|SQL Practice Deepseek]]"
aliases:
  - Total Sales Per Category
tags:
  - Knowledge
created_date: 2025/04/10
---
# Total Sales Per Category
```SQL
SELECT C.nombre_categoria, ROUND(SUM(DO.precio_unitario * DO.precio_unitario), 2) AS total_por_categoria
FROM categorias AS C
INNER JOIN productos AS P
	ON C.categoria_id = P.categoria_id
INNER JOIN detalles_orden AS DO
	ON P.producto_id = DO.producto_id
GROUP BY C.categoria_id
ORDER BY total_por_categoria DESC
;
```
