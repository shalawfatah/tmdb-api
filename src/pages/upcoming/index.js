import Layout from '@/components/layout/Layout'
import FirstMovie from '@/components/movie/FirstMovie'
import Minimal from '@/components/movie/Minimal'
import { first_movie_exclude } from '@/lib/first_movie_exclude'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Placeholder from '@/components/movie/Placeholder'
import Btn from '@/components/general/Btn'

const Upcoming = () => {
  const [page, setPage] = useState(1)
  const top_url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${page}`
  const [movies, setMovies] = useState([])
  const fetcher = async() => {
    const response = await fetch(top_url)
    const result = await response.json()
    setMovies(result.results)
  }
  useEffect(() => {
    fetcher()
  }, [movies, page])

const exclude_first_movie = first_movie_exclude(movies)

const increment_page = () => setPage(prev => prev + 1);
const decrement_page = () => page > 1 && setPage(prev => prev - 1);
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
        <Placeholder />
        </div>
        </div>
        <div className='container flex justify-between items-center mx-auto my-12 bg-gray-200 p-2 rounded'>
          <Btn handleClick={decrement_page} text="PREVIOUS" />
          <p className='text-xs font-bold text-gray-600'>OTHER PAGES</p>
          <Btn handleClick={increment_page} text="NEXT" />
        </div>
    </Layout>
        </>
  )
}

export default Upcoming