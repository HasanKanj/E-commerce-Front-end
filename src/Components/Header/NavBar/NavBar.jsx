import React from 'react'
import './navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useRef } from 'react';

function Navbar() {
  // this var will refer to nav tag
  const navRef = useRef();

  //it called when click on buttons
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }


  return (
    <header>
      <h3>Oussama Ghomrawi</h3>
      <nav ref={navRef}>

        <a href='#About'>About</a>
        <a href='#Languages'>Skills</a>
        <a href='#Projects'>Projects</a>
        <a href='#ContactSection'>Contact</a>
        <button
          className="nav-btn-nav-close-btn"
          onClick={showNavbar}>
          <FaTimes />
        </button>

      </nav>
      {/* to open nav */}
      <button className="nav-btn"
        onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;

