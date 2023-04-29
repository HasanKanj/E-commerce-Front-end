import React, { useState } from "react";
import axios from "axios";
import "./Footer.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./Footer.js";
function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = () => {
    setLoading(true);

    axios.post("http://localhost:5000/api/newsletter", { email })
      .then((response) => {
        console.log(response.data);
        setEmail("");
        toast.success("Thank you for subscribing to our newsletter!");
      })
      .catch((error) => {
        console.error(error);
      });
      setLoading(false);

  };

  return (
    <>
      <div className="footer-lina-container">
        <div className="footer-lina-parrallax"></div>

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
          <div className="footer-lina-email-form">
            <h2>Join Our newsletter</h2>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              id="footer-lina-email"
            />
            <input
             onClick={handleSubscribe}
              type="submit"
              value="Sign up"
              name=""
              id="footer-lina-email-btn"
            />
          </div>
          <ToastContainer autoClose={3000} position="bottom-right" />
        </div>
      </div>
    </>
  );
}

export default Footer;
