---
link: "[[1755567229-power-bi-and-sql-project|Power BI and SQL Project]]"
aliases: 
  - KPIs Requirements
tags:
  - resource
created_date:
  "2025-08-19"
---
# KPIs Requirements
1. **Total Revenue**
```SQL
SELECT SUM(ps.total_price) AS total_revenue FROM pizza_sales ps;
```
![[1755645822-readme-power-bi-and-sql-project.webp]]
2. **Average Order Value**
```SQL
SELECT (SUM(ps.total_price) / COUNT(DISTINCT ps.order_id)) AS avg_order_value FROM pizza_sales ps;
```
![[1755645822-readme-power-bi-and-sql-project-1.webp]]
3. **Total Pizzas Sold**
```SQL
SELECT SUM(ps.quantity) AS total_pizzAS_sold FROM pizza_sales ps;
```
![[1755645822-readme-power-bi-and-sql-project-2.webp]]
4. **Total Orders**
```SQL
SELECT COUNT(DISTINCT ps.order_id) AS total_orders FROM pizza_sales ps;
```
![[1755645822-readme-power-bi-and-sql-project-3.webp]]
5. **Average Pizzas Per Order**
```SQL
SELECT CAST(SUM(ps.quantity) AS DECIMAL(10,2)) / COUNT(DISTINCT ps.order_id) AS avg_pizzas_per_order FROM pizza_sales ps;
SELECT CAST(SUM(ps.quantity) AS DECIMAL(10,2)) / CAST(COUNT(DISTINCT ps.order_id) AS DECIMAL(10,2)) AS avg_pizzas_per_order FROM pizza_sales ps;
```
![[1755645822-readme-power-bi-and-sql-project-4.webp]]

