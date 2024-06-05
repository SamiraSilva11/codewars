Kata Training <br>
[![Static Badge](https://img.shields.io/badge/8kyu%20-%20black?style=flat&logo=codewars&labelColor=B1361E&color=black)](Javascript/8kyu)

# Duck Duck Goose

**DESCRIPTION:**

The objective of Duck, duck, goose is to *walk in a circle*, tapping on each player's head until one is chosen.

------------

Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (**1-based**), return the `name` of the chosen Player(`name` is a property of `Player` objects, e.g `Player.name`)

------------

Example:

```
duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name
```

```
// PHP only
duck_duck_goose([$a, $b, $c, $d], 1); // => $a["name"]
duck_duck_goose([$a, $b, $c, $d], 5); // => $a["name"]
duck_duck_goose([$a, $b, $c, $d], 4); // => $d["name"]
```

## Tags:

![Static Badge](https://img.shields.io/badge/fundamentals%20-%20purple?style=plastic) ![Static Badge](https://img.shields.io/badge/lists%20-%20limegreen?style=plastic) ![Static Badge](https://img.shields.io/badge/arrays%20-%20dodgerblue?style=plastic)
