Kata Training <br>
[![Static Badge](https://img.shields.io/badge/8kyu%20-%20black?style=flat&logo=codewars&labelColor=B1361E&color=black)](Javascript/8kyu)

# Age Range Compatibility Equation

**DESCRIPTION:**

Everybody knows the classic "half your age plus seven" dating rule that a lot of people follow (including myself). It's the 'recommended' age range in which to date someone.

![](http://web.archive.org/web/20190206114947if_/http://weknowmemes.com/wp-content/uploads/2014/08/age-range-compatibility-equation.jpg)

minimum age <= your age <= maximum age

## Task

Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.

This equation doesn't work when the age <= 14, so use this equation instead:
```
min = age - 0.10 * age
max = age + 0.10 * age
```
You should floor all your answers so that an integer is given instead of a float (which doesn't represent age). Return your answer in the form [min]-[max]

### Examples:

age = 27   =>   20-40
age = 5    =>   4-5
age = 17   =>   15-20

## Tags:

![Static Badge](https://img.shields.io/badge/fundamentals%20-%20purple?style=plastic) 
