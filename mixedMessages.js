function goalsScored() {
    let scoreMessage = ['You will score', 'You will not score but you will assit', 'You will not score'];
    let randomScoreMessage = Math.floor(Math.random() * 3);

    let goalsOrAssits = Math.floor((Math.random() * 4) + 1);

    if (randomScoreMessage !== 2) {
        return `${scoreMessage[randomScoreMessage]} ${goalsOrAssits}`;
    } else {
        return scoreMessage[randomScoreMessage];
    }
}

console.log(goalsScored());
