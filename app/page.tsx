import NavBar from '@/components/Navbar/Navbar'
import Image from 'next/image'


export default function Home() {
  return (
    <main className='w-full mt-[5rem] flex flex-col items-center justify-start'>
      <NavBar place='home' />
    </main>
  )
}
