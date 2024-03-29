import Navbar from '../components/Navbar'
import Head from 'next/head'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Karl.Dev | Front-End Dev</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar/>
      <Hero />
      
    </>
  )
}
