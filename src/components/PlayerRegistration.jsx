import React, { useState } from 'react'

const PlayerRegistration = ({ onPlayersRegistered }) => {

    const [playerX, setPlayerX] = useState("");
    const [playerO, setPlayerO] = useState("");
    const [isPlayerXRegistered, setPlayerXRegistered] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handlePlayerX = () => {
        if (playerX.trim()) {
            setPlayerXRegistered(true);
        }
    };

    const handleStartGame = () => {

        if (playerO.trim() === "") {
            setErrorMessage("Please enter a name for Player 2!")
            return;
        }
        if (playerO.toLowerCase() === playerX.toLowerCase()) {
            setErrorMessage("Players must have different names.");
            return;
        }

        setErrorMessage("");
        onPlayersRegistered(playerX, playerO);

    };

    const isPlayerXValid = playerX.length > 0 && playerX.length <= 15;

    return (
        <div>
            <div className={isPlayerXRegistered ? 'hidden' : ''}>
                <h2 className='text-center font-bold text-2xl pb-10'>Player 1</h2>
                <input
                    type='text'
                    value={playerX}
                    onChange={e => setPlayerX(e.target.value)}
                    maxLength={15}
                    className='text-center border-b-2 border-black bg-purple-300 focus:outline-none w-[20rem]'
                />
                <div className="text-red-500 text-xs text-center h-2">{errorMessage}</div>
                <div
                    className={`flex justify-center mx-auto mt-10 text-center p-3 border-2 border-black w-24 
                                ${isPlayerXValid ? 'hover:bg-purple-800 hover:text-white transition-colors cursor-pointer' : 'cursor-not-allowed'}`}
                    onClick={isPlayerXValid ? handlePlayerX : null}
                >
                    Submit
                </div>
            </div>
            <div className={isPlayerXRegistered ? '' : 'hidden'}>
                <h2 className='text-center font-bold text-2xl pb-10'>Player 2</h2>
                <input
                    type='text'
                    value={playerO}
                    onChange={e => setPlayerO(e.target.value)}
                    maxLength={15}
                    className='text-center border-b-2 border-black bg-purple-300 focus:outline-none w-[20rem]'

                />
                <div className="text-red-500 text-xs text-center h-2">{errorMessage}</div>
                <div
                    className={`flex justify-center mx-auto mt-10 text-center p-3 border-2 border-black w-24 
                                ${isPlayerXValid ? 'hover:bg-purple-800 hover:text-white transition-colors cursor-pointer' : 'cursor-not-allowed'}`}
                    onClick={isPlayerXValid ? handleStartGame : null}
                >
                    Let's Go!
                </div>
            </div>
        </div>
    );
}

export default PlayerRegistration;