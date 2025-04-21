---
link: "[[]]"
aliases: 
  - Never Sold Products
tags:
  - resource
created_date:
  "2025/04/10"
---
# Never Sold Products
```SQL
SELECT P.nombre_producto
FROM productos AS P
LEFT JOIN detalles_orden AS DO
	ON P.producto_id = DO.producto_id
WHERE DO.detalle_id IS NULL
;
```

- Se usa `detalle_id` en el `WHERE` debido a que como es la llave primaria de la tabla de `detalles_orden` es más explícito porque checas directamente si existe un registro en `detalles_orden`, también es más claro porque revisamos la llave primaria y es más robusto.