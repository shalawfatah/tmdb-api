import React from 'react'

const MovieDetail = ({movie}) => {
  return (
    <div>
        <div
        style={{backgroundImage: `url(${'https://image.tmdb.org/t/p/original/' + movie?.poster_path}) `, backgroundSize: 'auto 100vh', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'}}
        className="bg-[#161616] p-4 h-screen text-white flex flex-col justify-end shadow-xl shadow-gray-600"
        >
        <div className='bg-gray-900/60 px-4 py-2 rounded'>
        <h1 className='text-2xl font-bold '>Title: {movie.original_title}</h1>
        <p className='text-xs'>Release Date: {movie.release_date}</p>
        <p className='my-2'>Overview: {movie.overview}</p>
        <p className='font-bold'>Genres: </p>
        <div className='flex flex-wrap gap-x-2'> 
            {movie.genres?.map((x, index) => {
                return <p key={index} className='px-2 font-bold bg-gray-800 text-xs rounded'>{x.name}</p>
            })}
        </div>
        <p className='font-bold'>Runtime: {movie.runtime}</p>
        <p className='text-bold'>Languages: </p>
        <div className='flex flex-wrap gap-x-2'> 
            {movie.spoken_languages?.map((x, index) => {
                return <p key={index}  className='px-2 font-bold bg-gray-800 text-xs rounded'>{x.english_name}</p>
            })}
        </div>
        <p className='font-bold'>Production Companies: </p>
        <div className='flex flex-wrap gap-x-2'> 
            {movie.production_companies?.map((x, index) => {
                return <p key={index}  className='px-2 font-bold bg-gray-800 text-xs rounded'>{x.name}</p>
            })}
        </div>
        <p className='font-bold'>Production Countries: </p>
        <div className='flex flex-wrap gap-x-2'> 
            {movie.production_countries?.map((x, index) => {
                return <p key={index} className='px-2 font-bold bg-gray-800 text-xs rounded'>{x.name}</p>
            })}
        </div>
        <p>Status: {movie.status}</p>
        <p>Tagline: {movie.tagline}</p>
        <p>Rating: {movie.vote_average}</p>
        <p>Number of Ratings: {movie.vote_count}</p>
        </div>
        </div>
    </div>
  )
}

export default MovieDetail