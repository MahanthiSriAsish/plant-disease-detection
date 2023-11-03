// Navbar.js
import '../css/Carousel.css';
import React, { useState } from 'react';
import '../css/Navbar.css';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

    const navigate =useNavigate();
    const [scrolled, setScrolled] = useState(false);
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });

    const gotohome=()=>{
      navigate('/Loginsuccessful');
    };

    const gotoabout=()=>{
      navigate('/About');
    };
  
  return (
    
      <header classNameName = {scrolled ? 'header scrolled' : 'header'}>
      <a href="#" className="brand">AgriCure</a>
      <div className="menu-btn"></div>
      <div className="navigation">
        <div className="navigation-items">
          <a onClick={gotohome}>Home</a>
          <a onClick={gotoabout}>About</a>
          <a href="#">Explore</a>
          <a href="#">Gallery</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;