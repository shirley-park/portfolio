import Head from 'next/head'
import Main from '@/components/Main'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shirley Park | Fullstack developer</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Main />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
