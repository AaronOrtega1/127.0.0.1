---
link: "[[1744153475-learning-sql|Learning SQL]]"
aliases:
  - Sql Data Cleaning
tags:
  - resource
created_date: 2025/04/09
---
# Sql Data Cleaning

## Summary


## Key Ideas
## Good practice:
>[!danger] In case we mess up.
> A good practice is to make a copy of the raw data to work with in another table.
> 

- We start by creating a new table that has the same columns as our raw table.

>[!example] Create a table with the same schema than other
>```SQL
CREATE TABLE layoffs_staging
LIKE layoffs;

- Then we copy the data from the raw data table to our new table.

>[!example] Insert the values from a table to another
>```SQL
INSERT layoffs_staging
SELECT *
FROM layoffs;
## Related Links
1. [[1744256499-sql-remove-duplicates|Sql Remove Duplicates]]
2. [[1744256573-sql-standardize-data|Sql Standardize Data]]
3. [[1744256779-sql-dealing-with-null-or-blank-values|Sql Dealing With Null Or Blank Values]]
4. [[1744256840-sql-remove-columns|Sql Remove Columns]]
## Source
- [Learn SQL Beginner to Advanced in Under 4 Hours](https://www.youtube.com/watch?v=OT1RErkfLNQ&t=9991s)