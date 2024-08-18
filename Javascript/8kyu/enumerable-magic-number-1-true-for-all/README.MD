Kata Training <br>
[![Static Badge](https://img.shields.io/badge/8kyu%20-%20black?style=flat&logo=codewars&labelColor=B1361E&color=black)](Javascript/8kyu)

# Enumerable Magic #1 - True for All?

**DESCRIPTION:**

### Task

Create a method all which takes two params:

- a sequence
- a function (function pointer in C)
and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

### Example
```
all((1, 2, 3, 4, 5), greater_than_9) -> false
all((1, 2, 3, 4, 5), less_than_9)    -> True
```

### Help

Here's a (Ruby) resource if you get stuck:

http://www.rubycuts.com/enum-all


## Tags:
![Static Badge](https://img.shields.io/badge/arrays%20-%20dodgerblue?style=plastic) ![Static Badge](https://img.shields.io/badge/fundamentals%20-%20purple?style=plastic)