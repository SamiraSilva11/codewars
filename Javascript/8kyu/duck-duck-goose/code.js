function duckDuckGoose(players, goose) {
    const index = (goose - 1) % players.length; // Adjust index to wrap around if goose exceeds the length of the players array
    return players[index].name;
  }