Kata Training <br>
[![Static Badge](https://img.shields.io/badge/7kyu%20-%20black?style=flat&logo=codewars&labelColor=B1361E&color=black)](Javascript/7kyu)

# Run your String

**DESCRIPTION:**

1. Function should accept two arguments:
- arg: any type

- object with properties:

	- param: string type.

	- func: string type. This string is a body of executable function

2. Function should evaluate code of string passed as 'func' with parameter arg passed as argument and return result of execution

## Example

```
var arg = 4,                         // arg for "string" function call
    obj = {
      param: 'num',                  // parameter name for function in string  
      func: 'return Math.sqrt(num)'  // function that need call with arg var
    };
    
runYourString(arg, obj)              // we expect it should return 2 which is a result of square root of 4
```

ps: Solution of this Kata just fun language trick.

Usage of this code in production is not recommended.

## Tags:

![Static Badge](https://img.shields.io/badge/strings%20-%20blue?style=plastic) ![Static Badge](https://img.shields.io/badge/fundamentals%20-%20purple?style=plastic)
