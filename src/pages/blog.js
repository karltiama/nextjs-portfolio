
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Hero from '@/components/Hero'

export default function Blog() {
    return (
      <>
        <Head>
          <title>Karl.Dev | Blog</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Navbar/>
        
      </>
    )
  }
  