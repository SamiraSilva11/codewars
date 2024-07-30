function allContinents(list) {
  return new Set(list.map(dev => dev.continent)).size === 5;
}