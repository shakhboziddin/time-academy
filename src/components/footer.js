import React from 'react'
import './footer.css'
import logo from '../images/logo.png'
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";






const Footer = () => {
  return (
    <div>
              <footer className="footer1">
            <div className="container1">
                <img src={logo} alt="Logo" className="logo1" />
                <a href='tel:+998945681212' className="phone1"><FaPhone /> +998 (94) 568-12-12</a>
                <a href='tel:+998334981212' className="phone1"><FaPhone /> +998 (33) 498-12-12</a>
                <a href='tel:+998941024448' className="phone1"><FaPhone /> +998 (94) 102-44-48</a>
                <div className="socials1">
                    <a href="https://t.me/time_academy_education" target="_blank" rel="noopener noreferrer" className="social-icon1">
                    <FaTelegram />
                    </a>
                    <a href="https://www.instagram.com/time_academy_uz/" target="_blank" rel="noopener noreferrer" className="social-icon1">
                    <FaInstagram />
                    </a>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
