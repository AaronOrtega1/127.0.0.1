---
aliases:
  - SQL Practice Deepseek
tags:
  - Quests
  - archived
link: "[[1744153475-learning-sql|Learning SQL]]"
start_date: 2025-04-10
end_date: 2025-04-10
XP:
---
# Sql Practice With Dummy Database Created By Deepseek

## Objective
Ask deepseek to create a dummy database in which I can practice imputating data, removing duplicates, and querying data.
## Tasks
- [x] Put in practice everything that I learnt in the [[1744153475-learning-sql|Learning SQL]].
## Exercises
### 1. **Datos básicos con JOIN**
- **Descripción:** Obtén el nombre del usuario, la fecha de la orden y el total de todas las órdenes que están en estado "Completada".
- **Tablas involucradas:** `usuarios`, `ordenes`
- **Conceptos a practicar:** `INNER JOIN`, `WHERE`
- **Solución:** [[1744301328-basic-data-with-join|Basic Data With Join]]

---

### 2. **Conteo de órdenes por usuario**
- **Descripción:** Cuenta cuántas órdenes ha realizado cada usuario. Incluye también a los usuarios que no han realizado ninguna orden.
- **Tablas involucradas:** `usuarios`, `ordenes`
- **Conceptos a practicar:** `LEFT JOIN`, `GROUP BY`, `COUNT`
- **Solución:** [[1744301421-count-of-orders-per-user|Count Of Orders Per User]]

---

### 3. **Órdenes con detalles de productos**
- **Descripción:** Obtén el nombre del producto, la cantidad y el precio unitario de todos los productos incluidos en las órdenes.
- **Tablas involucradas:** `detalles_orden`, `productos`
- **Conceptos a practicar:** `INNER JOIN`
- **Solución:** [[1744301487-orders-with-product-details|Orders With Product Details]]

---

### 4. **Total gastado por usuario**
- **Descripción:** Calcula el total gastado por cada usuario en todas sus órdenes.
- **Tablas involucradas:** `usuarios`, `ordenes`
- **Conceptos a practicar:** `INNER JOIN`, `GROUP BY`, `SUM`
- **Solución:** [[1744301553-total-spend-per-user|Total Spend Per User]]

---

### 5. **Productos sin stock**
- **Descripción:** Obtén una lista de productos que no tienen stock (es decir, donde el stock es `NULL` o 0).
- **Tablas involucradas:** `productos`
- **Conceptos a practicar:** `WHERE`, `IS NULL`, operadores lógicos
- **Solución:** [[1744317141-products-sin-stock|Products Without Stock]]

---

### 6. **Órdenes con productos de una categoría específica**
- **Descripción:** Obtén todas las órdenes que incluyen productos de la categoría "Electrónica".
- **Tablas involucradas:** `ordenes`, `detalles_orden`, `productos`, `categorias`
- **Conceptos a practicar:** `INNER JOIN` múltiple, `WHERE`
- **Solución:** [[1744317199-orders-with-products-of-a-specific-category|Orders With Products Of A Specific Category]]

---

### 7. **Usuarios con órdenes pendientes**
- **Descripción:** Obtén una lista de usuarios que tienen órdenes en estado "Pendiente".
- **Tablas involucradas:** `usuarios`, `ordenes`
- **Conceptos a practicar:** `INNER JOIN`, `WHERE`
- **Solución:** [[1744317261-users-with-pending-orders|Users With Pending Orders]]

---

### 8. **Promedio de gasto por orden**
- **Descripción:** Calcula el promedio del total gastado en todas las órdenes.
- **Tablas involucradas:** `ordenes`
- **Conceptos a practicar:** `AVG`
- **Solución:** [[1744317352-average-spend-per-order|Average Spend Per Order]]

---

### 9. **Productos más vendidos**
- **Descripción:** Obtén los 5 productos más vendidos (es decir, aquellos con la mayor cantidad total vendida).
- **Tablas involucradas:** `detalles_orden`, `productos`
- **Conceptos a practicar:** `INNER JOIN`, `GROUP BY`, `SUM`, `ORDER BY`, `LIMIT`
- **Solución:** [[1744317437-best-selling-products|Best Selling Products]]

---

