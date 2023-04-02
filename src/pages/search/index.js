import Layout from '@/components/layout/Layout'
import Minimal from '@/components/movie/Minimal'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'

const Search = () => {
  const router = useRouter()
  const search = router.query.keyword;
  const top_url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1&query=${search}`
  const [movies, setMovies] = useState([])
  const fetcher = async() => {
    const response = await fetch(top_url)
    const result = await response.json()
    setMovies(result.results)
  }
  useEffect(() => {
    fetcher()
  }, [])

  return (
    <>
      <Head>
        <title>Movie API - Search</title>
        <meta name="description" content="Movie API" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Layout>
        <div className='container mx-auto'>
        <h1 className='my-6 text-4xl font-bold text-gray-600'>Search Result</h1>
        <div className='flex flex-wrap gap-4 justify-between'>
        {movies?.map(item => {
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

export default Search