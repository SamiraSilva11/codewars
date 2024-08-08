function nonsense(str) {
  // Replace vowel numbers with letters
  str = str.replace(/0/g, 'a')
           .replace(/1/g, 'e')
           .replace(/2/g, 'i')
           .replace(/3/g, 'o')
           .replace(/4/g, 'u');

  // Remove "trex" and "raptor"
  str = str.replace(/trex|raptor/gi, '');

  // Trim extra spaces
  str = str.trim().replace(/\s+/g, ' ');

  // Ensure the sentence ends with a period
  if (!str.endsWith('.')) {
    str += '.';
  }

  // Capitalize the first letter of the sentence
  str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  // Capitalize standalone "i"
  str = str.replace(/\bi\b/g, 'I');

  return str;
}


// best practices
const nonsense = (str) => 
  str
    .toLowerCase()
    .replace(/0|1|2|3|4/g, x=>'aeiou'[x])
    .replace(/trex|\.|raptor|/g, '')
    .replace(/^.| i /g, x=>x.toUpperCase()) + '.'


function nonsense(str) {
  return str.toLowerCase()
            .replace(/[0-4]/g, n=>'aeiou'[n])
            .replace(/trex|raptor/g, '')
            .replace(/^.| i /g, s=>s.toUpperCase())
          + (str.slice(-1)==='.'?'':'.');
}