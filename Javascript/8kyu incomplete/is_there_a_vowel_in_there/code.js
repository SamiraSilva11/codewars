// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(a){
    const vowels = {
        97: 'a',
        101: 'e',
        105: 'i',
        111: 'o',
        117: 'u'
    };

    a.forEach((num, index) => {
        // Check if the number exists in the vowels object
        if (vowels[num] !== undefined) {
            // Replace the number with the corresponding vowel string
            a[index] = vowels[num];
        }
    });
    return a;
}