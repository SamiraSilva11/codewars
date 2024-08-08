function reverseWords(str) {
    return str.split(' ').map( str => str.split('').reverse().join('')).join(' ');
  }
