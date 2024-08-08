var findAverage = function (nums) {
    if (nums.length === 0) {
      return 0; // Return 0 for an empty array
    }
    
    // Calculate the sum of all numbers in the array
    const sum = nums.reduce((acc, curr) => acc + curr, 0);
    
    // Calculate the mean by dividing the sum by the number of elements in the array
    const mean = sum / nums.length;
    
    return mean;
  }



  //best practice
  const findAverage = nums => nums.reduce((a, b) => a + b) / nums.length;