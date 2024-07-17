function countDevelopers(list) {
  return list.reduce((count, person) => {
    // Increment count if the person is from Europe and a developer
    return person.continent === 'Europe' && person.language === 'JavaScript' ? count + 1 : count;
  }, 0); // Initial count is 0
}


//best practice
function countDevelopers(list) {
  return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length
}