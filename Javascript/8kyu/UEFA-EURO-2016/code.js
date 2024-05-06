function uefaEuro2016(teams, scores) {
    let result;
    if (scores[0] > scores[1]) {
        result = `${teams[0]} won!`;
    } else if (scores[1] > scores[0]) {
        result = `${teams[1]} won!`;
    } else {
        result = "teams played draw.";
    }
    return `At match ${teams[0]} - ${teams[1]}, ${result}`;
}