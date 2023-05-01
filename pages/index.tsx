import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import About from '@/components/About'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shirley Park | Fullstack developer</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Main />
      <About />
    </div>
  )
}
