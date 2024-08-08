function solve(arr){  
  return arr.map(word => 
  [...word].filter((char, index) => 
    index + 1 === (char.toLowerCase().charCodeAt(0) - 96)
  ).length
);
};