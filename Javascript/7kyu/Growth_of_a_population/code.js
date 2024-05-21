function nbYear(p0, percent, aug, p) {
  let pop = p0;
  let years = 0;
  while (pop < p) {
      pop = Math.floor(pop + (pop * (percent / 100)) + aug);
      years++;
  }
  return years;              
}

