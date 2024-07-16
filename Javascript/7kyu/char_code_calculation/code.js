function calc(x){
  let total1 = [...x].map(char => char.charCodeAt(0)).join('');
  let total2 = total1.replace(/7/g, '1');
  
  let sum1 = total1.split('').reduce((acc, digit) => acc + Number(digit), 0);
  let sum2 = total2.split('').reduce((acc, digit) => acc + Number(digit), 0);
  
  return sum1 - sum2;
}