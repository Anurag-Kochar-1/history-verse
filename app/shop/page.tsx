import React from 'react'
import NavBar from '@/components/Navbar/Navbar'
import ProductCard from '@/components/ProductCard/ProductCard'
import SearchBar from '@/components/SearchBar/SearchBar'
import { ProductsData } from "../../constants/Products/ProductsData"

const page = () => {
  return (
    <main className='w-full mt-[5rem] flex flex-col items-center justify-start'>
      <NavBar place='home' />
      <h1 className='text-7xl text-black font-montserrat font-bold text-center my-10'> Shop </h1>
      <div className='w-[95%] md:w-[70%] lg:w-[60%] flex justify-start items-center'>
        <SearchBar />
      </div>

      <div className='w-full flex flex-wrap justify-center items-center py-10'>
        {ProductsData?.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </div>
    </main>
  )
}

export default page