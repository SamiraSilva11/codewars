class Ship {
    constructor(draft, crew) {
      this.draft = draft
      this.crew = crew
    }
    
    isWorthIt() {
      // Calculate the total weight of the ship after removing the weight of the crew
      const totalWeight = this.draft - (this.crew * 1.5);
      
      // Check if the total weight is still more than 20
      return totalWeight > 20;
    }
  }