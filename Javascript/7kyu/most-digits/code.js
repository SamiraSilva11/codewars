const findLongest = array => 
    array.reduce((longest, num) => 
      String(num).length > String(longest).length ? num : longest
    );