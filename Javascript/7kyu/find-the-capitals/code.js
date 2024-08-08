var capitals  = word =>
  [...word].reduce((indices, char, index) =>
    char === char.toUpperCase() ? [...indices, index] : indices, []);
