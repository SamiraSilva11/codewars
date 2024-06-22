function capitalize(s){
  return [
    s.split('').map((char, index) => index % 2 === 0 ? char.toUpperCase() : char).join(''),
    s.split('').map((char, index) => index % 2 !== 0 ? char.toUpperCase() : char).join('')
  ];
};