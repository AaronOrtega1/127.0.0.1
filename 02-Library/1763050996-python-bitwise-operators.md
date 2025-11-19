---
link: "[[1757569859-python|Python]]
aliases: 
  - "Python BitWise Operators"
tags:
  - Knowledge
  - Python
created_date:
  "[[2025-11-13]]"
---
# Python BitWise Operators
## Summary
- The leftmost bit is the sign bit (0=positive, 1=negative).
  - Example with 8-bit Numbers
    - 01111111 = +127 (largest positive 8-bit number)
    - 00000001 = +1
    - 00000000 = 0
    - 10000000 = -128 (smallest negative 8-bit number)
    - 10000001 = -127
    - 11111111 = -1
### NOT ~
- Flips all bits - changes 0s to 1s and 1s to 0s.
- **Two's complement shortcut:**  `~x = -x -1`.
  - Example with `~45`:
    - 45  = 0010 1101
    - ~45 = 1101 0010
    - ~45 = -45 - 1 = 46
### AND &
- Sets each bit to 1 if both bits are 1.
  - Example with `5&3`:
    - 0101(5) & 0011(3) = 0001(1)
### OR |
- Sets each bit to 1 if one of two bits is 1.
  - Example with `5|3`:
    - 0101(5) | 0011(3) = 0111(7)
### XOR ^
- Sets each bit to 1 if only one of two bits is 1.
  - Example with `5^3`:
    - 0101(5) ^ 0011(3) = 0110(6)
### Left Shift <<
- Moves all bits to the left by adding zeros to the right.
- `number << n`  where n is how many positions to shift.
- Each left shift **multiplies by 2**.
  - Example with `5<<1`:
    - 0000 0101 = 5
    - 0000 1010 = 10 after <<1
### Right Shift >>
- Moves all bits to the right by adding zeros to the left.
- `number >> n`  where n is how many positions to shift.
- Each left shift **divides by 2 (integer division)**.
  - Example with `20<<2`:
    - 0001 0100 = 20
    - 0000 0101 = 5 after <<2
## Source
[#14 Python Tutorial for Beginners | Python BitWise Operators - YouTube](https://www.youtube.com/watch?v=PyfKCvHALj8)
[Python Bitwise Operators](https://www.w3schools.com/python/gloss_python_bitwise_operators.asp)

