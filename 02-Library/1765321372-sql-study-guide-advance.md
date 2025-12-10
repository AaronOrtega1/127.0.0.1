---
link: "[[1743802452-programming|Programming]]"
aliases: 
  - "SQL Study Guide Advance"
tags:
  - Knowledge
  - SQL
created_date:
  "[[2025-12-09]]"
---
# SQL Study Guide Advance
## [[1744207593-joins-in-sql|Difference between an INNER JOIN, LEFT JOIN and RIGHT JOIN]]
### INNER JOIN
- Devuelve solo las filas que tienen coincidencias en AMBAS tablas
- Usarlo cuando necesitas información que DEBE existir en ambas tablas.

### LEFT JOIN (LEFT OUTER JOIN)
- Devuelve TODAS las filas de la tabla izquierda y las coincidencias de la derecha. Si no hay coincidencia, muestra NULL.
- Usarlo en listado de todos los clientes, incluso cuando no han comprado y para identificar registros sin relación.

### RIGHT JOIN (RIGHT OUTER JOIN)
- deveuelve TODAS las filas de la taba derecha y las coincidencias de la izquierda. Si no hay coincidencia, muestra NULL.
- Es menos cómun usarla, pero útil para auditorías de datos huérfanos.

```
INNER JOIN: Solo intersección (A ∩ B)
LEFT JOIN:  Toda A + intersección (A ∪ (A ∩ B))
RIGHT JOIN: Toda B + intersección ((A ∩ B) ∪ B)
```

## [[1759342844-stored-procedure-sql|Stored Procedure SQL]]
  - Son conjuntos de instrucciones SQL guardados en la base de datos que se pueden ejecutar múltiples veces.

### Ventajas principales:
- **Seguridad:** Limitan acceso directo a tablas.
- **Rendimiento:** Se compilan una vez y se reutilizan.
- **Mantenibilidad:** Lógica centralizada.
- **Reducción de tráfico:** Envías un comando en vez de múltiples queries.
- **Reutilización:** El mismo procedimiento se usa desde diferentes aplicaciones.

```SQL
-- Crear procedimiento simple
CREATE PROCEDURE sp_ObtenerClientePorID
    @ClienteID INT
AS
BEGIN
    SELECT * FROM Clientes WHERE ClienteID = @ClienteID;
END;

-- Ejecutar
EXEC sp_ObtenerClientePorID @ClienteID = 1;
```

## Optimización de Query
- Usar SELECT específico (no SELECT *)
- Filtrar con WHERE antes de JOIN

```SQL
-- INEFICIENTE
SELECT V.*, C.Nombre
FROM Ventas V
JOIN Clientes C ON V.ClienteID = C.ClienteID
WHERE V.Fecha > '2024-01-01';

-- MEJOR (filtrar primero)
SELECT V.*, C.Nombre
FROM (SELECT * FROM Ventas WHERE Fecha > '2024-01-01') V
JOIN Clientes C ON V.ClienteID = C.ClienteID;
```

- Usar índices apropiados

```SQL
-- Crear índice en columnas frecuentemente filtradas
CREATE INDEX IX_Ventas_Fecha ON Ventas(Fecha);
CREATE INDEX IX_Ventas_ClienteID ON Ventas(ClienteID);
```

- Evitar funciones en WHERE

```SQL
-- LENTO (la función evita usar índices)
SELECT * FROM Clientes WHERE YEAR(FechaRegistro) = 2024;

-- RÁPIDO
SELECT * FROM Clientes WHERE FechaRegistro >= '2024-01-01' AND FechaRegistro < '2025-01-01';
```

- Usar EXISTS en lugar de IN para subqueries

```SQL
-- LENTO
SELECT * FROM Clientes 
WHERE ClienteID IN (SELECT ClienteID FROM Ventas WHERE Monto > 1000);

-- RÁPIDO
SELECT * FROM Clientes C
WHERE EXISTS (SELECT 1 FROM Ventas V WHERE V.ClienteID = C.ClienteID AND V.Monto > 1000);
```

- Analizar el plan de ejecución

```SQL
-- Activar plan de ejecución en SQL Server Management Studio
SET STATISTICS IO ON;
SET STATISTICS TIME ON;

-- Tu consulta aquí
SELECT * FROM Ventas WHERE ClienteID = 1;

-- Revisar resultados en la pestaña "Execution Plan"
```

## Índices en SQL
- Estructura de datos que mejora la velocidad de recuperación de datos (como el índice de un libro)
- Tipos principales:
  - **Clustered Index (Índice agrupado)**
    - Solo puede haber UNO por tabla.
    - Ordena físicamente los datos.
    - Generalmente es la PK.
    ```SQL
    CREATE CLUSTERED INDEX IX_Ventas_VentaID ON Ventas(VentaID);
    ```
  - **Non-Clustered Index (Índice no agrupado)**
    - Puede haber múltiples por tabla.
    - Crea una estructura separada con punteros.
    ```SQL
    CREATE NONCLUSTERED INDEX IX_Ventas_Fecha ON Ventas(Fecha);
    ```
- ¿Cuándo crear un índice?
  - Las columnas son frecuentemente usadas en WHERE, JOIN, ORDER BY.
  - La tabla es grande (miles de registros).
  - La columna tiene alta cardinalidad (muchos valores únicos).
  - Las lecturas son más frecuentes que las escrituras.
- ¿Cuándo no crear un índice?
  - La tabla es pequeña.
  - La columna se actualiza frecuentemente.
  - La columna tiene baja cardinalidad (columna de género solo con M/F).

## DELETE vs TRUNCATE

| Característica | DELETE | TRUNCATE |
| --------------- | --------------- | --------------- |
| Tipo | DML (Data Manipulation) | DDL (Data Definition) |
| WHERE | Puede usar WHERE | No puede usar WHERE |
| Velocidad | Lento (fila por fila) | Rápido (toda la tabl) |
| Rollback | Se puede revertir | Difícil de revertir |
| Triggers | Activa triggers | No activa triggers |
| Identity | Mantiene el contador | Reinicia el contador |
| Log | Registra cada fila | Registro mínimo |
| Permisos | DELETE permission | ALTER permission |

- Usa DELETE cuando:
  - Necesitas eliminar filas específicas con WHERE.
  - Necesitas que se ejecuten triggers.
  - Debes mantener la secuencia de identity.
  - La tabla tiene foreign keys.
- Usa TRUNCATE cuando:
  - Quieres eliminar TODO el contenido.
  - Necesitas velocidad (tablas grandes).
  - Quieres reiniciar el contador identity.
  - No hay restricciones de foreign key.

## TRIGGERS (DISPARADORES)
- Procedimientos que se ejecutan automáticamente cuando ocurre un evento (INSERT, UPDATE, DELETE) en una tabla.
- Tipos de triggers:
  - **AFTER/FOR:** se ejecuta después del evento.
  - **INSTED OF:** se ejecuta en lugar del evento.
- Cuándo usar triggers:
  - Auditorías automática de cambios.
  - Validaciones complejas de negocio.
  - Sincronización de tablas relacionadas.
  - Cálculos automáticos.
  - Prevención de acciones no permitidas.
- Cuándo NO usar triggers:
  - Lógica que puede estar en la aplicación.
  - Operaciones muy complejas (afecta rendimiento).
  - Si necesitas reportar errores detallados al usuario.
  - Para reemplazar contraints simples.

## [[1765328107-sql-query-writing-and-execution-order|SQL Query Writing and Execution Order]]

## Related Links
- [[]]

## Source
[text]()

