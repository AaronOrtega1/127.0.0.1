---
link: "[[1755567229-power-bi-and-sql-project|Power BI and SQL Project]]"
aliases:
  - Chart Requirement Power Bi and SQL project
tags:
  - resource
  - PostgreSQL
created_date: 2025-08-20
---
# Chart Requirement Power Bi and SQL project
1. **Daily Trend for Total Orders:** ^Daily
```SQL
SELECT
	TO_CHAR(ps.order_date, 'Day') as order_day,
	COUNT(DISTINCT ps.order_id) as total_orders
FROM pizza_sales AS ps
GROUP BY TO_CHAR(ps.order_date, 'Day'), EXTRACT(DOW FROM ps.order_date)
ORDER BY EXTRACT(DOW FROM ps.order_date);
```
![[1755728488-chart-requirement-power-bi-and-sql-project.webp]]
2. **Monthly Trend for Total Orders:**
```SQL
SELECT
	TO_CHAR(ps.order_date, 'Month') as order_month,
	COUNT(DISTINCT ps.order_id) as total_orders
FROM pizza_sales AS ps
GROUP BY TO_CHAR(ps.order_date, 'Month'), EXTRACT(MONTH FROM ps.order_date)
ORDER BY EXTRACT(MONTH FROM ps.order_date);
```
![[1755728488-chart-requirement-power-bi-and-sql-project-1.webp]]
3. **Percentage of Sales by Pizza Category:**
```SQL
SELECT
	ps.pizza_category,
	SUM(ps.total_price) AS total_sales,
	CAST(SUM(ps.total_price)*100/(SELECT SUM(total_price) FROM pizza_sales WHERE EXTRACT(MONTH FROM order_date) = 1) AS DECIMAL(10,2)) AS pct
FROM pizza_sales AS ps
WHERE EXTRACT(MONTH FROM ps.order_date) = 1
GROUP BY ps.pizza_category;
```
**NOTE:** The `WHERE` indicates that it returns only de percentage of sales from the first month (January), it has to be in both queries for the filter to work properly. (This filter can be applied to the queries below)
![[1755728488-chart-requirement-power-bi-and-sql-project-2.webp]]
4. **Percentage of Sales by Pizza Size:**
```SQL
SELECT
	ps.pizza_size,
	SUM(ps.total_price) AS total_sales,
	CAST(SUM(ps.total_price)*100/(SELECT SUM(total_price) FROM pizza_sales) AS DECIMAL(10,2)) AS pct
FROM pizza_sales AS ps
GROUP BY ps.pizza_size;
```
![[1755728488-chart-requirement-power-bi-and-sql-project-3.webp]]
5. **Total Pizzas Sold by Pizza Category:**
```SQL
SELECT
	ps.pizza_category,
	SUM(ps.quantity) AS sold_pizzas
FROM pizza_sales AS ps
GROUP BY ps.pizza_category;
```
![[1755728488-chart-requirement-power-bi-and-sql-project-4.webp]]
6. **Top 5 Best Sellers by Revenue, Total Quantity and Total Orders:**
```SQL
SELECT
	ps.pizza_name,
	SUM(ps.total_price) AS revenue
FROM pizza_sales AS ps
GROUP BY ps.pizza_name
ORDER BY revenue DESC
LIMIT 5;
```
![[1755728488-chart-requirement-power-bi-and-sql-project-5.webp]]
7. **Top 5 Worst Sellers by Revenue, Total Quantity and Total Orders:**
```SQL
SELECT
	ps.pizza_name,
	SUM(ps.total_price) AS revenue
FROM pizza_sales AS ps
GROUP BY ps.pizza_name
ORDER BY revenue
LIMIT 5;
```
![[1755728488-chart-requirement-power-bi-and-sql-project-6.webp]]
