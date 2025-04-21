---
link: "[[1744296520-sql-practice-with-dummy-database-created-by-deepseek|SQL Practice Deepseek]]"
aliases:
  - Products Sin Stock
tags:
  - resource
created_date: 2025/04/10
---
# Products Sin Stock
```SQL
SELECT P.producto_id, P.nombre_producto
FROM productos AS P
WHERE P.stock IS NULL
;
```
