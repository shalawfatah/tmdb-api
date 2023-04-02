import Layout from '@/components/layout/Layout'
import Minimal from '@/components/movie/Minimal'
import React, { useEffect, useState } from 'react'

const TopMovies = () => {
    const top_url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
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
    <Layout>
        {movies.map(item => {
            return <Minimal item={item} />
        })}
    </Layout>
  )
}

export default TopMovies