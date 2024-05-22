class Guesser {
    constructor(number, lives) {
      this.number = number;
      this.lives = lives;
    }
    
    guess(n) {
      if (this.lives <= 0) {
        throw new Error("No more guesses allowed");
      }
      if (n !== this.number) {
        this.lives -= 1;
        return false;
      } else {
        return true;
      }
    }
  }