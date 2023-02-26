/* eslint react/no-unescaped-entities */
"use client"


import React, { useState } from 'react'
import Button from '../Button/Button'

const OnboardingTour = () => {
    const [isOnboardingModalVisible, setIsOnboardingModalVisible] = useState<boolean>(true)
    const [isOnboardingScreenOneVisible, setIsOnboardingScreenOneVisible] = useState<boolean>(true)
    const [isOnboardingScreenTwoVisible, setIsOnboardingScreenTwoVisible] = useState<boolean>(false)
    const [isOnboardingScreenThirdVisible, setIsOnboardingScreenThirdVisible] = useState<boolean>(false)

    return (
        <>
            {isOnboardingModalVisible && (
                <div className='z-20 fixed w-full h-full bg-black/[.80] flex justify-center items-center'>
                    <div className='z-50 w-[70%] sm:w-[60%] md:w-[50%] lg:w-[50%] xl:w-[40%] 2xl:w-[35%]  bg-white rounded-md flex flex-col items-center justify-between text-center p-4 space-y-6'>

                        {isOnboardingScreenOneVisible && (
                            <>
                                <div className='w-full  flex flex-col items-center justify-center space-y-3'>
                                    <p className='text-2xl font-nunito font-semibold text-Brand'> Loading Metaverse can take 30-50 seconds, please wait </p>
                                    <p className='text-lg font-montserrat font-semibold text-red-500'> Don't Close Tab or minimize {"<3"} </p>
                                </div>
                                <Button
                                    onClick={() => {
                                        setIsOnboardingScreenOneVisible(false)
                                        setIsOnboardingScreenTwoVisible(true)
                                    }}
                                > Next </Button>
                            </>
                        )}

                        {isOnboardingScreenTwoVisible && (
                            <>
                                <div className='w-full  flex flex-col items-center justify-center space-y-3'>
                                    <p className='text-2xl font-montserrat font-semibold text-dark'> Click on 3D Models to interact with them </p>
                                </div>
                                <Button
                                    onClick={() => {
                                        setIsOnboardingScreenTwoVisible(false)
                                        setIsOnboardingScreenThirdVisible(true)
                                    }}
                                > Next </Button>
                            </>
                        )}

                        {isOnboardingScreenThirdVisible && (
                            <>
                                <div className='w-full  flex flex-col items-center justify-center space-y-3'>
                                    <p className='text-2xl font-montserrat font-semibold text-dark'> Start Training Test after exploring </p>
                                </div>
                                <Button
                                    onClick={() => {
                                        setIsOnboardingScreenThirdVisible(false)
                                        setIsOnboardingModalVisible(false)
                                    }}>
                                    Start it
                                </Button>
                            </>
                        )}

                    </div>
                </div>
            )}
        </>
    )
}

export default OnboardingTour