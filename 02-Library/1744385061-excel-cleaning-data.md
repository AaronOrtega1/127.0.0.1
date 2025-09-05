---
link: "[[1744384647-excel|Excel]]"
aliases:
  - Excel Cleaning Data
tags:
  - Knowledge
  - excel
created_date: 2025/04/11
---
# Excel Cleaning Data
## Key Ideas
>[!important] Keep a copy of the raw data

- If you are planning to import a data set from excel to sql you have to be aware of currencies so its better to change it to the base value.
- Always check the dates to see if they are correctly formatted.
## Remove all duplicates if necessary
- In the data tab go to the remove duplicates option.
![[1744385061-excel-cleaning-data.webp]]
## Standardize STR
- `UPPER()`
- `LOWER()`
- `PROPER()`
- By creating a filter in the table we can check the groups of data to see if there are misspells or some that are the same and can be updated.
![[1744385061-excel-cleaning-data-1.webp]]

- `TRIM()`
	- Gets rid of spaces at the start, middle and end.

## Change the currencies
- Change the type to number, it's the best for when you want to put the data in sql.

## Dates
- Use the filter to check for abnormal numbers.
- Change the type to the same, usually short date to have (29/11/2000)
## If necessary we can delete columns that aren't useful to us. **(remember to keep a copy of the raw data.)**
## Useful commands
- `ctrl+h`: to get the find and replace.
- `ctrl+a`: to select all our data in a table.
## How to make nested IF statements in Excel
```excel
=IF(CONDITION1, value_true1, IF(CONDITION2, value_true2, value_false2))
```
## Related Links
- [[ ]]
## Source
[text](url) 
