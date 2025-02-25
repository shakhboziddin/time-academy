import React from 'react'
import './index.css'
import './App.css'
import { FaArrowRight } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';



const App = () => {
  return (
    <div>
      <section className='home' id='home'>
        <h1 className='home-main-header'>Time Academy: Kelajagingizni bugundan yarating!</h1>
        <Link to="/contact" className='home-main-btn'>BIZ BILAN BOG'LANING <FaArrowRight className='home-main-btn-icon' /></Link>
      </section>
      <section className='fanlar' id='fanlar'>
        <div className='fanlar-header'>
          <h1>Fanlar – Barcha Kurslar va Yo‘nalishlar</h1>
        </div>
        <div className='all-fanlar'>
          <div className="fanlar-fan ingliz">
            <h1>INGLIZ TILI</h1>
            <Link to='/english' className='fanlar-fan-btn'>BATAFSIL <MdKeyboardDoubleArrowRight className='batafsil-btn' /></Link>
          </div>
          <div className="fanlar-fan onatili">
            <h1>ONA TILI VA ADABIYOT</h1>
            <button className='fanlar-fan-btn'>BATAFSIL <MdKeyboardDoubleArrowRight className='batafsil-btn' /></button>
          </div>
          <div className="fanlar-fan koreys">
            <h1>KOREYS TILI</h1>
            <button className='fanlar-fan-btn'>BATAFSIL <MdKeyboardDoubleArrowRight className='batafsil-btn' /></button>
          </div>
          <div className="fanlar-fan math">
            <h1>ALGEBRA - GEOMETRIYA</h1>
            <button className='fanlar-fan-btn'>BATAFSIL <MdKeyboardDoubleArrowRight className='batafsil-btn' /></button>
          </div>
          <div className="fanlar-fan tarix">
            <h1>TARIX</h1>
            <button className='fanlar-fan-btn'>BATAFSIL <MdKeyboardDoubleArrowRight className='batafsil-btn' /></button>
          </div>
          <div className="fanlar-fan bio">
            <h1>BIOLOGIYA - KIMYO</h1>
            <button className='fanlar-fan-btn'>BATAFSIL <MdKeyboardDoubleArrowRight className='batafsil-btn' /></button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
