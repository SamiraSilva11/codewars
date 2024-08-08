function Counter() {
    this.value = 0;
  }
  
  Counter.prototype = {
    increase : function(){this.value++;},
    getValue : function(){ return this.value;},
    reset : function(){this.value = 0;}
  };

  

  //sugar
class Counter {	
    constructor() {
	this.value = 0;
    }
    increase() {
    this.value++;
    };
    getValue() {
    return this.value;
    };
    reset() {
    this.value = 0;
    };
}