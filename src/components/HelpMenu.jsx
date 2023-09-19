import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const HelpMenu = ({ isActive, toggleHelpMenu }) => {

    return (
        <>
            <div className={isActive ? 'fixed left-0 top-0 w-full h-screen bg-black/90 z-[60]' : ''} />
            <div className={isActive
                ? 'fixed h-[90%] w-[75%] md:w-1/2 lg:w-[60%] xl:w-[40%] bg-purple-300 rounded-md p-[1.5rem] z-[61] flex flex-col items-center overflow-y-auto'
                : 'hidden'}>
                <div className='flex flex-col h-full justify-between'>
                    <h2 className='flex justify-center font-bold text-2xl sm:text-4xl p-2 mb-5 border-b border-black'>Help Menu</h2>
                    <p className='flex flex-col gap-4 text-xs sm:text-sm '>
                        <span className='pb-8'>Welcome to my Tic-Tac-Toe game! Here are some instructions to make sure you use the game properly and have fun!</span>
                        <span className='uppercase font-bold text-center'>How to play the game:</span>
                        <span>1. Find a friend and enter your names. You both can't use the same name and they must both be under 15 characters in length!</span>
                        <span>2. Above the board, you'll see whose turn it is in white text. The first player to go will be an X, and the second, an O.</span>
                        <span>3. The goal of the game is to get 3 of your shape in a row either diagonally, vertically, or horizontally! If all the squares are filled and no one has 3 in a row, the game ends in a tie! You can fill squares by simply clicking on them!</span>
                        <span>4. Once the game is over, click the "Play Again" button to play again with the same players. If you want to play with different players, hit the "New Players" button!</span>
                        <span>5. Don't forget to click the trophy icon to see who's in the top 10! Thanks for playing and enjoy!</span>
                    </p>
                    <div onClick={() => toggleHelpMenu()} className='cursor-pointer self-center py-5'>
                        <AiOutlineCheckCircle size={40} className='hover:text-white rounded-full transition-colors duration-200' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HelpMenu