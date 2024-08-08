function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    return Math.floor(marks.reduce((total, num) => total+num,0)/marks.length);
  }