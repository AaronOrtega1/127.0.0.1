---
link: "[[1744384647-excel|Excel]]"
aliases:
  - Excel CountIFs
tags:
  - resource
  - excel
created_date: 2025-08-27
---
# Excel CountIFs

## Syntax
```Excel
COUNTIFS(criteria_range1, criteria1, [criteria_range2, criteria2]…)
```

- **criteria_range1**: Required, range in which to evaluate the associated criteria.
- **criteria1**: Required, criteria in the form of a number, expression, cell reference, or text that define which cells will be counter.
- **criteria_range2, criteria2**: Optional, additional ranges and their associated criteria.

### Example
```Excel
=COUNTIFS($B$18:$B$37,">="&D23,$B$18:$B$37,"<="&E23)
```
- **criteria_range1**: Range from B18-B37, lock.
- **criteria1**: ">=" greater or equal than D23
- **criteria_range2, criteria2**: Range2 from B18-B37, "<=" lower or equal than E23.

## Source
[COUNTIFS function - Microsoft Support](https://support.microsoft.com/en-gb/office/countifs-function-dda3dc6e-f74e-4aee-88bc-aa8c2a866842)

