import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  let name = "<Karl.dev />"
  return (
    <div className='relative flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>{name}</h1>
      <ul className='flex'>
        <li className='p-4'>Home</li>
        <Link className='p-4' href='/blog'>Blog</Link>
        <li className='p-4'>Projects</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar