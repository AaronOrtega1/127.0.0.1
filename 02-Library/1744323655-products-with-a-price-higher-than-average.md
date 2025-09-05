---
link: "[[1744296520-sql-practice-with-dummy-database-created-by-deepseek|SQL Practice Deepseek]]"
aliases:
  - Products With A Price Higher Than Average
tags:
  - Knowledge
created_date: 2025/04/10
---
# Products With A Price Higher Than Average
```SQL
SELECT *
FROM productos
WHERE precio > (
	SELECT AVG(precio)
	FROM productos
)
;
```
