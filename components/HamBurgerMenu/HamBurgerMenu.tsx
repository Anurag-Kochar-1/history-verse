import React from 'react'
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx"

interface IProps {
    isHamBurgerMenuVisible: boolean
    setIsHamBurgerMenuVisible: React.Dispatch<React.SetStateAction<boolean>>
}



const HamBurgerMenu = ({ isHamBurgerMenuVisible, setIsHamBurgerMenuVisible }: IProps) => {
    return (
        <div className={`z-40 fixed top-0 left-0 h-full w-[100%] bg-brand flex flex-col items-start justify-between ${isHamBurgerMenuVisible ? "translate-x-0" : "translate-x-full"} ease-in-out duration-500`}>
            <div className='w-full flex flex-col justify-center items-center px-4 py-4'>
                <div className='w-full flex justify-end items-center space-x-2'>
                    {!isHamBurgerMenuVisible ? (
                        <div className='flex justify-center items-center w-10 h-10 bg-Darkest rounded-full '>
                            <RxHamburgerMenu className='w-6 h-6 text-white  hover:cursor-pointer' onClick={() => setIsHamBurgerMenuVisible(!isHamBurgerMenuVisible)} />
                        </div>
                    ) : (
                        <div className='flex justify-center items-center w-10 h-10 rounded-full bg-Darkest'>
                            <RxCross1 className='w-6 h-6 text-white  hover:cursor-pointer' onClick={() => setIsHamBurgerMenuVisible(!isHamBurgerMenuVisible)} />
                        </div>
                    )}


                </div>
            </div>
        </div>
    )
}

export default HamBurgerMenu