---
link: "[[1744296520-sql-practice-with-dummy-database-created-by-deepseek|SQL Practice Deepseek]]"
aliases: 
  - Basic Data With Join
tags:
  - resource
created_date:
  "2025/04/10"
---
# Basic Data With Join

```SQL
SELECT U.nombre, O.fecha_orden, O.total
FROM ordenes AS O
INNER JOIN usuarios AS U
	ON O.usuario_id = U.usuario_id
WHERE O.estado = "Completada"
;
```

- Se selección ordenes en el `FROM` para que el filtrado con `WHERE` seleccione únicamente las que tengan el estado que queremos, optimizando la query.
