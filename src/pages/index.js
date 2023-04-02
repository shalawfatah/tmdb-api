import Layout from '@/components/layout/Layout'
import FirstMovie from '@/components/movie/FirstMovie'
import Minimal from '@/components/movie/Minimal'
import { first_movie_exclude } from '@/lib/first_movie_exclude'
import { NOW_SHOWING_URL } from '@/lib/URL'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Home() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const fetcher = async() => {
    const response = await fetch(NOW_SHOWING_URL)
    const result = await response.json()
    setMovies(result.results)
  }
  useEffect(() => {
    fetcher()
  }, []) 
  const exclude_first_movie = first_movie_exclude(movies)

  const router = useRouter()

  const searchHandle = () => {
    router.push({
        pathname: '/search',
        query: { keyword: search },
    })
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      router.push({
        pathname: '/search',
        query: { keyword: search },
    })
    }
  };
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
        <div className='fixed top-16 left-[50%] translate-x-[-50%]'>
          <input onKeyDown={handleKeyDown} className="border-[1px] border-gray-300 rounded-tl-sm rounded-bl-sm outline-none py-1 px-2" type="text" placeholder="Search for a movie..." value={search} onChange={(e) => setSearch(e.target.value)} />
          <button className='bg-black border-[1px] border-gray-300 font-bold py-1 px-2 text-white rounded-tr-sm rounded-br-sm' onClick={searchHandle}>SEARCH</button>
        </div>
        <div className='container mx-auto'>
        <h1 className='my-6 text-4xl font-bold text-gray-600'>Latest Releases</h1>
        <div className='flex flex-wrap gap-4 justify-between'>
        {exclude_first_movie?.map(item => {
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
