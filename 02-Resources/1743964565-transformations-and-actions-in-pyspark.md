---
aliases:
  - transformations-and-actions-in-pyspark
  - Transformations And Actions In PySpark
tags:
  - #resource
created_date: "2025-04-06"
link: "[[1743811421-procesamiento-de-datos-masivos|Procesamiento De Datos Masivos]]"
---

# Transformations And Actions In PySpark

## Summary


## Key Ideas
### Transformations
- Are **lazy operations** that define a new DF or RDD but **do not execute immediately.**
	- **Lazy evaluation**: no computation happens until an action is triggered.
	- **Immutable**: produce a new DF or RDD.
	- **Examples**: map, filter, select, groupBy, join, etc.
### Actions
- Are operations that trigger the execution of transformations and return results to the driver program or write data to external storage.
	- **Eager evaluation**: Triggers computation immediately.
	- **Return results**: Return values to the driver program or write to storage.
	- **Examples:** count, collect, show, save, etc.
### Efficient Data Processing
- Since transformations are **lazily evaluated**, Spark only processes data when an action is called.

>[!example] Unoptimized Spark Application
>```python
># 1st transformation
>filtered_df = df.filter(col("Age") > 30)
># Actions
>count = filtered_df.count()
>filtered_df.show()
># 2nd transformation
>oldest_person = filtered_df \
>                .orderBy(col("Age").desc()) \
>                .first()
>```


>[!example] Optimized Spark Application
>```python
># Pipeline of transformations
># 1st transformation
>filtered_df = df.filter(col("Age") > 30)
># 2nd Transformation.
>sorted_df = filtered_df \
>            .orderBy(col("Age").desc()) \
>            .first()
># Action: Collect the result and print it
>result = sorted_df.show()
>```

## Memory Management Optimization
>[!example] Unoptimized
>```python
># Select all columns
>selected_df = df.select("Name", "Age", "Salary")
># 2. Filter out people under 30  
>filtered_df = selected_df \  
>              .filter(col("Age") > 30)  
># 3. Calculate the average salary
>avg_salary = filtered_df \  
>             .agg(avg(col("Salary"))) \  
>             .first()[0]
>```

>[!example] Optimized
>```python
># Optimized pipeline (memory-efficient)  
># 1. Filter out people under 30  
>filtered_df = df.filter(col("Age") > 30)  
># 2. Select only salary column  
>salary_df = filtered_df.select("Salary")  
># 3. Calculate the average salary  
>avg_salary = salary_df \  
>             .agg(avg(col("Salary"))) \  
>             .first()[0]
>```


## Related Links
- [[ ]]

## Source
[text](url) 

