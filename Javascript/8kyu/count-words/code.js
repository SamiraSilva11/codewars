function countWords(str) {
    str = str.trim();
    const words = str.match(/\S+/g);
    return words ? words.length : 0;
}