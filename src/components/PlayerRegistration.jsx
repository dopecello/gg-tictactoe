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
                placeholder="Player X's name"
                value={playerX}
                onChange={e => setPlayerX(e.target.value)}
            />
            <input
                placeholder="Player O's name"
                value={playerO}
                onChange={e => setPlayerO(e.target.value)}
            />
            <button onClick={handleSubmit}>Start Game</button>
        </div>
    );
}

export default PlayerRegistration;