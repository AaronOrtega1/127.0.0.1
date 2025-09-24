---
link: "[[1743802452-programming|Programming]]"
aliases:
  - Uber Analytics Chronicles 2024
tags:
  - Quests
  - active
  - DataAnalysis
accepted: 2025-09-10
deadline: 2025-09-10
XP: 20
---
# Quest: Uber Analytics Chronicles 2024
## Objective
Preprocess the [Uber](https://www.kaggle.com/datasets/yashdevladdha/uber-ride-analytics-dashboard) kaggle dataset with [[1757569859-python|Python]], to then upload the processed dataset into a staging SQL table in a [[1754522252-postgresql|PostgreSQL]] to later transform it to a start schema to make it easier to make a [[1755635883-power-bi|Power BI]] dashboard to get different insights into the dataset.

## Tasks
- [x] Create Docker compose with PostgreSQL DB. (XP +5)
- [x] Do a ETL job with python.
	- [x] Preprocess the data. (XP +5)
	- [x] Create staging table in PostgreSQL DB. (XP +5)
	- [x] Populate PostgreSQL table with data analysis ready data. (XP +5)
- [ ] Create star schema from staging table.
	- [ ] Define fact and dimension tables. (XP +5)
	- [ ] Create each table in SQL. (XP +5)
	- [ ] Populate each new table from staging. (XP +5)
- [ ] Define what information is important to display to client (XP +20)
	- [ ] 
- [ ] Create Power BI dashboard. (XP +25)
- [ ] Finish README. (XP +5)
- [ ] Add it to my CV. (XP +5)

## Forged Relics
```dataview
list
from "04-Forge" and [[]]
```
## Knowledge and Tomes
```dataview
list
from "02-Library" and [[]]
```

## Important Sources of Information
- [Using Python Environment Variables with Python Dotenv - GeeksforGeeks](https://www.geeksforgeeks.org/python/using-python-environment-variables-with-python-dotenv/)
- [Connecting PostgreSQL with SQLAlchemy in Python - GeeksforGeeks](https://www.geeksforgeeks.org/python/connecting-postgresql-with-sqlalchemy-in-python/)
- [Uber Data Analytics Dashboard](https://www.kaggle.com/datasets/yashdevladdha/uber-ride-analytics-dashboard)
- [pandas.DataFrame.to_sql — pandas 2.3.2 documentation](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.to_sql.html)