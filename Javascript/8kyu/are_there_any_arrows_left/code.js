function anyArrows(arrows) {
    // Iterate through each arrow object
    for (const arrow of arrows) {
      // Check if the arrow is not damaged
      if (!arrow.damaged) {
        return true; // Return true if an undamaged arrow is found
      }
    }
    return false; // Return false if no undamaged arrow is found
  }


  //best practice

  function anyArrows(arrows){
    return arrows.some(a => !a.damaged);
  }