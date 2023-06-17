import "../Home/Home.css";
import HeroSlider from "../Home/Sliderhome";
import Landingpage from "../Home/video";
// import Card from "../Home/FeaturedCars/Card";
import Testimonial from "../Home/Testimonial";
import TestimonialAdmin from "./TestimonialAdmin";
import React from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function AdminHome() {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const role = sessionStorage.getItem("Role");

    console.log("Token:", token);
    console.log("Role:", role);

    if (!token || role !== "admin") {
      console.log("Navigating to /");
      navigate("/");
    }
  }, []);

  return (
    <div className="testimonials-adminsection">
      <div className="testimonials">
        <h1 className="testimonial-title">Why Clients Love Us</h1>
        <p className="testimonials-p">
          Many clients are thrilled by the service we deliver and are happy to
          tell us. Read about what some have said about us here.
        </p>
        <div className="testi-admin">
          <h1>Testimonials</h1>
          <Testimonial />
        </div>
        <TestimonialAdmin />
      </div>
    </div>
  );
}

export default AdminHome;
