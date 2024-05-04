// Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin) {
    // Initialize the decimal number to 0
    let dec = 0;
    
    // Iterate through each digit of the binary number
    for (let i = bin.length - 1; i >= 0; i--) {
      // Convert the character to a number
      const digit = parseInt(bin[i]);
      
      // Multiply the digit by its corresponding power of 2 and add it to the decimal number
      dec += digit * Math.pow(2, bin.length - 1 - i);
    }
    
    return dec;
  }


//best practice:

function binToDec(bin){
    return parseInt(bin,2);
  }