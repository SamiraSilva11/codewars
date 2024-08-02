function isLanguageDiverse(list) {
  list = list.map(dev => dev.language);
  const num = [...new Set(list)].map(el => list.filter(e => e === el).length);
  return Math.max(...num) / Math.min(...num) <= 2;
}