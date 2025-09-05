---
link: "[[1744296520-sql-practice-with-dummy-database-created-by-deepseek|SQL Practice Deepseek]]"
aliases:
  - Orders With Products Of A Specific Category
tags:
  - Knowledge
created_date: 2025/04/10
---
# Orders With Products Of A Specific Category
```SQL
SELECT DISTINCT o.orden_id, o.fecha_orden, o.total, o.estado
FROM ordenes o
INNER JOIN detalles_orden d 
	ON o.orden_id = d.orden_id
INNER JOIN productosórdenes-con-productos-de-una-categoría-específica p 
	ON d.producto_id = p.producto_id
INNER JOIN categorias c 
	ON p.categoria_id = c.categoria_id
WHERE c.nombre_categoria = 'Electrónica'
;
```
