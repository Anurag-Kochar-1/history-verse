"use client"

import React, { useContext } from 'react'
import { AppContext } from '@/context/AppContext'
import { SignInWithGoogleFunction } from '@/service/AuthService'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const SubjectCard = ({ subject }: { subject: any }) => {
    const { userDetails } = useContext(AppContext)
    const rotuer = useRouter()
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
            className={`${subject.className === 'Ancient Egypt' ? 'w-60 h-60 lg:w-96 lg:h-96' : "w-52 h-52 lg:w-80 lg:h-80"} relative rounded-md bg-brand m-2 flex justify-start items-end hover:scale-105 hover:cursor-pointer`}>

            {subject?.classLogos && (
                <Image
                    src={subject?.classLogos[Math.floor(Math.random() * 1)]}
                    alt="image"
                    width={300}
                    height={300}
                    className='z-10 absolute w-full h-full object-cover bg-blend-multiply rounded-md'
                    draggable="false"
                />
            )}
            <h3 className='z-10 text-white font-semibold font-montserrat text-2xl p-4'> {subject?.className} </h3>
        </div>
    )
}

export default SubjectCard