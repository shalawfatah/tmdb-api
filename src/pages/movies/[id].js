import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { PICTURE_PREFIX } from '@/lib/URL';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import Minimal from '@/components/movie/Minimal';

const SingleMovie = () => {
    const router = useRouter()
    const pid = router.query.id;
    const url = `https://api.themoviedb.org/3/movie/${pid}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    const similar_url = `https://api.themoviedb.org/3/movie/${pid}/similar?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    const [movie, setMovie] = useState({})
    const [similar, setSimilar] = useState([])
    const fetcher = async() => {
        const response = await fetch(url)
        const result = await response.json()
        setMovie(result)
    }
    const fetchSimilar = async() => {
        const response = await fetch(similar_url)
        const result = await response.json()
        setSimilar(result.results)
    }
    useEffect(() => {
        fetcher()
        fetchSimilar()
    }, [pid])

    return (
    <Layout>
        <h1>Title: {movie.original_title}</h1>
        <img src={PICTURE_PREFIX + movie.poster_path} alt={movie.original_title} className='w-60' />
        <p>Release Date: {movie.release_date}</p>
        <p>Overview: {movie.overview}</p>
        <p>Genres: </p>
        <div className='flex flex-wrap gap-x-2'> 
            {movie.genres?.map(x => {
                return <p className='bg-gray-200 px-2 rounded'>{x.name}</p>
            })}
        </div>
        <p>Runtime: {movie.runtime}</p>
        <p>Languages: </p>
        <div className='flex flex-wrap gap-x-2'> 
            {movie.spoken_languages?.map(x => {
                return <p className='bg-gray-200 px-2 rounded'>{x.english_name}</p>
            })}
        </div>
        <p>Production Companies: </p>
        <div className='flex flex-wrap gap-x-2'> 
            {movie.production_companies?.map(x => {
                return <p className='bg-gray-200 px-2 rounded'>{x.name}</p>
            })}
        </div>
        <p>Production Countries: </p>
        <div className='flex flex-wrap gap-x-2'> 
            {movie.production_countries?.map(x => {
                return <p className='bg-gray-200 px-2 rounded'>{x.name}</p>
            })}
        </div>
        <p>Status: {movie.status}</p>
        <p>Tagline: {movie.tagline}</p>
        <p>Rating: {movie.vote_average}</p>
        <p>Number of Ratings{movie.vote_count}</p>
        <div className='container mx-auto'>
        <h1 className='my-6 text-4xl font-bold text-gray-600'>Latest Releases</h1>
        <div className='flex flex-wrap gap-4 justify-between'>
        {similar?.map(item => {
          return (
            <Minimal item={item} />
          )
        })}
        </div>
        </div>
    </Layout>
  )
}

export default SingleMovie