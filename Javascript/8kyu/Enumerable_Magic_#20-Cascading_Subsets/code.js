function eachCons(array, n) {
    const result = [];
    
    // Iterate over the array until there are enough elements for a subset of size n
    for (let i = 0; i <= array.length - n; i++) {
      // Slice the array to create a subset of size n and push it to the result array
      result.push(array.slice(i, i + n));
    }
    
    return result;
  }