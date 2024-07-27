function remove(sentence) {
    const words = sentence.split(' ');
    const filteredWords = words.filter(word => {
        const exclamationCount = word.split('').filter(char => char === '!').length;
        return exclamationCount !== 1;
    });
    return filteredWords.join(' ');
}

//best practice
function remove(s){
    return s.split(' ').filter(i => i.split('!').length != 2).join(' ');
  }