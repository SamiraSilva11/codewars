function explode(s) {
  return s.split('').map(char => char.repeat(Number(char))).join('');
}