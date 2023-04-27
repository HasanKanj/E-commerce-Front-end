import React from 'react'
import './navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useRef,useState , useEffect} from 'react';
import logo from './RoadCar.jpeg'
function Navbar() {

  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset);

  // this var will refer to nav tag
  const navRef = useRef();

  //it called when click on buttons
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  useEffect(() => {


    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
 
 
    window.addEventListener("scroll", handleScroll);
 
 
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 
  return (
    <header className={`navbar-lina ${scrollPosition > 0 ? "scrolled" : ""}`}>
            <img className='navbar-lina-logo' src={logo} />
            <nav ref={navRef} className='navbar-lina-nav'>
        <a href='#About'>About</a>
        <a href='#Languages'>Skills</a>
        <a href='#Projects'>Projects</a>
        <a href='#ContactSection'>Contact</a>
        <button
          className="navbar-lina-nav-btn-nav-close-btn"
          onClick={showNavbar}>
          <FaTimes />
        </button>

      </nav>
      {/* to open nav */}
      <button className="navbar-lina-nav-btn"
        onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;

