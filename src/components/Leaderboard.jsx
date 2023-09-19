import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'


const Leaderboard = ({ isActive, toggleLeaderboard }) => {

    const playerScores = JSON.parse(localStorage.getItem('ticTacToeScores')) || [];

    const sortedScores = playerScores.sort((a, b) => b.score - a.score);
    const top10Scores = sortedScores.slice(0, 10);

    return (
        <>
            <div className={isActive ? 'fixed left-0 top-0 w-full h-screen bg-black/90 z-[60]' : ''} />
            <div className={isActive
                ? 'fixed h-[80%] w-[95%] md:w-1/2 lg:w-1/3 xl:w-1/2 bg-purple-300 rounded-md p-[1.5rem] ease-in duration-300 z-[61] flex flex-col items-center justify-center'
                : 'hidden'}>
                <h2 className='flex justify-center font-bold text-4xl p-2 mb-10 border-b border-black self-stretch'>Leaderboard</h2>
                <div className='overflow-y-auto mb-2 flex-grow'>
                    <table className='w-full mb-10 shadow-lg'>
                        <thead>
                            <tr className='text-xs'>
                                <th className='text-center border border-black p-1 sm:p-2'>Name</th>
                                <th className='border border-black p-1 sm:p-2'>Wins</th>
                                <th className='border border-black p-1 sm:p-2'>Losses</th>
                                <th className='border border-black p-1 sm:p-2'>Ties</th>
                                <th className='border border-black p-1 sm:p-2'>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {top10Scores.map(p => (
                                <tr key={p.name} className='text-center text-xs'>
                                    <td className='border border-black p-1 sm:p-2'>{p.name}</td>
                                    <td className='border border-black p-1 sm:p-2'>{p.wins}</td>
                                    <td className='border border-black p-1 sm:p-2'>{p.losses}</td>
                                    <td className='border border-black p-1 sm:p-2'>{p.ties}</td>
                                    <td className='border border-black p-1 sm:p-2'>{p.score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div onClick={() => toggleLeaderboard()} className='cursor-pointer absolute right-0 bottom-0 p-1'>
                    <AiOutlineCheckCircle size={40} className='hover:text-white rounded-full transition-colors duration-200' />
                </div>
            </div>
        </>
    )
}

export default Leaderboard