import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../../../components/Navbar/Navbar'
import { AppContext } from '@/context/AppContext'
import { db } from '@/firebaseConfig'
import { doc, getDoc, increment, updateDoc } from 'firebase/firestore'
import TestModel from '@/components/TestModel/TestModel'


const getClassDetails = async () => {
    const subjectRef = doc(db, `/subjects/history/classes/dOdxP8qX62HVPLOeWOPi`)
    const res = await getDoc(subjectRef)
    return res?.data()
}




async function page() {
    const subjectData = await getClassDetails()


    return (
        <div className='w-full h-screen flex flex-col items-center justify-start'>
            <NavBar place='class' />
            <iframe
                className='h-[calc(100vh-5rem)] mt-[5rem] w-full'
                width="100%"
                src={subjectData?.classMetaverseID}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; microphone; camera; display-capture; xr-spatial-tracking; xr;"
            ></iframe>

            <TestModel />

        </div>
    )
}

export default page