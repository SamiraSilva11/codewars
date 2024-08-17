function solve(a, b) {
  return [...a]
    .filter(c => !b.includes(c))
    .concat([...b].filter(c => !a.includes(c)))
    .join('');
}