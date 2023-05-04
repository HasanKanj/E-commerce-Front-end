import React from "react";
import "./navbar.css";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import menu from "./hamburger.jpg";
import logo from "./RoadCar.jpeg";

function AdminNavbar() {
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
      <Link to="/Admin/Home">
        <img className="navbar-lina-logo"  alt="a" src={logo} />
      </Link>

      <nav ref={navRef} className="navbar-lina-nav">
        <Link to="/" className="navbar-lina-nav-Links" href="#About">
          Home
        </Link>
        <Link to="/Admin/AboutUs" className="navbar-lina-nav-Links" href="#Languages">
          About
        </Link>
        <Link to="/Admin/cars" className="navbar-lina-nav-Links" href="#Projects">
          Cars
        </Link>
        <Link
          to="/ContactUsAdmin"
          className="navbar-lina-nav-Links"
          href="#ContactSection"
        >
          Contact
        </Link>

        <button className="kanj"
          onClick={logOut}
          style={{
            backgroundColor: "#f44336",
            color: "white",
            fontSize: "16px",
            padding: "8px 16px",
            border: "none",
            borderRadius: "4px",
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
        alt=""
        onClick={showNavbar}
      />
    </header>
  );
}

export default AdminNavbar;
