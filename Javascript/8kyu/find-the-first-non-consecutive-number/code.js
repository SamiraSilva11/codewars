const firstNonConsecutive = arr => {
  if (arr.length < 2) return null;  // Handle empty or single element arrays

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return arr[i];
    }
  }
  
  return null;  // All elements are consecutive
};