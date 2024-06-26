Kata Training <br>
[![Static Badge](https://img.shields.io/badge/4kyu-yellow?style=plastic&logo=codewars&labelColor=%23B1361E&color=blue)](Javascript/4kyu)

# Tic-Tac-Toe

**DESCRIPTION:**

Implement a Tic-Tac-Toe (AKA: Noughts and crosses, Xs and Os) solver. The input to the solver function will be an array of length 9 representing the board. Output of the function will be the index of the desired move (0-8). You will always be X. You must make a valid move, and a winning move if available.

The board is represented as an array with the following indexes:

```
  0  |   1   |  2
---+---+---
  3  |   4  |  5
---+---+---
  6  |   7  |  8 
```

For example, the following board would be represented as

```
solveTTT(['', '', '', 'O', '', '', 'X', '', ''])

      |       |
---+---+---
  O  |      |
---+---+---
  X  |       |
```

Valid outputs for the above input would be 0, 1, 2, 4, 5, 7 or 8.

The following board would only have 1 correct output (2) because it is the only move that connects 3 X's in a row:

```
solveTTT(['O', '', '', 'O', 'X', '', 'X', 'O', 'X'])
```

## Tags:

![Static Badge](https://img.shields.io/badge/algorithms%20-%20teal?style=plastic)