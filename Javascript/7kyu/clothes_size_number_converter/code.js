function sizeToNumber(size) {
    // Define base sizes
    const baseSizes = {
      's': 36,
      'm': 38,
      'l': 40
    };
  
    // Validate size with possible extra 'x'
    const match = /^x*(s|m|l)$/.exec(size);
    
    if (!match) {
      return null; // Invalid size or containing invalid characters
    }
  
    const baseSize = match[1];
    const numXs = size.length - baseSize.length; // Count number of 'x' modifiers
  
    // Calculate the final size based on the base size
    if (baseSize === 'm') {
      return (numXs === 0) ? 38 : null; // For size 'm', return 38 if no 'x' modifier
    } else if (baseSize === 'l') {
      return 40 + (numXs * 2);
    } else if (baseSize === 's') {
      return 36 - (numXs * 2);
    }
  
    return null; // Default to null in case of unexpected values
  }



//BEST PRACTICE

function sizeToNumber(size) {
  if (size == "s") return 36;
  if (size == "m") return 38;
  if (size == "l") return 40;
  const x = size.match(/x/g)?.length;   // Count the number of 'x' characters
  if (/^x+s$/.test(size)) return 36 - (x * 2);
  if (/^x+l$/.test(size)) return 40 + (x * 2);
  return null // Return null for invalid sizes
}