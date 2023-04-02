import Link from 'next/link'
import React from 'react'

const FirstMovie = ({item}) => {
  return (
    <Link href={`../../../movies/${item?.id}`}>
        <div
        style={{backgroundImage: `url(${'https://image.tmdb.org/t/p/original/' + item?.poster_path})`, backgroundSize: 'cover', backgroundOrigin: 'center', backgroundAttachment: 'fixed'}}
        className="bg-[#161616] p-4 h-[50vh] text-white flex flex-col justify-end shadow-xl shadow-gray-500"
        >
        <div className='bg-gray-900/60 px-4 py-2 rounded'>
            <h1 className='font-bold text-xl'>{item?.original_title}</h1>
            <p className='font-bold'>Avg Rating: {item?.vote_average}</p>
            <p className='font-bold'>Overview</p>
            <p className='text-sm'>{item?.overview}</p>
        </div>
        </div>
    </Link>
  )
}

export default FirstMovie