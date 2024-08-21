Array.prototype.filter = function (func) {
  const result = [];
  this.forEach((element, index, array) => {
    if (func(element, index, array)) {
      result.push(element);
    }
  });
  return result;
}