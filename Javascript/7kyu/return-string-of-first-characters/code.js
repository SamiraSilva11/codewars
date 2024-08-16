function makeString(s){
  return s.split(' ').map(word => word[0]).join('');
}