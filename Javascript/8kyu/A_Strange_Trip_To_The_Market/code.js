function isLockNessMonster(s) {
    let threeFifty = ["three fifty", "tree fiddy", "3.50"]
    for (let i = 0; i < threeFifty.length; i++) {
      if (s.toLowerCase().includes(threeFifty[i])) {
        return true; // Return true if any of the substrings is found
      }
    }
    return false
  }