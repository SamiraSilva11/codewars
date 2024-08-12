function removeRotten(bagOfFruits){
  return bagOfFruits ? bagOfFruits .map(x=>x.toLowerCase().replace(/rotten/ig,"")) : [];
}