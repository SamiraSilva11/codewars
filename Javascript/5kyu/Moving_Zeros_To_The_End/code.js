function moveZeros(arr) {
    let lastNonZeroFoundAt = 0;

  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // If the current element is non-zero
    if (arr[i] !== 0) {
      // Swap it with the element at the last non-zero index
      [arr[lastNonZeroFoundAt], arr[i]] = [arr[i], arr[lastNonZeroFoundAt]];
      // Increment the last non-zero index
      lastNonZeroFoundAt++;
    }
  }

  return arr;
}


//best practice
function moveZeros(arr) {
    return arr.sort((a, b) => b === 0 ? -1 : 0);
  }