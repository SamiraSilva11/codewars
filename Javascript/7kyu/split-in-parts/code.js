var splitInParts = function(str, size){
  return str.match(new RegExp(`.{1,${size}}`, 'g')).join(' ');
}