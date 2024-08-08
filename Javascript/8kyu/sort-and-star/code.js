function twoSort(s) {
    s.sort();
    const firstString = s[0]; // Get the first string from the sorted array
    const result = firstString.split('').join('***'); // Join the characters of the first string with "***" between each character
    return result;
  }