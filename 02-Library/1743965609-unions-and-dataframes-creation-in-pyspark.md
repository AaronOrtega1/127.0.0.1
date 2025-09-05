---
id: 1743965609-unions-and-dataframes-creation-in-pyspark
aliases:
  - unions-and-dataframes-creation-in-pyspark
  - Unions And Dataframes Creation In Pyspark
tags:
  - #resource
  - #python
created_date: "2025-04-06"
link: "[[1743811421-procesamiento-de-datos-masivos|procesamiento-de-datos-masivos]]"
---

# Unions And Dataframes Creation In Pyspark

## Summary


## Key Ideas
- A union combines two data frames into one, it requires for each data frame to have the same number of columns and the same types.

>[!example] Union Syntax
>```python
>df_a = spark.createDataFrame([(1, "Alice"), (2, "Bob")], ["id", "name"])
>df_b = spark.createDataFrame([(3, "Charlie"), (4, "David")], ["id", "name"])
>result = df_a.union(df_b)
>```

## Union without Duplicates
- Use `union()` followed by `distinct()`.

>[!example] Union Syntax
>```python
>df_a = spark.createDataFrame([(1, "Alice"), (2, "Bob")], ["id", "name"])
>df_b = spark.createDataFrame([(1, "Alice"), (4, "David")], ["id", "name"])
>result = df_a.union(df_b).distinct()
>```

## Union with mismatched schema
- You can use `unionByName()` method in PySpark, it allows you to combine two data frames by matching column names, even if the columns are in different order.

>[!example] unionByName Example
>```python
>df_a = spark.createDataFrame([(1, "Alice")], ["id", "name"])
>df_b = spark.createDataFrame([("Bob", 2)], ["name", "id"])
>result = df_a.unionByName(df_b)
>```

## Union by Column Name
- You can use `allowMissingColumns=True` to allow union of data frames with missing columns.

>[!example] union_by_name_missing_columns.py Example
>```python
>df_a = spark.createDataFrame([(1, "Alice", "NY")], ["id", "name", "city"])
>df_b = spark.createDataFrame([(2, "Bob")], ["id", "name"])
>result = df_a.unionByName(df_b, allowMissingColumns=True)
>```

## Related Links
- [[ ]]

## Source
[text](url) 

