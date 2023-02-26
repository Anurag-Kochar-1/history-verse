import Image from 'next/image'
import React from 'react'
import SubjectCard from '../SubjectCard/SubjectCard'

const SubjectsContainer = ({ allSubjects }: { allSubjects: any }) => {
    return (
        <section className='relative w-full flex flex-col justify-center items-center py-28'>
            {/* <Image
                src={bg1}
                alt="bg1"
                width={1000}
                height={1000}
                className='-z-10 absolute w-full h-full object-cover bg-blend-multiply'
            /> */}
            <h2 className='text-7xl text-white font-montserrat font-bold text-center'> Top Classes </h2>
            <p className='text-2xl text-white font-open_sans font-medium text-center my-2'> Learn about our Indian army in metaverse, Join class now! </p>

            <div className='flex flex-wrap justify-center items-center my-5'>
                {allSubjects && allSubjects?.map((subject: any) => {
                    return <SubjectCard key={subject?.classID} subject={subject} />
                })}
            </div>
        </section>
    )
}

export default SubjectsContainer