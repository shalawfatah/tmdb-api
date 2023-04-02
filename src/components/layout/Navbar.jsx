import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-wrap gap-x-2'>
        <Link className='bg-gray-200 px-4 py-1 rounded' href='/'>Home</Link>
        <Link className='bg-gray-200 px-4 py-1 rounded' href='/top-movies'>Top-rated Movies</Link>
        <Link className='bg-gray-200 px-4 py-1 rounded' href='/playing'>Now Playing</Link>
        <Link className='bg-gray-200 px-4 py-1 rounded' href='/upcoming'>Upcoming Movies</Link>
    </div>
  )
}

export default Navbar