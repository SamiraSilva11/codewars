// Check your arrows

// You have a quiver of arrows, but some have been damaged. The quiver contains arrows with an optional range information (different types of targets are positioned at different ranges), so each item is an arrow.
// You need to verify that you have some good ones left, in order to prepare for battle:

// anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}])
// If an arrow in the quiver does not have a damaged status, it means it's new.

// The expected result is a boolean, indicating whether you have any good arrows left.

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