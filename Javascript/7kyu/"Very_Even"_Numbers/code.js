function isVeryEvenNumber(n) {
    if(n<10) {
        return n%2 === 0
    } else {
      let digitSum = n.toString().split('').reduce((acc, c) => acc + parseInt(c), 0);
      return isVeryEvenNumber(digitSum);
    }
  }