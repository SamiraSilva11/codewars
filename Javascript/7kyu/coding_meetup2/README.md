Kata Training <br>
[![Static Badge](https://img.shields.io/badge/7kyu%20-%20black?style=flat&logo=codewars&labelColor=B1361E&color=black)](Javascript/7kyu)

# Coding Meetup #2 - Higher-Order Functions Series - Greet developers

**DESCRIPTION:**

You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to **return an array where each object will have a new property 'greeting' with the following string value:**

**Hi < firstName here >, what do you like the most about < language here >?**

For example, given the following input array:

```
var list1 = [
var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
```

your function should return the following array:

```
[
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?'
  },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    greeting: 'Hi Lukas, what do you like the most about Python?'
  },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    greeting: 'Hi Madison, what do you like the most about Ruby?'
  } 
];
```

## Notes:

- The order of the properties in the objects does not matter (except in COBOL).
- The input array will always be valid and formatted as in the example above.
         
This kata is part of the **Coding Meetup** series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: `forEach, filter, map, reduce, some, every, find, findIndex`. Other approaches to solving the katas are of course possible.

## Tags:

![Static Badge](https://img.shields.io/badge/data_structures%20-%20LightSteelBlue?style=plastic) ![Static Badge](https://img.shields.io/badge/fundamentals%20-%20purple?style=plastic) ![Static Badge](https://img.shields.io/badge/algorithms%20-%20teal?style=plastic) ![Static Badge](https://img.shields.io/badge/strings%20-%20blue?style=plastic) ![Static Badge](https://img.shields.io/badge/regular_expressions%20-%20darkorange?style=plastic) ![Static Badge](https://img.shields.io/badge/arrays%20-%20dodgerblue?style=plastic) ![Static Badge](https://img.shields.io/badge/functional_programming%20-%20cyan?style=plastic)
