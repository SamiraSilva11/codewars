const findOddNames = list =>
  list.filter(({ firstName }) =>
    [...firstName].reduce((sum, char) => sum + char.charCodeAt(0), 0) % 2 !== 0
  );