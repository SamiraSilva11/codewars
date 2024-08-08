function betterThanAverage(classPoints, yourPoints) {
    let classTotal = 0;
      for(i=0; i<classPoints.length; i++){
        classTotal += classPoints[i];
      }
      let average = (classTotal + yourPoints)/(classPoints.length+1);
      if(average<yourPoints){
        return true;
      }else{
        return false;
      }
  }