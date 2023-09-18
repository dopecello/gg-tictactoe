import React, { useState } from 'react'

const PlayerRegistration = ({ onPlayersRegistered }) => {

    const [playerX, setPlayerX] = useState("");
    const [playerO, setPlayerO] = useState("");

    const handleSubmit = () => {
        if (playerX.trim() && playerO.trim()) {
            onPlayersRegistered(playerX, playerO);
        }
    };

    return (
        <div>
            <input
                placeholder="Player 1"
                value={playerX}
                onChange={e => setPlayerX(e.target.value)}
            />
            <input
                placeholder="Player 2"
                value={playerO}
                onChange={e => setPlayerO(e.target.value)}
            />
            <button onClick={handleSubmit}>Start Game</button>
        </div>
    );
}

export default PlayerRegistration;