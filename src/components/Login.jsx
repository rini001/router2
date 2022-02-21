import React from 'react'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'
export const Login = () => {
    const {onLogin}=useContext(AuthContext)
  return (
    <div>Login
        <button onClick={onLogin}>login</button>
    </div>
  )
}
