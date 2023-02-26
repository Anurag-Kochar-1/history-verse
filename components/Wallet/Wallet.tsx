import { AppContext } from '@/context/AppContext'
import { db } from '@/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import Image from 'next/image'
import React, { useContext } from 'react'
import Button from '../Button/Button'

// async function getUserCoins(uid: string) {
//     const userRef = doc(db, "users", uid)
//     const res = await getDoc(userRef)
//     return res.data()
// }

const Wallet = () => {
    const { userDetails } = useContext(AppContext)
    // const data = await getUserCoins(userDetails?.uid as string)


    return (
        <div className='h-10 px-6 font-open_sans text-white flex justify-center items-center space-x-2 text-base font-semibold bg-dark rounded-md hover:bg-white hover:text-brand hover:border-2 hover:border-brand hover:cursor-pointer'>
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