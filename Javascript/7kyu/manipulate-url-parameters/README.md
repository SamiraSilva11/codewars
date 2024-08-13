Kata Training <br>
[![Static Badge](https://img.shields.io/badge/7kyu%20-%20black?style=flat&logo=codewars&labelColor=B1361E&color=black)](Javascript/7kyu)

# Manipulate URL Parameters

**DESCRIPTION:**

You need to write a function ( addOrChangeUrlParameter(url, keyValueParameter) ) that can manipulate URL parameters.

It should be able to
- add a parameter to an existing URL,

but also to
- change a parameter if it already exists.

## Example

```
addOrChangeUrlParameter("www.example.com", "key=value") 
// -> 'www.example.com?key=value' (adds a parameter).

addOrChangeUrlParameter("www.example.com?key=value", "key2=value2" ) 
// -> 'www.example.com?key=value&key2=value2' (adds another parameter).

addOrChangeUrlParameter("www.example.com?key=oldValue`", "key=newValue" ) 
// ->'www.example.com?key=newValue' (changes the parameter).
```

## Tags:

![Static Badge](https://img.shields.io/badge/strings%20-%20blue?style=plastic) ![Static Badge](https://img.shields.io/badge/parsing%20-%20plum?style=plastic) ![Static Badge](https://img.shields.io/badge/regular_expressions%20-%20darkorange?style=plastic) ![Static Badge](https://img.shields.io/badge/fundamentals%20-%20purple?style=plastic)
