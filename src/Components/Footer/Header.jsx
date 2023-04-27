import React from "react";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

const navigationStyle = ({ isActive }) => ({
  color: isActive ? "gray" : "white",
  textDecoration: "none",
});

export const Header = () => {
  return (
    <div className="header">
      <NavLink to="/" style={navigationStyle}>
        <img className="logo" src={logo} alt="JAY KHAWAND" />
      </NavLink>
      <div className="navigation-bar">
        <NavLink to="/gallery" style={navigationStyle}>
          Gallery
        </NavLink>
        <NavLink to="/services" style={navigationStyle}>
          Services
        </NavLink>
        <NavLink to="/shop" style={navigationStyle}>
          Shop
        </NavLink>
        <NavLink to="/about" style={navigationStyle}>
          About
        </NavLink>
        <NavLink to="/contact" style={navigationStyle}>
          Contact
        </NavLink>
      </div>
    </div>
  );
};
