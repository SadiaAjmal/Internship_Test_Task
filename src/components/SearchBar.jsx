import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div>
  <form action=""> 

<div className=' bg-white py-3 px-5 rounded-full'>
<input className=' lg:w-auto w-[90%] outline-none text-gray-500' type="search" placeholder='Serch Internships...' />
<button type='submit'><IoSearch className=' text-black' /></button>
</div>

</form>
    </div>
  )
}

export default SearchBar
