import Leaderboard from '@/components/Leaderboard/Leaderboard'
import NavBar from '@/components/Navbar/Navbar'
import SubjectsContainer from '@/components/SubjectsContainer/SubjectsContainer'
import { db } from '@/firebaseConfig'
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore'
import Image from 'next/image'

async function getAllSubjects() {
  const classesCollectionRef = collection(db, `/subjects/history/classes`)
  const res = await getDocs(classesCollectionRef)
  const data: any[] = res?.docs?.map(doc => doc.data())
  console.log(data)
  return data
}

async function fetchLeaderboard() {
  const leaderboardQuery = query(collection(db, 'users'), orderBy("userCoins", "desc"), limit(20))
  const res = await getDocs(leaderboardQuery)
  const data = res?.docs?.map(doc => doc.data())
  return data
}


export default async function Home() {
  const allSubjects = await getAllSubjects()
  const leaderboardData = await fetchLeaderboard()
  return (
    <main className='w-full mt-[5rem] flex flex-col items-center justify-start'>
      <NavBar place='home' />
      <SubjectsContainer allSubjects={allSubjects} />
      <Leaderboard leaderboardData={leaderboardData} />
    </main>
  )
}
