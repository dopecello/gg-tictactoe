import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'


const Leaderboard = ({ isActive, toggleLeaderboard }) => {

    const playerScores = JSON.parse(localStorage.getItem('ticTacToeScores')) || [];

    return (
        <>
            <div className={isActive ? 'fixed left-0 top-0 w-full h-screen bg-black/90 z-[60]' : ''} />
            <div className={isActive
                ? 'fixed h-3/4 w-[95%] md:w-1/2 lg:w-1/3 xl:w-1/2 bg-purple-300 rounded-md p-[1.5rem] ease-in duration-300 z-[61] flex flex-col items-center justify-center'
                : 'fixed top-[-100%] left-0 p-[1.5rem] ease-in duration-500 z-[61]'}>
                <h2 className='flex justify-center font-bold text-4xl p-2 mb-10 border-b border-black'>Leaderboard</h2>

                <table className='w-full mb-10 shadow-lg'>
                    <thead>
                        <tr>
                            <th className='text-center border border-black p-2'>Name</th>
                            <th className='border border-black p-2'>Wins</th>
                            <th className='border border-black p-2'>Losses</th>
                            <th className='border border-black p-2'>Ties</th>
                            <th className='border border-black p-2'>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {playerScores.map(p => (
                            <tr key={p.name} className='text-center'>
                                <td className='border border-black p-2'>{p.name}</td>
                                <td className='border border-black p-2'>{p.wins}</td>
                                <td className='border border-black p-2'>{p.losses}</td>
                                <td className='border border-black p-2'>{p.ties}</td>
                                <td className='border border-black p-2'>{p.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div onClick={() => toggleLeaderboard()} className='cursor-pointer absolute right-0 bottom-0 p-4'>
                    <AiOutlineCheckCircle size={40} className='hover:text-white rounded-full transition-colors duration-200' />
                </div>
            </div>
        </>
    )
}

export default Leaderboard