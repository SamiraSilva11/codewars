function array(string) {
    let arr = string.split(",")
    return arr.length > 2 ? arr.slice(1, -1).join(' ') : null
  }