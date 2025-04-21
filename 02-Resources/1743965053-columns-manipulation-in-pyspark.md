---
id: 1743965053-columns-manipulation-in-pyspark
aliases:
  - columns-manipulation-in-pyspark
  - Columns Manipulation In Pyspark
tags:
  - #resource
  - #python
created_date: "2025-04-06"
link: "[[1743811421-procesamiento-de-datos-masivos|procesamiento-de-datos-masivos]]"
---

# Columns Manipulation In Pyspark

## Summary


## Key Ideas
### Adding a New Column
- Use `withColumn` to add a new column

```python
from pyspark.sql.functions import lit
df_with_lit = df.withColumn(’new_column’, lit(10))
```

- We can create new columns on existing columns.

```python
df = df.withColumn('total_cost', \
		df['price'] * df['quantity'])
```

- We can create new columns using `when`, to condition.

```python
ecommerce_df = ecommerce_df.withColumn('is_high_order', when(ecommerce_df['total_cost'] > 2500, "YES").otherwise("NO"))
```

### Dropping Columns
- Drop columns using `drop`. Usually for when we need to optimize the use of memory.

```python
df = df.drop('new_column')
```

### String operations with Columns
- Use `concat` to combine string from multiple columns.

```python
df = ecommerce_df.select("customer_first_name", "product").withColumn("label", concat(ecommerce_df["customer_first_name"], lit(" bought:"), ecommerce_df["product"]))

```

### Date operations with Columns
- Extract parts of a data using functions like `year`, `month`, `day`.

```python
df = ecommerce_df.select("product", "order_date").withColumn('order_year', year(ecommerce_df['order_date']))
```

### Type casting Columns
- Use `cast` to change a columns's data type.

```python
df = ecommerce_df.withColumn('price_int', ecommerce_df.price.cast('integer'))
```

### Renaming Columns
- use `withColumnRenamed` to rename columns.

```python
df = df.withColumnRenamed('price_int', 'price_integer')
```

## Related Links
- [[ ]]

## Source
[text](url) 

