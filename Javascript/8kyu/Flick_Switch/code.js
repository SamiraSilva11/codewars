function flickSwitch(arr) {
    let result = [];
    let toggle = true;
    
    for (let item of arr) {
      if (item === 'flick') {
        toggle = !toggle; // Toggle the boolean value
      }
      result.push(toggle);
    }
    
    return result;
  }


  //best practice
  function flickSwitch(arr){
    let flick = true
     return arr.map(item => item === 'flick'? flick = !flick: flick)
  }