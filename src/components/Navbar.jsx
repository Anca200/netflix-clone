import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const {user, logOut} = UserAuth();
  const navigate = useNavigate()

  const handleLogout = async () => {
    try{
      await logOut()
      navigate('/');
    }catch(error){
      console.log(error)
    }
  };

  return (
  <>
  <nav className='flex items-center justify-between p-4 w-full absolute z-[100] '>
    <Link to="/"> <h1 className='text-red-600 text-4xl font-bold cursor-pointer max-sm:text-[1.2rem]'>NETFLIX CLONE</h1> </Link>
  {user?.email ?  <div>
      <Link to="/account"> <button className='text-white pr-4'>Account</button></Link>
   <button  onClick={handleLogout} className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>LogOut</button> 
    </div> :  <div>
      <Link to="/log"> <button className='text-white pr-4'>Log In</button></Link>
    <Link to="/sign"> <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button> </Link>
    </div>}
  </nav>
  <Outlet/>
  </>
  )
}

export default Navbar