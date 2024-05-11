var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears=0;
    let dogYears=0;
    for(let i = 1; i<= humanYears; i++){
      catYears += i === 1 ? 15 : i === 2  ? 9 : 4
      dogYears += i === 1 ? 15 : i === 2  ? 9 : 5
    }
    return [humanYears,catYears,dogYears];
  }
  
  