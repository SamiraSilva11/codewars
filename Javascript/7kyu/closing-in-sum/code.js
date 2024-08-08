function closingInSum(n) {
  let nStr = n.toString();
  let length = nStr.length;
  let sum = 0;
  
  for (let i = 0; i < Math.ceil(length / 2); i++) {
    let pair = i === length - 1 - i ? nStr[i] : nStr[i] + nStr[length - 1 - i];
    sum += parseInt(pair);
  }

  return sum;
  
}


// best practice
const closingInSum = n =>
  [...`${n}`].reduce((sum, dgt, idx, arr) => sum + dgt * 10 ** (++idx <= arr.length/2), 0);