const aliasGen = (first, last) => {
    let charFirst = first[0].toUpperCase();
    let charLast = last[0].toUpperCase();
    if(Number(charFirst) || Number(charLast)) {
      return 'Your name must start with a letter from A - Z.'
    }
    else return `${firstName[charFirst]} ${surname[charLast]}`
  }