import React  from "react";
import { NavLink, Link } from 'react-router-dom';
import './css/tailwind.css'

const Header = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <NavLink className="text-white hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/projects'>My Portfolio</NavLink>
      <NavLink className="text-white hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/contact'>My Resume</NavLink>
      <NavLink className="text-white hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/contact'>Get in Touch</NavLink>
      <NavLink className="text-white hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/about'>About Me</NavLink>  
    </nav>
  )
} 

export default Header

