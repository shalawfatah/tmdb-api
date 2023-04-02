import { MOVIE_DB_URL, NOW_SHOWING_URL } from '@/lib/URL'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Movies() {
  const [movies, setMovies] = useState([])
  const fetcher = async() => {
    const response = await fetch(NOW_SHOWING_URL)
    const result = await response.json()
    setMovies(result.results)
  }
  useEffect(() => {
    fetcher()
  }, [])

  return (
    <>
      <Head>
        <title>Movie API</title>
        <meta name="description" content="Movie API" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {movies?.map(item => {
          return (
            <Link href={`movies/${item.id}`}>
              <div key={item.id} className="bg-gray-100 my-2">
                <h1>{item.original_title}</h1>
                <p>{item.overview}</p>
                <p>{item.vote_average}</p>
                <img src={`https://image.tmdb.org/t/p/original/` + item.poster_path} alt={item.title} className='w-72' />
              </div>
            </Link>
          )
        })}
        {JSON.stringify(movies[0], null, 2)}
      </main>
    </>
  )
}