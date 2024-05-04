function numberToPower(number, power){
    let pow = 1
    for(let i =1; i<=power; i++){
      if(i === 1){
        pow *= number;
      }else{
      pow *= number;
      }
    }
    return pow;
  }