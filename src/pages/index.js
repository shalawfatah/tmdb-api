import Head from 'next/head'
import Movies from './movies'

export default function Home() {

  return (
    <>
      <Head>
        <title>Movie API</title>
        <meta name="description" content="Movie API" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Movies />
      </main>
    </>
  )
}
