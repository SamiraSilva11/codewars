function HQ9(code) {
  if(code === 'H') {
    return 'Hello World!'
  }else if (code === 'Q'){
    return code;
  }else if (code === '9'){
    let bottles99 = '';
    for(let i=99; i>= 0; i--){
      if(i > 2){
      bottles99 += `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${i-1} bottles of beer on the wall.\n`
      }else if(i === 2) {
      bottles99 += `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${i-1} bottle of beer on the wall.\n`
      }else if(i === 1){
      bottles99 += `${i} bottle of beer on the wall, ${i} bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\n`
      }else {
      bottles99 += `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`
      }
    }
    return bottles99;
  }else{
    return;
  }
}
