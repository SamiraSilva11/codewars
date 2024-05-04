function quadratic(x1, x2){
    // Since a = 1, we don't need to calculate it
    let b = -(x1 + x2); // b = -(x1 + x2)
    let c = x1 * x2;    // c = x1 * x2
    
    return [1, b, c];   // Return the coefficients [a, b, c]
  }