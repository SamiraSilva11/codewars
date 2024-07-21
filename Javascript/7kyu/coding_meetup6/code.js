function isSameLanguage(list) {
  const languages = new Set(list.map(developer => developer.language));
  return languages.size === 1;
}