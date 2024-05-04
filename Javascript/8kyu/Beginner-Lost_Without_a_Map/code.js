function maps(x){
    let doubledArray = [];
    for(let i = 0; i < x.length; i++){
      doubledArray.push(x[i] * 2);
    }
    return doubledArray;
  }


// other ways

function maps(x){
    return x.map(n => n * 2);
  }