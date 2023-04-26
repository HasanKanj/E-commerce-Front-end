import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "./RoadCar.jpeg";
import '@fortawesome/fontawesome-free/css/all.css';

function Navigation() {
  const [isMobile, setIsMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
        setShowMenu(false);
      } else {
        setIsMobile(false);
        setShowMenu(true);
      }
    };

    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className={`navbar-lina ${scrollPosition > 0 && !isMobile ? "scrolled" : ""}`}>
      <div className="navbar-lina-logo-div">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Your Logo" className="navbar-lina-logo" />
        </Link>
      </div>
      {showMenu && (
        <div className="navbar-lina-links">
          <ul className="navbar-lina-ul">
            <li>
              <Link className="navbar-lina-link" to="/AboutUs" onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li className="navbar-lina-item navbar-lina-dropdown">
              <span>
                <Link className="navbar-lina-link" to="/cars" onClick={closeMenu}>
                  Our Cars
                </Link>
              </span>
              <ul className="navbar-lina-submenu">
                <li>
                  <Link className="navbar-lina-link" to="/fuelCars" onClick={closeMenu}>
                    Fuel Cars
                  </Link>
                </li>
                <li>
                  <Link className="navbar-lina-link" to="/electricCars" onClick={closeMenu}>
                    Electric Cars
                  </Link>
                </li>
              </ul>
            </li>
            <li className="navbar-lina-item">
              <Link className="navbar-lina-link" to="/ContactUs" onClick={closeMenu}>
                Contact Us
              </Link>
            </li>
            <li className="navbar-lina-item">
              <button className="navbar-lina-login-btn" onClick={closeMenu}>
                <Link className="navbar-lina-link" to="/Login">
                  Login
                </Link>
              </button>
            </li>
          </ul>
        </div>
      )}
      {isMobile && (
        <div className="navbar-lina-menu-toggle" onClick={toggleMenu}>
          <i className={`fas ${showMenu ? "fa-times" : "fa-bars"}`} />
        </div>
      )}
    </nav>
  );
}

export default Navigation;
