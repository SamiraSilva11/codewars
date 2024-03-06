// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {
    s.sort();
    const firstString = s[0]; // Get the first string from the sorted array
    const result = firstString.split('').join('***'); // Join the characters of the first string with "***" between each character
    return result;
  }