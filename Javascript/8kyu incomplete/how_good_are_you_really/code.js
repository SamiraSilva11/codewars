// DESCRIPTION:

// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:

// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

function betterThanAverage(classPoints, yourPoints) {
    // Your code here
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