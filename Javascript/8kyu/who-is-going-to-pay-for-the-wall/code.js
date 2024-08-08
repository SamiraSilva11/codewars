function whoIsPaying(name){
    let arr =[];
    name.length > 2 ? arr.push(name, name.slice(0,2)) : arr.push(name);
    return arr;
  }