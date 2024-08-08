function shortcut (str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return str.split('').filter(char => !vowels.includes(char)).join('');
  }


//best practice
function shortcut(string){
    return string.replace(/[aeiou]/g,'')
  }