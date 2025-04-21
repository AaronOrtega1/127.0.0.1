---
link: "[[1744296520-sql-practice-with-dummy-database-created-by-deepseek|SQL Practice Deepseek]]"
aliases:
  - Category With More Products
tags:
  - resource
created_date: 2025/04/10
---
# Category With More Products
```SQL
SELECT C.nombre_categoria, COUNT(P.producto_id) AS count_prods
FROM categorias AS C
INNER JOIN productos AS P
	ON C.categoria_id = P.categoria_id
GROUP BY P.categoria_id
HAVING count_prods > 1
;
```
