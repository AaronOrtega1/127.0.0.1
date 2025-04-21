---
link: "[[1744296520-sql-practice-with-dummy-database-created-by-deepseek|SQL Practice Deepseek]]"
aliases:
  - Count Of Orders Per User
tags:
  - resource
created_date: 2025/04/10
---
# Count Of Orders Per User
```SQL
SELECT U.nombre, COUNT(O.orden_id) AS total_ordenes
FROM usuarios AS U
LEFT JOIN ordenes AS O
	ON O.usuario_id = U.usuario_id
GROUP BY U.usuario_id
;
```

- Se usa `usuarios` en el `FROM` para que cuando se haga el `LEFT JOIN` con `ordenes` se tomaran todos los usuarios aunque no tengan órdenes.
- Usar `U.usuario_id` para el `GROUP BY` asegura que todos los usuarios aparezcan.
- Usar `O.orden_id` para el `COUNT` asegura que solo cuente las ordenes reales y no las que tengan NULL generadas por el `LEFT JOIN`.
