import React, { useState } from 'react';
import { BsInfoCircle } from 'react-icons/bs'
import { LuTrophy } from 'react-icons/lu'
import Leaderboard from './Leaderboard';

const Header = () => {

    const [isLeaderboardActive, setLeaderboardActive] = useState(false);

    const handleLeaderboard = () => {
        setLeaderboardActive(!isLeaderboardActive);
    }


    return (
        <>
            <Leaderboard
                isActive={isLeaderboardActive}
                toggleLeaderboard={handleLeaderboard}/>
            <div className='fixed top-0 left-0 w-full flex flex-row justify-between bg-purple-300 text-center p-4 z-50'>
                <BsInfoCircle size={33} className='cursor-pointer hover:text-white' />
                <LuTrophy size={32} className='cursor-pointer hover:text-white' onClick={handleLeaderboard} />
            </div>
        </>
    );
}

export default Header;