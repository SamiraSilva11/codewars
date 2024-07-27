function warnTheSheep(queue) {
    if(queue[queue.length-1] === 'wolf'){
      return "Pls go away and stop eating my sheep";
    }else{
      return `Oi! Sheep number ${queue.length-1-queue.indexOf("wolf")}! You are about to be eaten by a wolf!`
    }
  }

  //best practice

  function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf');
    return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
  }