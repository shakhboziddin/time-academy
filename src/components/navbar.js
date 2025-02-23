import React from 'react'
import './navbar.css'
import { MdMenu } from "react-icons/md";




// images below
import logo from '../images/logo.png'

const Navbar = () => {
    return (
        <div className='navbar-main'>
            <div className='navbar'>
                <div className="logo-div">
                   <a href="#home"> <img src={logo} className='logo-navbar' alt="logo" />
                   </a>
                </div>
                <MdMenu className='menu-icon' />


            </div>
        </div>
    )
}

export default Navbar
