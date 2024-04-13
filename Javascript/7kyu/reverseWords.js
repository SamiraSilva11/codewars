// Reverse word

// DESCRIPTION:

// Complete the function that accepts a string parameter, and reverses each word in the string. 
// All spaces in the string should be retained.

// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    return str.split(' ').map( str => str.split('').reverse().join('')).join(' ');
  }



// str.split(' ') = ['This', 'is', 'an', 'example!']
// map( str => str.split('') = ['T', 'h', 'i', 's'] ['i', 's'] ['a', 'n'] ['e', 'x', 'a', 'm', 'p', 'l', 'e', '!']
// .reverse() = ['s', 'i', 'h', 'T'] ['s', 'i'] ['n', 'a'] ['!', 'e', 'l', 'p', 'm', 'a', 'x', 'e']
// .join('') = ['sihT', 'si', 'na', '!elpmaxe']
// .join(' ')) = sihT si na !elpmaxe