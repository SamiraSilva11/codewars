function pipeFix(numbers){
    const min = numbers[0];
    const max = numbers[numbers.length - 1];
    const result = [];
    
    for (let i = min; i <= max; i++) {
      result.push(i);
    }
    
    return result;
  }