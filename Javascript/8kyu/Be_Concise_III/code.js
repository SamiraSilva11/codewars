function sumSquares(array) {
    return array.reduce((acc, val) => acc + val ** 2, 0);
  }