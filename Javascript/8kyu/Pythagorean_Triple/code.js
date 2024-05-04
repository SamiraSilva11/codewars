function isPythagoreanTriple(integers) {
    let a2 = Math.pow(integers[0],2);
    let b2 = Math.pow(integers[1],2);
    let c2 = Math.pow(integers[2],2);
    
    if( (a2+b2 ===c2) ||  (b2+c2 ===a2) || (c2+a2 ===b2) ){
      return true;
    } else {
      return false
    }
  }