import React from 'react'
import './navbar.css'
import { MdMenu } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { Link } from 'react-router-dom';




// images below
import logo from '../images/logo.png'

const Navbar = () => {
    return (
        <div className='navbar-main'>
            <div className='navbar'>
                <div className="logo-div">
                    <Link to="/"> <img src={logo} className='logo-navbar' alt="logo" />
                    </Link>
                </div>
                <MdMenu className='menu-icon' />
            </div>
            <Link to='/contact'>
            
            <div className="phone-1">
                <div className='phone-2'>
                    <LuPhoneCall className='phone-icon-1' />
                </div>
            </div>
            </Link>
        </div>
    )
}

export default Navbar
