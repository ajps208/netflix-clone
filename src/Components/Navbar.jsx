import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import { useEffect } from 'react'

function Navbar() {
  const[show,setShow]=useState(false)
  useEffect(()=>
  window.addEventListener("scroll",()=>{
    if (window.scrollY>600) {
      setShow(true)
      
    }else{
      setShow(false)
    }
  }))
  return (
    <div className={`nav ${show && 'nav-black'}`}>
       <img width={"150px"} src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png" alt="Netflix" /> 
    </div>
  )
}

export default Navbar