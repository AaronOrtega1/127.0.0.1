---
link: "[[1744153475-learning-sql|Learning SQL]]"
aliases:
  - Sql Dealing With Null Or Blank Values
tags:
  - Knowledge
created_date: 2025/04/09
---
# Sql Dealing With Null Or Blank Values

## Summary

## Key Ideas
- This is a crucial step, because here we are going to **populate or delete** rows.
- First we have to check for `NULL` or blank values.

>[!example] How to check for NULL or blank values
>```SQL
>SELECT *
FROM layoffs_staging2
WHERE industry IS NULL
OR industry = ""
;

>[!example] Turn blank values into NULLs
> ```SQL
> UPDATE layoffs_staging2
SET industry = NULL
WHERE industry = ""
;

- Once we do this we will have converted all blank values into NULLs, and we can continue with the **population**.

>[!danger] REMEMBER TO FIRST SELECT THE DATA TO CHECK THAT YOU ARE GOING TO UPDATE EXACTLY WHAT YOU WANT.

- We are going to make a self join on the company name where it has an null value and another occurrence that isn't null.

>[!example] Self join to update the value of industry
>```SQL
>UPDATE layoffs_staging2 t1
>JOIN layoffs_staging2 t2
>	ON t1.company = t2.company
>SET t1.industry = t2.industry
>WHERE t1.industry IS NULL
>AND t2.industry IS NOT NULL
>;

- Other very importan part is the **delete** of rows that are null and that we **can't populate**.

>[!example] Delete rows that bring no value to our data.
>```SQL
>DELETE
FROM layoffs_staging2
WHERE total_laid_off IS NULL
AND percentage_laid_off IS NULL
;

- This will delete all rows that have `total_laid_off` and `percentage_laid_off` columns as null, in this case with the data provided to us we cannot populate this data.
## Related Links
## Source
- [Learn SQL Beginner to Advanced in Under 4 Hours](https://www.youtube.com/watch?v=OT1RErkfLNQ&t=9991s)