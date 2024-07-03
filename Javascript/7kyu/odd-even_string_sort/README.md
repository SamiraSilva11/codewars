Kata Training <br>
[![Static Badge](https://img.shields.io/badge/7kyu%20-%20black?style=flat&logo=codewars&labelColor=B1361E&color=black)](Javascript/7kyu)

# Odd-Even String Sort

**DESCRIPTION:**

Given a string `s`, your task is to return another string such that even-indexed and odd-indexed characters of `s` are grouped and the groups are space-separated. Even-indexed group comes as first, followed by a space, and then by the odd-indexed part.

## Examples:

```
input:    "CodeWars" => "CdWr oeas"
           ||||||||      |||| ||||
indices:   01234567      0246 1357
```

Even indices 0, 2, 4, 6, so we have `"CdWr"` as the first group.
Odd indices are 1, 3, 5, 7, so the second group is `"oeas"`.
And the final string to return is `"Cdwr oeas"`.

## Notes

Tested strings are at least 8 characters long.

## Tags:

![Static Badge](https://img.shields.io/badge/fundamentals%20-%20purple?style=plastic) ![Static Badge](https://img.shields.io/badge/strings%20-%20blue?style=plastic) ![Static Badge](https://img.shields.io/badge/sorting%20-%20skyblue?style=plastic)
