function points(games) {
    return games.reduce((totalPoints, match) => {
          const [ourScore, opponentScore] = match.split(':').map(Number);
          return totalPoints + (ourScore > opponentScore ? 3 : ourScore === opponentScore ? 1 : 0);
      }, 0);
  }