function getAverageAge(list) {
  return Math.round(list.reduce((acc, x) => acc + x.age, 0)/list.length)
}