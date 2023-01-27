import React from 'react'

const Navbar = () => {
  let name = "<Karl.dev />"
  return (
    <div className='container mx-auto flex justify-between items-center px-2 bg-slate-600'>
        <h1 className='text-3xl font-bold'> {name}</h1>
        <ul className='flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Blog</li>
            <li className='p-4'>Projects</li>
            <li className='p-4'>Blog</li>
        </ul>
        <h1>☀️</h1>
    </div>
  )
}

export default Navbar