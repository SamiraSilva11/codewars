function addUsername(list) {
  const currentYear = new Date().getFullYear(); // Get the current year

  return list.map(developer => ({
    ...developer,
    username: `${developer.firstName.toLowerCase()}${developer.lastName.toLowerCase().replace('.', '')}${currentYear - developer.age}`
  }));
}