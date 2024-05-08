const squaresOnly=a=>a.filter(n=>Number.isInteger(Math.sqrt(n)));

//other
function squaresOnly(array) {
    return array.filter(n => Number.isInteger(Math.sqrt(n)))
  }