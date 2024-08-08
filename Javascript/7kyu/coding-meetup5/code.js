function countLanguages(list) {
  return list.reduce((acc, x) => {
    acc[x.language] = (acc[x.language] || 0) + 1
    return acc
    }, {})
}