function mergeArrays(a, b) {
  return [...new Set(a.concat(b))].sort((x, y) => x - y);
}