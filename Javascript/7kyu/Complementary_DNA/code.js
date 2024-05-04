function dnaStrand(dna) {
    let complementary = '';
    for (let i = 0; i < dna.length; i++) {
      if (dna[i] === 'A') {
        complementary += 'T';
      } else if (dna[i] === 'T') {
        complementary += 'A';s
      } else if (dna[i] === 'C') {
        complementary += 'G';
      } else if (dna[i] === 'G') {
        complementary += 'C';
      }
    }
    return complementary;
  }