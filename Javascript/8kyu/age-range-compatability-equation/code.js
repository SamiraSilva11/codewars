function datingRange(age){
    let minAge;
    let maxAge;
    if (age <= 14){
      minAge = Math.floor(age - 0.10 * age)
      maxAge = Math.floor(age + 0.10 * age)
    }else {
      minAge = Math.floor((age/2)+7)
      maxAge = Math.floor((age-7)*2)
    }
    return `${minAge}-${maxAge}`
  }