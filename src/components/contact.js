import React from 'react'
import './contact.css'
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";



const Contact = () => {
  return (
    <div className='contact-main'>
      <div className="contact-header">
        <h1>BIZ BILAN BOG'LANING:</h1>
        <div className='contact-header-menu'>
          <a href='tel:+998945681212' className="phone"><FaPhone className='phone-icon' /> +998 (94) 568-12-12</a>
          <a href='tel:+998334981212' className="phone"><FaPhone className='phone-icon' /> +998 (33) 498-12-12</a>
          <a href='tel:+998941024448' className="phone"><FaPhone className='phone-icon' />  +998 (94) 102-44-48</a>
          <div className='contact-header-menu-socials'>
            <a href="https://t.me/time_academy_education" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTelegram />
            </a>
            <a href="https://www.instagram.com/time_academy_uz/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Contact
