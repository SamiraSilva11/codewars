function findAdmin(list, lang) {
  return list.filter(x=>x.githubAdmin === 'yes' && x.language === lang)
}