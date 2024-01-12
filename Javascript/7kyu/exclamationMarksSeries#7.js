// Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark

// Description:

// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

// Examples

// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"

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