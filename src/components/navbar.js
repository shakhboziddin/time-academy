import React from 'react'
import './navbar.css'
import { MdMenu } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { useState } from 'react'
// images below
import logo from '../images/logo.png'







const Navbar = () => {
    const [className, setClassName] = useState('default');
    
    const handleClick = () => {
        setClassName(className === 'default' ? 'changed' : 'default')
    }

    const handleScroll = () => {
        setClassName(className === 'default' ? 'default' : 'default')
    }

    window.addEventListener('scroll', handleScroll)
        
    return (
        <div className='navbar-main'>
            <div className='navbar'>
                <div className="logo-div">
                    <Link to="/"> <img src={logo} className='logo-navbar' alt="logo" />
                    </Link>
                </div>
                <MdMenu className='menu-icon' onClick={handleClick} />
            </div>


            <div className={className} id='nav-menu-items'>
                <Link className='nav-menu-items-item' onClick={handleClick} to='/'>Asosiy</Link>
                <Link className='nav-menu-items-item' onClick={handleClick} to='/english'>Ingliz Tili</Link>
                <Link className='nav-menu-items-item' onClick={handleClick} to='/onatili'>Ona tili - Adabiyot</Link>
                <Link className='nav-menu-items-item' onClick={handleClick} to='/koreystili'>Koreys tili</Link>
                <Link className='nav-menu-items-item' onClick={handleClick} to='/matematika'>Matematika</Link>
                <Link className='nav-menu-items-item' onClick={handleClick} to='/tarix'>Tarix</Link>
                <Link className='nav-menu-items-item' onClick={handleClick} to='/biology'>Kimyo - Biologiya</Link>

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
