import Layout from '@/components/layout/Layout'
import FirstMovie from '@/components/movie/FirstMovie'
import Minimal from '@/components/movie/Minimal'
import { first_movie_exclude } from '@/lib/first_movie_exclude'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'

const Upcoming = () => {
  const top_url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  const [movies, setMovies] = useState([])
  const fetcher = async() => {
    const response = await fetch(top_url)
    const result = await response.json()
    setMovies(result.results)
  }
  useEffect(() => {
    fetcher()
  }, [movies])

const exclude_first_movie = first_movie_exclude(movies)
  return (
    <>
      <Head>
        <title>Movie API - Upcoming</title>
        <meta name="description" content="Movie API" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Layout>
        <FirstMovie item={movies[0]} />
        <div className='container mx-auto'>
        <h1 className='my-6 text-4xl font-bold text-gray-600 text-center lg:text-left'>Highest Ranked Movies</h1>
        <div className='flex flex-wrap gap-4 justify-center lg:justify-between'>
        {exclude_first_movie?.map(item => {
            return <div key={item.id}>
              <Minimal item={item} />
            </div>
        })}
        </div>
        </div>
    </Layout>
        </>
  )
}

export default Upcoming