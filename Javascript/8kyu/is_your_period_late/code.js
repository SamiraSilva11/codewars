function periodIsLate(last, today, cycleLength) {
    if((today - last) / (1000 * 60 * 60 * 24) > cycleLength){
      return true;
    }else{
    return false;
    }
  }