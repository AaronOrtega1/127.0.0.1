---
link: "[[1744153475-learning-sql|Learning SQL]]"
aliases:
  - Sql Standardize Data
tags:
  - resource
created_date: 2025/04/09
---
# Sql Standardize Data

## Summary


## Key Ideas
- This refers to making the data consistent, removing white-spaces where they don't belong, removing unnecessary punctuation and transforming columns of data to their required data type. In this part is important to **pay attention** to the details.
- We can use the `DISTINCT` attribute in the `SELECT` to check the columns for irregularities.

>[!example] Use distinct to check irregularities
>```SQL
SELECT DISTINCT(industry)
FROM layoffs_staging2
ORDER BY 1
;

- If we see some rows that should be equal like if in the industry we have "crypto", "cryptocurrency" and "crypto currency", the 3 are the same but written different, so me have to **standardize** them.

>[!danger] REMEMBER TO FIRST SELECT THE DATA TO CHECK THAT YOU ARE GOING TO UPDATE EXACTLY WHAT YOU WANT.

>[!example] Standardize alike values
>```SQL
UPDATE layoffs_staging2
SET industry = "Crypto"
WHERE industry LIKE "Crypto%"
;

- If we see that some row has a trailing point and that makes it different from what we are expecting we can get rid of it using the following method.

>[!example] Remove trailing points
>```SQL
UPDATE layoffs_staging2
SET country = TRIM(TRAILING "." FROM country)
WHERE country LIKE "United States%"
;

- And if a column of our table doesn't have the correct type we can change it in the next way:

>[!example] Convert the data in the column to the expected type
> ```SQL
UPDATE layoffs_staging2
SET `date` = STR_TO_DATE(`date`, "%m/%d/%Y")
;

>[!example] Change the data type in the column
>```SQL
>ALTER TABLE layoffs_staging2
MODIFY COLUMN `date` DATE
## Related Links
- [[ ]]
## Source
- [Learn SQL Beginner to Advanced in Under 4 Hours](https://www.youtube.com/watch?v=OT1RErkfLNQ&t=9991s) 