import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"
import { auth, db } from "../firebaseConfig"
import { doc, getDoc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore'
import { AppContext, IAppContextType } from "@/context/AppContext"
import { useContext } from "react"


export async function SignInWithGoogleFunction() {


    const googleProvider = new GoogleAuthProvider()

    try {
        const res = await signInWithPopup(auth, googleProvider)
        const userRef = doc(db, 'users', res?.user?.uid)
        const userDoc = await getDoc(userRef)

        if (userDoc.exists()) console.log("User Exits")
        else if (!userDoc.exists()) {
            await setDoc(doc(db, 'users', res?.user?.uid), {
                userName: res?.user?.displayName,
                displayPicture: res?.user?.photoURL,
                userEmail: res?.user?.email,
                userID: res?.user?.uid,

                completedLessonsID: [],
                userCoins: 100,
                userProfileBanner: "",

                appName: "History Verse"
            })
        }

    } catch (error) {
        alert(error)
    }

}

export async function signOutUser() {
    signOut(auth)
}

export function onAuthChanged(callback: (user: Object | null) => void) {
    onAuthStateChanged(auth, callback)
}