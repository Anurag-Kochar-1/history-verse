import React from 'react'

const SearchBar = () => {
    return (
        <div className='w-full flex justify-center items-center border-2 border-brand rounded-lg'>
            <input
                type="search"
                title="searchbar"
                placeholder='search'
                className='w-full  border-none outline-none ring-0 focus:ring-0 bg-white text-brand placeholder:text-brand font-medium text-base font-open_sans p-3 rounded-lg'
            />

        </div>
    )
}

export default SearchBar