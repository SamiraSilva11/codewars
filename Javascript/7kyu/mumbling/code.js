function accum(s) {
	return s 
    .split('') // Split the string into an array of characters
    .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index)) // Accumulate each character
    .join('-'); // Join the accumulated characters with hyphens
}