Kata Training <br>
![Static Badge](https://img.shields.io/badge/8kyu%20-%20black?style=flat&logo=codewars&labelColor=B1361E&color=black)

# "this" is a problem

**DESCRIPTION:**<br>

We want to create a constructor function 'NameMe', which takes first name and last name as parameters. The function combines the first and last names and saves the value in "name" property.

We already implemented that function, but when we actually run the code, the "name" property is accessible, but the "firstName" and "lastName" is not accessible. All the properties should be accessible. Can you find what's wrong with it? A test fixture is also available

```
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    return {name: this.firstName + ' ' + this.lastName};
}

var n = new NameMe('John', 'Doe');
n.firstName //Expected: John
n.lastName //Expected: Doe
n.name //Expected: John Doe
```

## Tags:
![Static Badge](https://img.shields.io/badge/fundamentals%20-%20purple?style=plastic) <br>
![Static Badge](https://img.shields.io/badge/language_features%20-%20purple?style=plastic) <br>
![Static Badge](https://img.shields.io/badge/object--_oriented_programing%20-%20purple?style=plastic) <br>