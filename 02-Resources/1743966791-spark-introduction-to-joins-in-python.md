---
aliases:
  - spark-introduction-to-joins-in-python
  - Spark Introduction To Joins In Python
tags:
  - #resource
created_date: "2025-04-06"
link: "[[1743811421-procesamiento-de-datos-masivos|Procesamiento De Datos Masivos]]"
---

# Spark Introduction To Joins In Python

## Summary


## Key Ideas
- Like in [[SQL]] a join is used to combine two data frames based on a condition.

## Left and Right Joins
- The most common types of joins are:
	- Inner Join
	- Left Join (Left Outer Join)
	- Right Join (Right Outer Join)

### Left Join
- Return all record from the left data frame and the matched records from the right data frame. If no match is found, it will return NULL for the right data frame.

>[!example] Code
>```python
>book_data = [
>	("Scala", 400, 1),
>	("Spark", 500, 2),
>	("Kafka", 300, 3),
>	("Java", 350, 5)
>]
>df_books = spark.createDataFrame(book_data, ["book_name", "cost", "writer_id"])
>writer_data = [
>	("Martin", 1),
>	("Zaharia", 2),
>	("Neha", 3),
>	("James", 4)
>]
>df_writers = spark.createDataFrame(writer_data, ["writer_name", "writer_id"])
>result = df_books.join(df_writers, 
>		 df_books["writer_id"] == df_writers["writer_id"], 
>		 "left")

![[1741810722-spark-introduction-to-joins-1.webp]]

### Right Join
- Returns all records from the right data frame and the matched records from the left data frame. If no match is found, it will return NULL for the left data frame.

>[!example] Code
>```python
>result = df_books.join(df_writers, 
>		 df_books["writer_id"] == df_writers["writer_id"],
>		 "right")
>result.show()

![[1741810722-spark-introduction-to-joins-3.webp]]

### Handling Null Values in Joins
- In both left and right joins, unmatched records from the other data frame are filled with NULL values. These can be handled using `fillna()`

>[!example] Code
>```python
>result.fillna({"writer_name": "Uknown"})
>

## Related Links
- [[ ]]

## Source
[text](url) 

