function twoHighest(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index)
              .sort((a, b) => b - a)
              .slice(0, 2);
  }