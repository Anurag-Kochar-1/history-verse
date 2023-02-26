"use client"
import { AppContext } from '@/context/AppContext'
import { db } from '@/firebaseConfig'
import { doc, getDoc, increment, updateDoc } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import { IoCloseSharp } from "react-icons/io5"
import { TestModelQuestions } from "../../constants/TestModelQuestions/TestModelQuestions"


const TestModel = () => {
    const { userDetails, isTrainingModelOpen, setIsTrainingModelOpen } = useContext(AppContext)
    const [isTestModalOpen, setIsTestModalOpen] = useState<boolean>(false)
    const [trainingTestData, setTrainingTestData] = useState<any | null>(null)
    const [timer, setTimer] = useState<number>(60)
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0);
    const [optionChosen, setOptionChosen] = useState<string>("");
    const [score, setScore] = useState<number>(0)
    const [isTestCompleted, setIsTestCompleted] = useState<boolean>(false)

    async function getTrainingTest() {
        const trainingTestDocRef = doc(db, `/subjects/indianArmy1/classes/JD7UPZr1r7pR6YyKxHjL/tests/eXEDJZMrRhLlYyAiezft`)
        const res = await getDoc(trainingTestDocRef)
        setTrainingTestData(res?.data())
        console.log(`setTrainingTestData `)
        console.log(res?.data())
    }


    const nextQuestion = () => {
        if (TestModelQuestions?.questions[currentQuestionNumber].answer == optionChosen) {
            setScore(score + 1);
            setTimer(100)
            setCurrentQuestionNumber(currentQuestionNumber + 1);
            setOptionChosen("")
        }

        setCurrentQuestionNumber(currentQuestionNumber + 1);
        setOptionChosen("")



    }
    const finishTest = async () => {
        if (TestModelQuestions?.questions[currentQuestionNumber].answer == optionChosen) {
            setScore(score + 1);
            setTimer(0)
        }

        setIsTrainingModelOpen(false)
        setTimer(0)
        setIsTestCompleted(true)

        const notify = () => toast(`${score * 50} Coins Rewarded`, {
            duration: 4000,
            icon: '👏',
        });
        notify()



        const userRef = doc(db, "users", userDetails?.uid as string)
        await updateDoc(userRef, {
            userCoins: increment(score * 50)
        })



    }

    useEffect(() => {
        let timerIntervalFunc: any;

        timerIntervalFunc = setInterval(() => {
            if (isTestModalOpen && timer != 0) setTimer(timer - 1)
            if (isTestModalOpen && timer == 0) {
                if (currentQuestionNumber != trainingTestData?.questions.length - 1) {
                    setCurrentQuestionNumber(currentQuestionNumber + 1)
                    setTimer(100)
                }
            }
        }, 1000)

        return () => clearInterval(timerIntervalFunc)

    })

    useEffect(() => {
        getTrainingTest()
    }, [])


    return (
        <>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />

            {isTrainingModelOpen && (
                <div className='z-50 fixed inset-0 w-full h-full bg-black flex justify-center items-center'>
                    <div className='z-30 w-[90%] h-[80vh] lg:w-[80%] lg:h-[80vh] bg-light rounded-md flex flex-col items-center justify-start overflow-x-hidden overflow-y-scroll'>
                        <div className='w-full h-16 flex justify-between items-center bg-brand rounded-tr-md rounded-tl-md px-5'>
                            <span> {null} </span>
                            <p className='text-xl text-white font-nunito font-semibold'> Timer : {`${timer} seconds`} </p>
                            <IoCloseSharp size={"1.5rem"} onClick={() => setIsTrainingModelOpen(false)} className="text-red-500 hover:cursor-pointer" />
                        </div>

                        <div className='w-full h-full flex flex-col items-center justify-between py-10'>
                            <div className='w-full flex flex-col justify-between items-center'>
                                <p className='text-Dark text-4xl font-nunito font-semibold text-center px-5'>  Question {currentQuestionNumber + 1} : {TestModelQuestions?.questions[currentQuestionNumber]?.prompt} </p>

                                <div className='w-full flex flex-col items-center justify-center space-y-3 my-10'>
                                    {TestModelQuestions?.questions[currentQuestionNumber]?.options?.map((option: any) => {
                                        return (
                                            <button
                                                onClick={() => {
                                                    setOptionChosen(option?.option)
                                                }}
                                                type='button'
                                                title='option'
                                                key={option?.optionValue}
                                                className={`w-[90%] h-12 text-center bg-gray-200 ${optionChosen == option?.option && "border-4 border-brand"} rounded-md`}>
                                                <span className='text-base text-black font-open_sans font-medium'> {option?.option} - {option?.optionValue} </span>
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>


                            <div className='w-full flex items-center justify-center space-x-3'>
                                {currentQuestionNumber == TestModelQuestions?.questions?.length - 1 ? (
                                    <button
                                        onClick={finishTest}
                                        type='button'
                                        title='submitBtn'
                                        className=' outline-none border-none w-28 h-10 bg-brand text-white font-nunito font-semibold text-base rounded-md'>
                                        Submit
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => {
                                            if (optionChosen) {
                                                nextQuestion()
                                            } else if (!optionChosen) {
                                                const notify = () => toast(`Choose an Option`, {
                                                    duration: 2000,
                                                    icon: '👏',
                                                });
                                                notify()
                                            }
                                        }}
                                        type='button'
                                        title='next'
                                        className=' outline-none border-none w-28 h-10 bg-brand text-white font-nunito font-semibold text-base rounded-md'>
                                        Next
                                    </button>
                                )}

                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default TestModel