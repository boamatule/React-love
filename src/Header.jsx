
import { NavLink, Link } from 'react-router-dom';
import React from "react"


const Header = () => {
    return (
        <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-10">                 
          <h1 className="header-title">
            <NavLink className="text-white hover:text-grey no-underline" to='./projects'>My Portfolio</NavLink>
          </h1>
            <ul className="list-reset flex">
                <li className="mr-6"><NavLink className="text-white hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/about'>About Me</NavLink></li>
                {/* <li className="mr-6"><NavLink className="text-white hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/projects'>My Projects</NavLink></li> */}
                <li className="mr-6"><NavLink className="text-white hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/contact'>Contact Me</NavLink></li>
                <li className="mr-6"><NavLink className="text-white hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/resume'>My CV</NavLink></li>
            </ul>
        </nav>
    )
}

export default Header