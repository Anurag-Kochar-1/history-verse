"use client"

import React, { useContext } from 'react'
import { AppContext } from '@/context/AppContext'
import { SignInWithGoogleFunction } from '@/service/AuthService'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FaFireAlt } from "react-icons/fa"

const SubjectCard = ({ subject }: { subject: any }) => {
    const { userDetails } = useContext(AppContext)
    const rotuer = useRouter()

    const getBGImage = (className: string) => {
        switch (className) {
            case "Ancient Egype":
                return `/egptianClassCardBg2.jfif`
            case "Ancient Japan":
                return `/japaneseClassCardBg1.jfif`
            case "Ancient India":
                return `/indianClassCardBg1.jpg`

            default:
                return `/egptianClassCardBg2.jfif`
        }
    }

    const getTextStyles = (className: string) => {
        switch (className) {
            case "Ancient Egypt":
                return `text-white`
            case "Ancient Japan":
                return `text-white`
            case "Ancient India":
                return `text-white`

            default:
                return `text-white`
        }
    }

    return (
        <div
            onClick={() => {
                if (userDetails.uid !== null) {
                    rotuer.push(`/subject/dOdxP8qX62HVPLOeWOPi`)
                } else {
                    SignInWithGoogleFunction()
                    rotuer.push(`/subject/dOdxP8qX62HVPLOeWOPi`)
                }

            }}
            className={`${subject.className === 'Ancient Egypt' ? 'w-60 h-60 lg:w-96 lg:h-96 my-5' : "w-52 h-52 lg:w-80 lg:h-80"} relative rounded-md bg-brand m-2 flex justify-start items-end hover:scale-105 hover:cursor-pointer`}>

            {subject?.className === 'Ancient Egypt' && (
                <div className='z-20 absolute px-5 py-1 bg-red-500 -top-2 -left-2 text-white font-montserrat text-sm font-medium rounded-md flex justify-center items-center space-x-3'>
                    <FaFireAlt className='text-white' size={"0.9rem"} />
                    Most Popular
                </div>
            )}

            <Image
                src={`${getBGImage(subject.className)}`}
                alt="image"
                width={300}
                height={300}
                className='z-10 absolute w-full h-full object-cover bg-blend-multiply rounded-md blur-sm hover:blur-none active:hover:blur-none'
                draggable="false"
            />
            <h3 className={`z-10 text-white font-bold font-montserrat text-4xl p-4`}> {subject?.className} </h3>
        </div>
    )
}

export default SubjectCard