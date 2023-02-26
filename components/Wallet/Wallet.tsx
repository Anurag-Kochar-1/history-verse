import { AppContext } from '@/context/AppContext'
import { db } from '@/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
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
        <Button
            className="hidden md:inline-block"
        >
            Wallet - 100 Gold Coins
        </Button >

    )
}

export default Wallet