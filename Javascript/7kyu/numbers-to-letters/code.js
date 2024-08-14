function switcher(x){
  return x.map(num => {
      if (num >= 1 && num <= 26) {
        return String.fromCharCode(27 - num + 96); // Reverse alphabet mapping
      } else if (num === '27') {
        return '!';
      } else if (num === '28') {
        return '?';
      } else if (num === '29') {
        return ' ';
      }
    }).join('');
}