function isPangram(string){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let lowerCaseSentence = string.toLowerCase();
  
  for (let letter of alphabet) {
        // Check if the letter exists in the sentence
        if (lowerCaseSentence.indexOf(letter) === -1) {
            // If any letter is not found, return false
            return false;
        }
    }

    // If all letters are found, return true
    return true;
}

