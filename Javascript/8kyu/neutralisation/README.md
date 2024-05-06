Kata Training <br>
[![Static Badge](https://img.shields.io/badge/8kyu%20-%20black?style=flat&logo=codewars&labelColor=B1361E&color=black)](Javascript/8kyu)

# Neutralisation

**DESCRIPTION:**

Given two strings comprised of `+` and `-`, return a new string which shows how the two strings interact in the following way:

- When positives and positives interact, they *remain positive.*
- When negatives and negatives interact, they *remain negative.*
- But when negatives and positives interact, they *become neutral*, and are shown as the number `0`.

### Worked Example

```
("+-+", "+--") ➞ "+-0"
# Compare the first characters of each string, then the next in turn.
# "+" against a "+" returns another "+".
# "-" against a "-" returns another "-".
# "+" against a "-" returns "0".
# Return the string of characters.
```

### Examples

```
("--++--", "++--++") ➞ "000000"

("-+-+-+", "-+-+-+") ➞ "-+-+-+"

("-++-", "-+-+") ➞ "-+00"
```
### Notes

The two strings will be the same length.

## Tags:

![Static Badge](https://img.shields.io/badge/algorithms%20-%20teal?style=plastic) ![Static Badge](https://img.shields.io/badge/strings%20-%20blue?style=plastic)