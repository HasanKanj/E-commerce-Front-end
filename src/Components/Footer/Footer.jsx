import React, { useState } from "react";
import axios from "axios";
import "./Footer.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./Footer.js";
function Footer() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <div className="footer-lina-container">

        <div className="footer-lina">
          <div className="footer-lina-heading footer-lina-1">
            <h2>About Us</h2>
            <a href="#">Blog</a>
            <a href="#">Demo</a>
            <a href="#">Customers</a>
            <a href="#">Investors</a>
            <a href="#">Terms of Service</a>
          </div>
          <div className="footer-lina-heading footer-lina-2">
            <h2>Contact Us</h2>
            <a href="#">Jobs</a>
            <a href="#">Support</a>
            <a href="#">Contact</a>
            <a href="#">Sponsorships</a>
          </div>
          <div className="footer-lina-heading footer-lina-3">
            <h2>Social Media</h2>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Youtube</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
