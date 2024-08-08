function findNeedle(haystack) {
    let i =0;
    for(i=0; i<haystack.length; i++){
      if (haystack[i] === "needle"){
       return `found the needle at position ${i}`;
      }
    }
    return "needle not found";
  }