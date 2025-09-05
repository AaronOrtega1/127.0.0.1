---
link: "[[]]"
aliases: 
  - Orders With Product Details
tags:
  - Knowledge
created_date:
  "2025/04/10"
---
# Orders With Product Details
```SQL
SELECT DO.detalle_id ,P.nombre_producto, DO.cantidad, DO.precio_unitario, (DO.cantidad * DO.precio_unitario) AS precio_total
FROM detalles_orden AS DO
INNER JOIN productos AS P
	ON DO.producto_id = P.producto_id
ORDER BY precio_total DESC
;
```

- Sacamos de la tabla `detalles_orden` todo lo que tenga coincidencia con la tabla `productos` y hacemos un `INNER_JOIN` para tener solo lo que coincida en ambas tablas.
- Agregamos la columna `precio_total` porque en otro caso podría ser información importante para el cliente saber cual es su orden más valiosa y ordenamos de manera descendiente.
