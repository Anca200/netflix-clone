import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
  <>
  <nav className='flex items-center justify-between p-4 w-full absolute z-[100] '>
    <Link to="/"> <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1> </Link>
  
    <div>
      <Link to="/log"> <button className='text-white pr-4'>Sign In</button></Link>
    <Link to="/sign"> <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button> </Link>
    </div>
  </nav>
  <Outlet/>
  </>
  )
}

export default Navbar