function vowel2index(str) {
  return str.replace(/[aeiou]/gi, (match, index) => index + 1);
}