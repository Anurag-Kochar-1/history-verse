import Image from 'next/image'
import React from 'react'
import SearchBar from '../SearchBar/SearchBar'

const Leaderboard = ({ leaderboardData }: { leaderboardData: any }) => {
    return (
        <section className='w-[90%] flex flex-col justify-start items-center space-x-2 py-10'>
            <h3 className='text-4xl text-black font-montserrat font-bold text-center'>Leaderboard</h3>



            <div className='w-full flex flex-col justify-start items-center my-10'>
                <div className='w-full md:w-[60%] flex justify-between items-center  m-2 rounded-lg text-center'>
                    <SearchBar />
                </div>
                <div className='w-full bg-brand md:w-[60%] flex justify-between items-center p-4 m-2 rounded-lg text-center'>
                    <span className='font-bold text-xl font-montserrat text-white'> DP </span>
                    <span className='font-bold text-xl font-montserrat text-white'> Name </span>
                    <span className='font-bold text-xl font-montserrat text-white'> Coins </span>
                </div>
                {leaderboardData && leaderboardData?.map((user: any) => {
                    return (
                        <div
                            key={user?.userID}
                            className='w-full md:w-[60%] flex justify-between items-center text-center p-4 m-2 border-2 border-brand rounded-lg'>
                            <Image
                                src={user?.displayPicture as string}
                                alt="dp"
                                width={150}
                                height={150}
                                unoptimized
                                className="hidden sm:inline-block w-9 h-9 rounded-full"
                            />
                            <p className='font-montserrat text-base font-medium text-black'> {user?.userName} </p>

                            <div className='flex justify-start items-center space-x-2'>
                                <Image
                                    src={`/goldCoin.png`}
                                    alt={'goldCoin'}
                                    width={100}
                                    height={100}
                                    className="w-8 h-8"
                                />
                                <span className='font-montserrat font-medium'> {user?.userCoins} Gold Coins </span>
                            </div>
                        </div>
                    )
                })}
            </div>


        </section>
    )
}

export default Leaderboard