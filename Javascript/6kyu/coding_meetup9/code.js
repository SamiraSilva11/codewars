function isAgeDiverse(list) {
  return [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].every(min => list.some(dev => dev.age >= min && dev.age < min + 10) || (min === 100 && list.some(dev => dev.age >= 100)));
}