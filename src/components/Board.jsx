import React, { useState } from 'react';
import { IoMdRadioButtonOff } from 'react-icons/io'
import { AiOutlineClose } from 'react-icons/ai'
import PlayerRegistration from './PlayerRegistration';

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [winner, setWinner] = useState(null);
    const [players, setPlayers] = useState({
        X: null,
        O: null
    });
    const [gameStarted, setGameStarted] = useState(false);

    const handlePlayersRegistration = (playerX, playerO) => {
        setPlayers({
            X: playerX,
            O: playerO
        });
        setGameStarted(true);
    };

    const checkWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const checkTie = () => {
        return squares.every(square => square !== null) && winner === null;
    };

    const handleSquareClick = index => {
        if (!gameStarted || squares[index] || winner) return;

        const newSquares = squares.slice();
        newSquares[index] = isXNext ? 'X' : 'O';
        setSquares(newSquares);

        const winningPlayer = checkWinner(newSquares);
        if (winningPlayer) {
            setWinner(players[winningPlayer]);
            return;
        }

        setIsXNext(!isXNext);
    };

    const isTie = checkTie();

    const isCurrentPlayerDisplayVisible = gameStarted && !winner && isTie === false;

    const squareStyles = [
        "border-slate-500/40 border-b-4 border-r-4",
        "border-slate-500/40 border-t-4 border-r-4 border-b-4",
        "border-slate-500/40 border-t-4 border-r-4",
        "border-slate-500/40 border-l-4 border-b-4 border-r-4",
        "border-slate-500/40 border-4",
        "border-slate-500/40 border-l-4 border-t-4 border-r-4",
        "border-slate-500/40 border-l-4 border-b-4",
        "border-slate-500/40 border-t-4 border-l-4 border-b-4",
        "border-slate-500/40 border-t-4 border-l-4"
    ];

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-purple-300">
            {!gameStarted ? (
                <PlayerRegistration onPlayersRegistered={handlePlayersRegistration} />
            ) : (
                <>
                    <div className="text-2xl font-bold h-10 mb-4">
                        {isCurrentPlayerDisplayVisible ? `${isXNext ? players.X : players.O}'s turn` : ''}
                    </div>

                    <div className="grid grid-rows-3 grid-flow-col gap-0 mb-4">
                        {squares.map((square, index) => (
                            <div
                                key={index}
                                className={`square w-24 h-24 flex justify-center items-center bg-purple-300 transition-opacity duration-500 ${squareStyles[index]}`}
                                onClick={() => handleSquareClick(index)}
                            >
                                {square === 'X' && <AiOutlineClose size={38} className='text-slate-700' />}
                                {square === 'O' && <IoMdRadioButtonOff size={36} className='text-slate-700' />}
                            </div>
                        ))}
                    </div>

                    <div className="text-2xl font-bold h-10">
                        {winner ? `${winner} wins!` : isTie ? 'It\'s a tie!' : ''}
                    </div>
                </>
            )}
        </div>
    );
}

export default Board;
