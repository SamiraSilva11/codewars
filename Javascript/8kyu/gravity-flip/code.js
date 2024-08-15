const flip=(d, a)=>{
  return d === 'R' ? a.sort((x, y) => x - y) : a.sort((x, y) => y - x);
}