### 10. **Categorías con más productos**
- **Descripción:** Obtén las categorías que tienen más de 2 productos asociados.
- **Tablas involucradas:** `categorias`, `productos`
- **Conceptos a practicar:** `INNER JOIN`, `GROUP BY`, `COUNT`, `HAVING`
- **Solución:** [[1744317477-category-with-more-products|Category With More Products]]

---

### 11. **Usuarios sin dirección registrada**
- **Descripción:** Obtén una lista de usuarios que no tienen dirección registrada.
- **Tablas involucradas:** `usuarios`
- **Conceptos a practicar:** `WHERE`, `IS NULL`
- **Solución:** [[1744317546-users-without-registered-address|Users Without Registered Address]]

---

### 12. **Total de ventas por categoría**
- **Descripción:** Calcula el total de ventas (en dinero) para cada categoría de productos.
- **Tablas involucradas:** `categorias`, `productos`, `detalles_orden`
- **Conceptos a practicar:** `INNER JOIN`, `GROUP BY`, `SUM`
- **Solución:** [[1744317730-total-sales-per-category|Total Sales Per Category]]

---

### 13. **Órdenes con más de un producto**
- **Descripción:** Obtén las órdenes que incluyen más de un producto.
- **Tablas involucradas:** `ordenes`, `detalles_orden`
- **Conceptos a practicar:** `INNER JOIN`, `GROUP BY`, `HAVING`, `COUNT`
- **Solución:** [[1744317771-orders-with-more-than-one-product|Orders With More Than One Product]]

---

### 14. **Productos nunca vendidos**
- **Descripción:** Obtén una lista de productos que nunca han sido incluidos en una orden.
- **Tablas involucradas:** `productos`, `detalles_orden`
- **Conceptos a practicar:** `LEFT JOIN`, `WHERE`, `IS NULL`
- **Solución:** [[1744317868-never-sold-products|Never Sold Products]]

---

### 15. **Usuarios con órdenes canceladas**
- **Descripción:** Obtén una lista de usuarios que tienen al menos una orden en estado "Cancelada".
- **Tablas involucradas:** `usuarios`, `ordenes`
- **Conceptos a practicar:** `INNER JOIN`, `WHERE`
- **Solución:** [[1744323440-users-with-cancelled-orders|Users With Cancelled Orders]]

---

### 16. **Fecha de la última orden por usuario**
- **Descripción:** Obtén la fecha de la última orden realizada por cada usuario.
- **Tablas involucradas:** `usuarios`, `ordenes`
- **Conceptos a practicar:** `INNER JOIN`, `GROUP BY`, `MAX`
- **Solución:** [[1744323497-date-of-the-last-order-per-user|Date Of The Last Order Per User]]

---

### 17. **Productos con precio superior al promedio**
- **Descripción:** Obtén una lista de productos cuyo precio es superior al precio promedio de todos los productos.
- **Tablas involucradas:** `productos`
- **Conceptos a practicar:** Subconsultas, `WHERE`, `AVG`
- **Solución:** [[1744323655-products-with-a-price-higher-than-average|Products With A Price Higher Than Average]]

---

### 18. **Total de órdenes por estado**
- **Descripción:** Cuenta cuántas órdenes hay en cada estado (Completada, Pendiente, Cancelada).
- **Tablas involucradas:** `ordenes`
- **Conceptos a practicar:** `GROUP BY`, `COUNT`
- **Solución:** [[1744323705-total-orders-per-order-state|Total Orders Per Order State]]

---

### 19. **Usuarios con más de una orden**
- **Descripción:** Obtén una lista de usuarios que han realizado más de una orden.
- **Tablas involucradas:** `usuarios`, `ordenes`
- **Conceptos a practicar:** `INNER JOIN`, `GROUP BY`, `HAVING`, `COUNT`
- **Solución:** [[1744323752-users-with-more-than-one-order|Users With More Than One Order]]

---

### 20. **Productos con stock bajo**
- **Descripción:** Obtén una lista de productos que tienen un stock menor a 50 unidades.
- **Tablas involucradas:** `productos`
- **Conceptos a practicar:** `WHERE`, operadores de comparación
- **Solución:** [[1744324094-products-with-low-stock|Products With Low Stock]]


## All Links
```dataview
list
from [[]] and !"5 - Templates"
sort file.name
```
