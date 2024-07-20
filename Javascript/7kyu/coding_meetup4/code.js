function getFirstPython(list) {
  const pythonDevelopers = list.filter(x=>x.language=='Python')
  
  if (pythonDevelopers.length === 0){
    return `There will be no Python developers`
  }else {
    return `${pythonDevelopers[0].firstName}, ${pythonDevelopers[0].country}`;
  }
}