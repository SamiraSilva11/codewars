// This Cube class needs help
// Implement the constructor so that it can take an integer for the side or no args
class Cube {
    constructor(side = 0) {
      this.setSide(side);
    }
    
    getSide() {
      return this.side; 
    }
    setSide(n) {
      this.side = Math.abs(n);
    }
  }