function positiveSum(arr) {
    return arr.filter(x => x> 0).reduce((acc, curr) => acc + Number(curr), 0);
  }


  function positiveSum(arr) {
    let sum=0
    for(let i =0; i<arr.length; i++)
      if(arr[i]>0){
        sum += arr[i];
      }
    return sum;
  }