function _if(bool, func1, func2) {
    if(bool){
      func1();
    }else{
      func2();
    }
  }

  //best practice
  function _if(bool, func1, func2) {
    return bool ? func1() : func2();
  }