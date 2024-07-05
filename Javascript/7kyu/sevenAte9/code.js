function sevenAte9(str) {
  while (str.includes('797')) {
    str = str.replace('797', '77');
  }
  return str;
}