function logicalCalc(array, op) {
  // Initialize the result with the first element of the array
  let result = array[0];

  // Iterate over the array, starting from the second element
  for (let i = 1; i < array.length; i++) {
    // Apply the corresponding operator based on the given string
    if (op === "AND") {
      result = result && array[i];
    } else if (op === "OR") {
      result = result || array[i];
    } else if (op === "XOR") {
      result = result !== array[i]; // XOR operation
    }
  }

  // Return the final result
  return result;
}


//best Practice
var ops = {
  'AND': (a, b) => a && b,
  'OR': (a, b) =>  a || b,
  'XOR': (a, b) => a !== b
}


function logicalCalc(array, op){
  return array.reduce(ops[op]);
}