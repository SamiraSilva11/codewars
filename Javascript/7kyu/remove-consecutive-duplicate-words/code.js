function removeConsecutiveDuplicates(string) {
  return string.split(' ')//now its an array
  .filter((word, index, arr) => word !== arr[index -1])
  .join(' ');
}