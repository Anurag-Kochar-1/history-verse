import NavBar from '@/components/Navbar/Navbar'
import SubjectsContainer from '@/components/SubjectsContainer/SubjectsContainer'
import { db } from '@/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import Image from 'next/image'

async function getAllSubjects() {
  const classesCollectionRef = collection(db, `/subjects/history/classes`)
  const res = await getDocs(classesCollectionRef)
  const data: any[] = res?.docs?.map(doc => doc.data())
  console.log(data)
  return data
}


export default async function Home() {
  const allSubjects = await getAllSubjects()
  return (
    <main className='w-full mt-[5rem] flex flex-col items-center justify-start'>
      <NavBar place='home' />
      <SubjectsContainer allSubjects={allSubjects} />
    </main>
  )
}
