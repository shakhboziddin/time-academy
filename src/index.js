import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './input.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Contact from './components/contact'
import english from './components/subjects/english';
import onatili from './components/subjects/onatili'
import koreystili from './components/subjects/koreystili';
import matem from './components/subjects/matem';
import tarix from './components/subjects/tarix';
import biology from './components/subjects/biology';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' Component={App} />
        <Route path='/contact' Component={Contact} />
        <Route path='/english' Component={english} />
        <Route path='/onatili' Component={onatili} />
        <Route path='/koreystili' Component={koreystili} />
        <Route path='/matematika' Component={matem} />
        <Route path='/tarix' Component={tarix} />
        <Route path='/biology' Component={biology} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();