function stairsIn20(s){
    return s.map(innerArray => innerArray.reduce((acc, cur) => acc + cur, 0))
            .reduce((acc, cur) => acc + cur, 0)
            *20;
  }