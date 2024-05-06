function sum (numbers) {
    if (!numbers || numbers.length === 0){
      return 0;
    }else{
      return numbers.reduce((total, num) => total +num,0);
    }
    
 };