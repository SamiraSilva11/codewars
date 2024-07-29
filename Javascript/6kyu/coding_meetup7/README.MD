Kata Training <br>
[![Static Badge](https://img.shields.io/badge/6kyu%20-%20yellow?style=flat&logo=codewars&labelColor=B1361E&color=yellow)](Javascript/6kyu)

# Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer

**DESCRIPTION:**

You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return a sequence which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.

For example, given the following input array:


```
var list1 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];
```

your function should return the following array:

```
[
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
]
```

## Notes:

- The input array will always be valid and formatted as in the example above and will never be empty.
         
This kata is part of the **Coding Meetup** series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: `forEach, filter, map, reduce, some, every, find, findIndex`. Other approaches to solving the katas are of course possible.

## Tags:

![Static Badge](https://img.shields.io/badge/data_structures%20-%20LightSteelBlue?style=plastic) ![Static Badge](https://img.shields.io/badge/fundamentals%20-%20purple?style=plastic) ![Static Badge](https://img.shields.io/badge/algorithms%20-%20teal?style=plastic) ![Static Badge](https://img.shields.io/badge/strings%20-%20blue?style=plastic) ![Static Badge](https://img.shields.io/badge/regular_expressions%20-%20darkorange?style=plastic) ![Static Badge](https://img.shields.io/badge/arrays%20-%20dodgerblue?style=plastic) ![Static Badge](https://img.shields.io/badge/functional_programming%20-%20cyan?style=plastic)
