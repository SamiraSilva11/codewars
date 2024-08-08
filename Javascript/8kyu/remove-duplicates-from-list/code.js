function distinct(a) {
    // Create an empty Set to store unique elements while preserving order
    const uniqueSet = new Set();
    
    // Filter the array to keep only the elements that are not already in the uniqueSet
    const result = a.filter(num => {
      // If the element is not in the uniqueSet, add it to the uniqueSet and return true to keep it in the result array
      if (!uniqueSet.has(num)) {
        uniqueSet.add(num);
        return true;
      }
      // If the element is already in the uniqueSet, return false to remove it from the result array
      return false;
    });
    
    return result;
  }


  //best practice
  function distinct(a) {
    return [...new Set(a)];
  }