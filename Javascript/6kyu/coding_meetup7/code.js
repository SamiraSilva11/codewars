function findSenior(list) {
  const maxAge = Math.max(...list.map(dev => dev.age));
  return list.filter(dev => dev.age === maxAge);  
}