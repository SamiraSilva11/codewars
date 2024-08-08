var sing = function () {
  let lyrics = [];
  for (let i = 99; i > 0; i--) {
    let bottleWord = i === 1 ? "bottle" : "bottles";
    let nextBottleWord = (i - 1) === 1 ? "bottle" : "bottles";
    lyrics.push(`${i} ${bottleWord} of beer on the wall, ${i} ${bottleWord} of beer.`);
    if (i - 1 > 0) {
      lyrics.push(`Take one down and pass it around, ${i - 1} ${nextBottleWord} of beer on the wall.`);
    } else {
      lyrics.push(`Take one down and pass it around, no more bottles of beer on the wall.`);
    }
  }
  lyrics.push("No more bottles of beer on the wall, no more bottles of beer.");
  lyrics.push("Go to the store and buy some more, 99 bottles of beer on the wall.");

  return lyrics;
};

//best practice
var sing = function () {
  var song = [];
  
  for (var i = 99; i > 0; i--){  
    song.push(i + ' ' + (i !== 1 ? 'bottles' : 'bottle') +' of beer on the wall, ' + i +(i !== 1 ? ' bottles' : ' bottle') + ' of beer.');
    song.push('Take one down and pass it around, ' + (i == 2 ? '1 bottle' : i !== 1 ? (i - 1) + ' bottles' : 'no more bottles' ) + ' of beer on the wall.');
  }
  
  song.push('No more bottles of beer on the wall, no more bottles of beer.');
  song.push('Go to the store and buy some more, 99 bottles of beer on the wall.');
  
  return song;
};