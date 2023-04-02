import { bg_gray } from '@/lib/STYLES'
import Link from 'next/link'
import React from 'react'

const Minimal = ({item}) => {
  return (
    <Link href={`../../../movies/${item.id}`}>
    <div 
        key={item.id}
        style={{backgroundImage: `url(${'https://image.tmdb.org/t/p/original/' + item.poster_path})`, backgroundSize: 'cover'}}
        className="bg-[#161616] my-2 text-white p-4 rounded-lg w-64 h-64 flex flex-col justify-end shadow-xl shadow-gray-500"
        >
        <div className='bg-gray-900/60 px-2 py-1 rounded'>
        <h1 className='font-bold text-xl'>{item.original_title}</h1>
        <p className='text-xs font-bold'>Avg Rating: {item.vote_average}</p>
        </div>
    </div>
  </Link>
  )
}

export default Minimal