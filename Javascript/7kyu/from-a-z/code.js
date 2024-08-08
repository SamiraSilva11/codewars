function gimmeTheLetters(sp) {
    let result = '';
    let [start, end] = sp.split('-');
    let startCode = start.charCodeAt(0);
    let endCode = end.charCodeAt(0);
    for (let i = startCode; i <= endCode; i++) {
      result += String.fromCharCode(i);
    }
    return result;
  }