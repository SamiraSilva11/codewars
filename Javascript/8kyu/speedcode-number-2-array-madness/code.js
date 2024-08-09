function arrayMadness(a, b) {
  return a.reduce((acc, val) => acc + val ** 2, 0) > b.reduce((acc, val) => acc + val ** 3, 0)
}