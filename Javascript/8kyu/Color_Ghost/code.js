class Ghost {
    constructor() {
      const colors = ["white", "yellow", "purple", "red"];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }
  }


  //best practice

  var Ghost = function() {
    this.color = ["white","yellow","purple","red"][Math.floor(Math.random() * 4)];
  };