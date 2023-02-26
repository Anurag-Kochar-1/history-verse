"use client"
import { auth, db } from '@/firebaseConfig'
import { IUserDetails } from '@/interfaces/userInterface'
// import { onAuthChanged } from '@/service/Auth/AuthService'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { createContext, ReactNode, useState, useEffect } from 'react'

export interface IAppContextType {
    userDetails: IUserDetails
    setuserDetails: React.Dispatch<React.SetStateAction<IUserDetails>>
    isTrainingModelOpen: boolean
    setIsTrainingModelOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const defaultState = {
    userDetails: {
        isUser: false,
        userName: null,
        uid: null,
        displayPicture: null,
        email: null
    },
    setuserDetails: () => { },
    isTrainingModelOpen: false,
    setIsTrainingModelOpen: () => { }

} as IAppContextType


export const AppContext = createContext(defaultState)



const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [userDetails, setuserDetails] = useState<IUserDetails>({
        isUser: false,
        userName: null,
        uid: null,
        displayPicture: null,
        email: null
    })

    const [isTrainingModelOpen, setIsTrainingModelOpen] = useState<boolean>(false)

    useEffect(() => {
        console.log(`useEffect hook running from AppContext.tsx`)
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            console.log("currentuser ==> ", currentuser);
            if (currentuser?.uid) setuserDetails({
                isUser: true,
                userName: currentuser?.displayName,
                uid: currentuser?.uid,
                displayPicture: currentuser?.photoURL,
                email: currentuser?.email
            },)
        });

        return () => {
            unsubscribe();
        };
    }, []);



    return (
        <AppContext.Provider
            value={{
                userDetails,
                setuserDetails,
                isTrainingModelOpen,
                setIsTrainingModelOpen
            }}
        >
            {children}
        </AppContext.Provider>

    )
}


export default AppContextProvider