import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-wrap gap-2 mx-2 lg:mx-0 fixed top-2 lg:left-[50%] lg:translate-x-[-50%]'>
        <Link className='bg-black text-sm border-[1px] border-gray-300 font-bold text-white px-4 py-1 rounded' href='/'>Home</Link>
        <Link className='bg-black text-sm border-[1px] border-gray-300 font-bold text-white px-4 py-1 rounded' href='/top-movies'>Top-rated Movies</Link>
        <Link className='bg-black text-sm border-[1px] border-gray-300 font-bold text-white px-4 py-1 rounded' href='/popular'>Now Popular</Link>
        <Link className='bg-black text-sm border-[1px] border-gray-300 font-bold text-white px-4 py-1 rounded' href='/upcoming'>Upcoming Movies</Link>
    </div>
  )
}

export default Navbar