---
link: "[[1744140665-data-analysis-internship|Data Analysis Internship]]"
aliases:
  - California House Price Prediction
tags:
  - Quests
  - archived
  - python
  - data-analysis
start_date: 2025-04-24
end_date: 2025-04-29
---
# California House Price Prediction
## Objective
Predict prices using linear regression
## Tasks
#### **🔧 Setup**
- [x] Spin up Jupyter container with Docker Compose
- [x] Add PostgreSQL service to `docker-compose.yml`
- [x] Install required Python packages (`pandas`, `scikit-learn`, `sqlalchemy`, etc.)
#### **📥 Data Preparation**
- [x] Download the California Housing Dataset (CSV)
- [x] Design PostgreSQL schema for raw data
- [x] Import raw CSV data into PostgreSQL
#### **🧹 Data Cleaning**
- [x] Handle missing values (e.g., impute `total_bedrooms`)
- [ ] Remove or flag outliers (e.g., unrealistic prices)
#### **⚙️ Feature Engineering**
- [ ] Create derived features in SQL (e.g., `rooms_per_household`)
- [ ] Simplify categorical variables (e.g., `ocean_proximity` groups)
#### **📊 EDA & Visualization**
- [ ] Analyze distributions (histograms, boxplots)
- [ ] Plot correlations (e.g., `median_income` vs. `price`)
- [ ] Geospatial visualization (latitude/longitude maps)
#### **🤖 Modeling**
- [ ] Split data into train/test sets
- [ ] Train baseline model (Linear Regression)
- [ ] Compare with advanced models (Random Forest, etc.)
- [ ] Evaluate metrics (MSE, R²)
#### **🗃️ SQL Integration**
- [ ] Store cleaned/processed data in PostgreSQL
- [ ] Save model predictions back to the database
#### **🚀 Deployment (Optional)**
- [ ] Build a Streamlit app to query predictions
- [ ] Dockerize the app alongside Jupyter/PostgreSQL
#### **📝 Documentation**
- [ ] Document PostgreSQL schema design
- [ ] Summarize key insights and challenges
## Notes
```dataview
list
from "04-Zettelkasten" and [[]]
```
## Resources
```dataview
list
from "02-Resources" and [[]]
```

### Links
[PostgresSQL connection using SQLAlchemy](https://docs.sqlalchemy.org/en/20/core/engines.html)
[PostgreSQL Query To View with SQLAlchemy](https://www.geeksforgeeks.org/how-can-i-query-a-postgresql-view-with-sqlalchemy/)