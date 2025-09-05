---
link: "[[1755567229-power-bi-and-sql-project|Power BI and SQL Project]]"
aliases:
  - README Power BI and SQL Project
tags:
  - Knowledge
created_date: 2025-08-21
---
# 🍕 Pizzeria Sales Data Analysis

## 📌 Project Overview.
This project analyzes a fictional pizzeria’s sales data using **PostgreSQL (in Docker)** for data storage, and **Power BI** for visualization and transformation.

The goal is to provide the “client” (the pizzeria’s management team) with **actionable insights** into sales performance, customer behavior, and product trends.

The final deliverable is a **Power BI interactive dashboard** that answers the client’s key business questions and visualizes important metrics.

> ℹ️ Note: This project was inspired by a [YouTube tutorial](https://www.youtube.com/watch?v=V-s8c6jMRN0), which I used as a foundation to explore end-to-end data analysis with PostgreSQL and Power BI.
> I made several changes, including the tech stack, modifying SQL queries, adapting data handling, and customizing the dashboard design.
> The **Key Insights** were also written by me and embedded directly in the  Power BI dashboard. 

---

## 📊 Live Dashboard

**The latest version of the dashboard is always available here:**
[View Live Power BI Dashboard](https://app.powerbi.com/groups/me/reports/your-report-link/)

---

## 🚀 Tech Stack
- **Database:** PostgreSQL (running in Docker).
- **Database Management:** DBeaver.
- **Queries:** SQL.
- **Visualization:** Power BI.
- **Dataset:** Pizza sales transactional data (pizza_id, order_id, pizza_name_id, quantity, order_date, order_time, unit_price, total_price, pizza_size, pizza_category, pizza_ingredients, pizza_name).

---

## 🎯 Business Problem

The pizzeria wants to monitor **key performance indicators (KPIs)** and explore **sales trends** to make better decisions about menu offerings, pricing, and promotions.

---

## 📊 KPI Requirements

1. **Total Revenue** – sum of the total price of all pizza orders.
2. **Average Order Value** – total revenue by the total number of orders.
3. **Total Pizzas Sold** – sum of the quantities of all pizzas sold.
4. **Total Orders** – total number of orders placed.
5. **Average Pizzas per Order** – total number pizzas sold by total number of orders.

---

## 📈 Charts & Insights

1. **Daily Trend for Total Orders** – bar chart showing daily order volume.
2. **Monthly Trend for Total Orders** – line chart showing order patterns over time.
3. **Sales by Pizza Category** – pie chart distribution of sales across different pizza categories.
4. **Sales by Pizza Size** – donut chart distribution of sales across different pizza sizes.
5. **Pizzas Sold by Category** – funnel chart for total number of pizzas sold for each pizza category.
6. **Top 5 Best Sellers** – bar chart by total revenue, total quantity, and total orders.
7. **Top 5 Worst Sellers** – bar chart by total revenue, total quantity, and total orders.

---

## 🗂️ Project Structure  

```bash
SQL-PowerBI-Project
├── 01-KPIsRequirements.sql
├── 02-ChartRequirements.sql
├── data
│   └── pizza_sales.csv
├── docker-compose.yml
├── init.sql
└── README.md
```
## ⚙️ Local Setup Instructions

### Prerequisites
- Docker & Docker Compose
- DB manager of your preference (compatible with PostgreSQL).
- (Optional) Power BI Desktop

1. **Clone the repo**
```bash
git clone https://github.com/AaronOrtega1/SQL-PowerBI-Project.git
cd SQL-PowerBI-Project
```
2. **Start PostgreSQL with Docker**
```bash
docker compose up -d
```
3. **The `docker-compose.yml` file automatically creates the Database, creates the table and loads the data**
4. **Connect with or database manager of preference to the PostgreSQL DB using the information in the `docker-compose.yml` file.** 

--- 

## 📷 Screenshots

### KPI Results (SQL Queries)

### Power BI Dashboard
![[1755794268-readme-power-bi-and-sql-project-1.webp]]
![[1755794268-readme-power-bi-and-sql-project.webp]]

---

## 🔮 Future Improvements

- Add **predictive modeling** (e.g., forecast future sales)
- Integrate with a **real-time data pipeline** (Kafka + PostgreSQL + Power BI streaming)

---

## 👤 Author

- [Francisco Aarón Ortega Anguiano]() – Systems Engineering Student

