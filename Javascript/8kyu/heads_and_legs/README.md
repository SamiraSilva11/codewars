Kata Training <br>
[![Static Badge](https://img.shields.io/badge/8kyu%20-%20black?style=flat&logo=codewars&labelColor=B1361E&color=black)](Javascript/8kyu)

# Heads and Legs

**DESCRIPTION:**

Everybody has probably heard of the animal heads and legs problem from the earlier years at school. It goes:

`
“A farm contains chickens and cows. There are x heads and y legs. How many chickens and cows are there?”
`

Where x <= 1000 and y <=1000

# Task

Assuming there are no other types of animals, work out how many of each animal are there.

`Return a tuple in Python - (chickens, cows) and an array list - [chickens, cows]/{chickens, cows} in all other languages`

If either the heads & legs is negative, the result of your calculation is negative or the calculation is a float return "No solutions" (no valid cases), or [-1, -1] in COBOL.

In the form:
```
[Heads, Legs] = [72, 200]

VALID - [72, 200] =>             [44 , 28]   
                             [Chickens, Cows]

INVALID - [72, 201] => "No solutions"
```

However, `if 0 heads and 0 legs are given always return [0, 0]` since zero heads must give zero animals.

There are many different ways to solve this, but they all give the same answer.

You will only be given integers types - however negative values (edge cases) will be given.

Happy coding!

## Tags:

![Static Badge](https://img.shields.io/badge/algebra%20-%20gold?style=plastic) ![Static Badge](https://img.shields.io/badge/logic%20-%20indigo?style=plastic) ![Static Badge](https://img.shields.io/badge/mathematics%20-%20royalblue?style=plastic) ![Static Badge](https://img.shields.io/badge/algorithms%20-%20teal?style=plastic)