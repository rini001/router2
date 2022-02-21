import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'
export const 
 Navbar= () => {
   const {onLogout}=useContext(AuthContext)
  return (
    <div className='navbar box'>
        <Link to="/dashboard/home">Home</Link>
        <Link to="/dashboard/about">About</Link>
        <Link to="/dashboard/contacts">Contacts</Link>
        <Outlet />
        <button onClick={onLogout} >logout</button>
        
    </div>
  )
}
