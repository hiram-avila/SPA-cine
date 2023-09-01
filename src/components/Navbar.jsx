import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='w-full h-20 bg-gradient-to-br from-green-900 via-teal-800 to-green-800 p-3  flex text-2xl items-center '>
      <Link to=''>
      React-Cine
    </Link>
    </nav>
  )
}

export default Navbar