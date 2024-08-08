function mergeArrays(arr1, arr2) {
    return [...new Set(sort([...arr1, ...arr2]))];
  }