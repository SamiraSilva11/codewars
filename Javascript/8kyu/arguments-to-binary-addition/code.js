function arr2bin(arr){
    return arr.reduce((x,y)=>x+(typeof y=="number"?y:0),0).toString(2);
  }