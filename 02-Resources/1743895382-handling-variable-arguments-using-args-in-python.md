---
aliases:
  - handling-variable-arguments-using-args-in-python
tags:
  - #resource
created_date: "2025-04-05"
link: "[[1743811421-procesamiento-de-datos-masivos|Procesamiento De Datos Masivos]]"
---

# handling-variable-arguments-using-args-in-python

## Summary


## Key Ideas

### Handling Variable Arguments Using \*args

- \*args allows a function to accept a variable of positional arguments. It collects all additional arguments into a **tuple**

```python
def sum_numbers(*args):
  total = 0
  for num in args:
    total += num
  return total

print(sum_numbers(1, 2, 3))
print(sum_numbers(10, 20, 30, 40))
```

### Key Points

- \*args is used to pass a variable number of arguments to a function.
- It collects arguments into a **tuple**.
- Useful when the number of inputs is unknown or variable.
- Can be combined with regular arguments (e.g., def func(a, b, \*args)).


## Related Links
- [[1743895004-functional-programming-in-python|functional-programming-in-python]]

## Source
[text](url) 

