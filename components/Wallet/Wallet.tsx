import { AppContext } from '@/context/AppContext'
import { db } from '@/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import Image from 'next/image'
import React, { useContext } from 'react'
import Button from '../Button/Button'

// async function getUserCoins(uid: string) {
//     const userRef = doc(db, "users", uid)
//     const { data: userCoins } = await getDoc(userRef)
//     return userCoins
// }

const Wallet = () => {
    // const { userDetails } = useContext(AppContext)
    // const userCoins = await getUserCoins(userDetails?.uid as string)
    // console.log(`userCoins`)
    // console.log(`userCoins`)
    // console.log(`userCoins`)
    // console.log(userCoins)


    return (
        <div className='hidden md:inline-flex h-10 px-6 font-open_sans text-white justify-center items-center space-x-2 text-base font-semibold bg-dark rounded-md hover:bg-white hover:text-brand hover:border-2 hover:border-brand hover:cursor-pointer'>
            <Image
                src={`/goldCoin.png`}
                alt={'goldCoin'}
                width={100}
                height={100}
                className="w-6 h-6 "
            />

            <button
                type='button'
                title='wallet-button'
            >
                Wallet - 100 Gold Coins
            </button>
        </div>

    )
}

export default Wallet