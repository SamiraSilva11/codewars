function slope(points){
    let y = points[3] - points[1];
    let x = points[2] - points[0];
    
      return x === 0 ? 'undefined' : (y / x).toString();
  }