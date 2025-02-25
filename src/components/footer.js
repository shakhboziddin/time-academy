import React from 'react'
import './footer.css'
import logo from '../images/logo.png'
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";






const Footer = () => {
  return (
    <div>
              <footer className="footer">
            <div className="container">
                <img src={logo} alt="Logo" className="logo" />
                <a href='tel:+998945681212' className="phone"><FaPhone /> +998 (94) 568-12-12</a>
                <a href='tel:+998334981212' className="phone"><FaPhone /> +998 (33) 498-12-12</a>
                <a href='tel:+998941024448' className="phone"><FaPhone /> +998 (94) 102-44-48</a>
                <div className="socials">
                    <a href="https://t.me/time_academy_education" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaTelegram />
                    </a>
                    <a href="https://www.instagram.com/time_academy_uz/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaInstagram />
                    </a>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
