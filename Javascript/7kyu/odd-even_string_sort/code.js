function sortMyString(s) {
  let evenChars = '';
  let oddChars = '';

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      evenChars += s[i];
    } else {
      oddChars += s[i];
    }
  }
  return evenChars + ' ' + oddChars;
}


//best practice
const sortMyString = s => {
  let even = s.split('').filter((v, i) => i % 2 === 0).join('')
  let odd = s.split('').filter((v, i) => i % 2 !== 0).join('')
  return even + ' ' + odd
}