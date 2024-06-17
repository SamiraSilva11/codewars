const isIsogram = str => {
  str = str.toLowerCase().replace(/\s+/g, ''); // Convert to lowercase and remove spaces
  return new Set(str).size === str.length; // Compare the size of the Set with the string length
};