function stringy(size) {
    let result = ''; // Initialize an empty string to store the result
    
    for (let i = 0; i < size; i++) {
      // Append '1' if the index is even, otherwise append '0'
      result += (i % 2 === 0) ? '1' : '0';
    }
    
    return result;
  }