function toCamelCase(str) {
    // Split the string by dashes or underscores
    return str.split(/[-_]/).map((word, index) => {
      // The first word retains its original capitalization
      if (index === 0) {
        return word;
      }
      // Capitalize the first letter of each subsequent word
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
  }



  //Best practice
  function toCamelCase(str){
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
  }