import Layout from '@/components/layout/Layout'
import FirstMovie from '@/components/movie/FirstMovie'
import Minimal from '@/components/movie/Minimal'
import { MOVIE_DB_URL, NOW_SHOWING_URL } from '@/lib/URL'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [movies, setMovies] = useState([])
  const fetcher = async() => {
    const response = await fetch(NOW_SHOWING_URL)
    const result = await response.json()
    setMovies(result.results)
  }
  useEffect(() => {
    fetcher()
  }, []) 
  const first_movie_exclude = movies?.filter((item, index) => {
    return index !== 0;
  })
  return (
    <>
      <Head>
        <title>Movie API</title>
        <meta name="description" content="Movie API" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <FirstMovie item={movies[0]} />
        <div className='container mx-auto'>
        <h1 className='my-6 text-4xl font-bold text-gray-600'>Latest Releases</h1>
        <div className='flex flex-wrap gap-4 justify-between'>
        {first_movie_exclude?.map(item => {
          return (
            <Minimal item={item} />
          )
        })}
        </div>
        </div>
      </Layout>
    </>
  )
}
