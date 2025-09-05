---
id: 1743965514-manipulation-of-json-columns-in-pyspark
aliases:
  - manipulation-of-json-columns-in-pyspark
  - Manipulation Of Json Columns In Pyspark
  - Manipulation Of JSON Columns In PySpark
tags:
  - #resource
created_date: "2025-04-06"
link: "[[1743811421-procesamiento-de-datos-masivos|procesamiento-de-datos-masivos]]"
---

# Manipulation Of JSON Columns In PySpark

## Summary


## Key Ideas
- The `get_json_object` function in [[Spark]] is used extract a [[JSON]] field form a JSON string column

>[!NOTE] Syntax
>```python
>get_json_object(json_column, json_path)

>[!important] Key JSON Path Syntax
> - $: Represents the root of the JSON doc.
> - .: Accesses a child key
> - []: Accesses array elements
> - \*\: Wildcard to match all elements
> - ..: Recursive descent to search for a key

>[!example] get_json_object()
>```python
>from pyspark.sql.functions import get_json_object
df.withColumn("name", get_json_object(df.json_col, '$.name')).show()


## Related Links
- [[ ]]

## Source
[text](url) 

