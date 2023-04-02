import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/layout/Layout';
import Minimal from '@/components/movie/Minimal';
import MovieDetail from '@/components/movie/MovieDetail';
import Head from 'next/head'

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
    <>
      <Head>
        <title>Movie API - Movie</title>
        <meta name="description" content="Movie API" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Layout>
        <MovieDetail movie={movie} />
        <div className='container mx-auto'>
        <h1 className='my-6 text-4xl font-bold text-gray-600'>Related Movies</h1>
        <div className='flex flex-wrap gap-4 justify-between'>
        {similar?.map(item => {
          return (
            <div key={item.id}>
              <Minimal item={item} />
            </div>
            )
          })}
        </div>
        </div>
    </Layout>
    </>
  )
}

export default SingleMovie