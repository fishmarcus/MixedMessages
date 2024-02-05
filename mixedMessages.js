let goalsOrAssits = 0;

function goalsScored() {
    let scoreMessage = ['You will score', 'You will not score but you will assit', 'You will not score'];
    let randomScoreMessage = Math.floor(Math.random() * 3);

    if (randomScoreMessage !== 2) {
        goalsOrAssits = Math.floor((Math.random() * 4) + 1);
        return `${scoreMessage[randomScoreMessage]} ${goalsOrAssits}`;
    } else {
        return scoreMessage[randomScoreMessage];
    }
};

console.log(goalsScored());

function matchPerformance() {
    let performanceReview = ['Abysmal', 'Poor', 'Mediocre', 'Below-Average', 'Average', 'Decent', 'Good', 'Impressive', 'Outstanding', 'Exceptional'];
    let randomPerformance = Math.floor(Math.random() * 10);

    return `You will have a ${performanceReview[randomPerformance]} performance`;
};

console.log(matchPerformance());

function teamPerformance() {
    let oppositionScore = Math.floor(Math.random() * 5)
    let teamScore = Math.floor(Math.random() * 4) + goalsOrAssits;

    if (teamScore > oppositionScore) {
        return `The team will win ${teamScore} - ${oppositionScore}`;
    } else if (teamScore < oppositionScore) {
        return `The team will lose ${oppositionScore} - ${teamScore}`;
    } else {
        return `The team will draw ${teamScore} - ${oppositionScore}`;
    }
};

console.log(teamPerformance());