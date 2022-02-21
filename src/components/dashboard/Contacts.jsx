import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export const Contacts = () => {
  const [basePath,setbasePath]=useState("")
  const location= useLocation()
  console.log(location);
useEffect(()=>{
let parts=location.pathname.split("/");
let base="/"+parts[1]+"/"+parts[2]
setbasePath(base)
},[location]);
  return (
    <div className="box">Contacts
    <div style={{display:'flex'}}>
      <Link to={`${basePath}/Rini`}>contact 1</Link>
        &nbsp;
        &nbsp;
        
        <Link to={`${basePath}/tista`}>contact 2</Link>
        &nbsp;
        &nbsp;
        <Link to={`${basePath}/new`}>Create contact</Link>
        </div>
        <Outlet />
        </div>
  )
}
