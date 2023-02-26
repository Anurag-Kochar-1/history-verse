"use client"

import React, { useContext } from 'react'
import { AiOutlineLogout } from "react-icons/ai"
import { AppContext } from '@/context/AppContext'
import Image from 'next/image'
import { signOutUser } from '../../service/AuthService'

const ProfileCard = ({ place }: { place: string }) => {
    const { userDetails, setuserDetails } = useContext(AppContext)

    return (
        <div className={`${place == "navbar" && "hidden md:inline-flex"} flex justify-center items-center space-x-3`}>
            {/* {userDetails?.displayPicture && (
                <Image
                    src={userDetails?.displayPicture as string}
                    alt="dp"
                    width={150}
                    height={150}
                    className="w-9 h-9 rounded-full"
                />
            )} */}
            <p className='font-open_sans text-base font-medium'> {userDetails?.userName} </p>
            <AiOutlineLogout
                size={"1.2rem"}
                className="text-red-600 cursor-pointer"
                onClick={() => {
                    signOutUser()
                    setuserDetails({
                        isUser: false,
                        userName: null,
                        uid: null,
                        displayPicture: null,
                        email: null
                    })
                }}
            />
        </div>
    )
}

export default ProfileCard