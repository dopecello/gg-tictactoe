export const updatePlayerScore = (playerName, result) => {
    const existingData = JSON.parse(localStorage.getItem('ticTacToeScores')) || [];
    let playerData = existingData.find(player => player.name === playerName);

    if (!playerData) {
        playerData = {
            name: playerName,
            wins: 0,
            losses: 0,
            ties: 0,
            score: 0
        };
        existingData.push(playerData);
    }

    switch (result) {
        case 'win':
            playerData.wins += 1;
            playerData.score += 5;
            break;
        case 'loss':
            playerData.losses += 1;
            playerData.score += 1;
            break;
        case 'tie':
            playerData.ties += 1;
            playerData.score += 2;
            break;
        default:
            break;
    }

    localStorage.setItem('ticTacToeScores', JSON.stringify(existingData));
};