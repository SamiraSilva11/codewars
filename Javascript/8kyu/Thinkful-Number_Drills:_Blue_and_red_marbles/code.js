function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    const remainingBlue = blueStart - bluePulled;
    const remainingRed = redStart - redPulled;
    
    // Calculate the total remaining marbles
    const totalRemaining = remainingBlue + remainingRed;
    
    // Calculate the probability of drawing a blue marble
    const probabilityBlue = remainingBlue / totalRemaining;
    
    return probabilityBlue;
  }

  //best practice

const guessBlue = (blueStart, redStart, bluePulled, redPulled) => {
    return (blueStart - bluePulled) / ((blueStart - bluePulled) + (redStart - redPulled));
};