function divCon(x) {
    return x.reduce((acc, val) => 
      typeof val === 'number' ? acc + val : acc - Number(val)
    , 0);
  }