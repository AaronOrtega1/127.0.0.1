---
aliases:
  - functional-programming-in-python
tags:
  - #resource
  - #python
created_date: "2025-04-05"
link: "[[1743811421-procesamiento-de-datos-masivos|Procesamiento De Datos Masivos]]"
---

# functional-programming-in-python

## Summary


## Key Ideas

### What is Functional Programming?

- Is a paradigm where programs are constructed by applying and composing functions. It emphasizes the use of pure functions, immutability, and first-class functions.

### Key Concepts

- **Pure Functions**: functions that always produce the same output for the same input and have no side effects.
- **Immutability**: Data structures that cannot be modified after they are created.
- **First-Class Functions**: Functions are treated as first-class citizens, meaning they can be passed as arguments, returned from other functions, and assigned to variables.

```python {Assign functions to variables}
def greet(name):
  return f"Hello, {name}!"

say_hello = greet

print(say_hello("Aarón")) #Output: Hello, Alice!
```

```python {Pasing functions as arguments}
def  apply_function(func, value):
  return func(value)

def square(x):
  return x * x

result = apply_function(square, 5)
print(result)
```

```python {Storing functions in data structures}
def add(x, y):
  return x + y

def substract(x, y):
  return x - y

operations = {
  'add'= add,
  'substract'= substract
}

print(operations['add'](10, 5))
print(operations['substract'](10, 5))
```

## Related Links
- [[1743895382-handling-variable-arguments-using-args-in-python|handling-variable-arguments-using-args-in-python]]
- [[1743895534-lambda-expressions-in-python|lambda-expressions-in-python]]


## Source
[text](url) 

