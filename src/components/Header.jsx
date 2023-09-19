import React, { useState } from 'react';
import { BsInfoCircle } from 'react-icons/bs'
import { LuTrophy } from 'react-icons/lu'
import Leaderboard from './Leaderboard';
import HelpMenu from './HelpMenu';

const Header = () => {

    const [isLeaderboardActive, setLeaderboardActive] = useState(false);

    const handleLeaderboard = () => {
        setLeaderboardActive(!isLeaderboardActive);
    }

    const [isHelpMenuActive, setHelpMenuActive] = useState(false);

    const handleHelpMenu = () => {
        setHelpMenuActive(!isHelpMenuActive);
    }


    return (
        <>
            <HelpMenu
                isActive={isHelpMenuActive}
                toggleHelpMenu={handleHelpMenu}
            />
            <Leaderboard
                isActive={isLeaderboardActive}
                toggleLeaderboard={handleLeaderboard}
            />
            <div className='fixed top-0 left-0 w-full flex flex-row justify-between lg:justify-evenly bg-purple-300 text-center p-4 z-50'>
                <BsInfoCircle size={33} className='cursor-pointer hover:text-white' onClick={handleHelpMenu} />
                <LuTrophy size={32} className='cursor-pointer hover:text-white' onClick={handleLeaderboard} />
            </div>
        </>
    );
}

export default Header;