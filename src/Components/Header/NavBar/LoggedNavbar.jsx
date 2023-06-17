import React from "react";
import "./navbar.css";
import { useRef, useState, useEffect } from "react";
import {  NavLink } from "react-router-dom";
import menu from "./hamburger.jpg";
import logo from "./RoadCar.jpeg";

function Navbars() {
  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset);

  // this var will refer to nav tag
  const navRef = useRef();

  //it called when click on buttons
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

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

  const logOut = () => {
    window.location.href = "/";
    window.sessionStorage.clear();
    sessionStorage.removeItem("token");
  };

  return (
    <header className={`navbar-lina ${scrollPosition > 0 ? "scrolled" : ""}`}>
      <NavLink to="/">
        <img className="navbar-lina-logo" alt="a" src={logo} />
      </NavLink>

      <nav ref={navRef} className="navbar-lina-nav">
        <NavLink
          to="/"
          className="navbar-lina-nav-Links"
          activeClassName="active"
        >
          Home
        </NavLink>
        <NavLink
          to="/AboutUs"
          className="navbar-lina-nav-Links"
          activeClassName="active"
        >
          About
        </NavLink>
        <NavLink
          to="/Cars"
          className="navbar-lina-nav-Links"
          activeClassName="active"
        >
          Cars
        </NavLink>
        <NavLink
          to="/ContactUs"
          className="navbar-lina-nav-Links"
          activeClassName="active"
        >
          Contact
        </NavLink>

        <button
          className="kanj"
          onClick={logOut}
          style={{
            backgroundColor: "#f44336",
            color: "white",
            fontSize: "16px",
            padding: "8px 16px",
            border: "none",
            borderRadius: "15px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </nav>

      {/* to open nav */}
      <img
        className="navbar-lina-nav-btn"
        src={menu}
        alt="a"
        onClick={showNavbar}
      />
    </header>
  );
}

export default Navbars;
