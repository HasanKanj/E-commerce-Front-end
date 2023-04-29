import "../Home/Home.css";
import HeroSlider from "../Home/Sliderhome";
import Landingpage from "../Home/video";
// import Card from "../Home/FeaturedCars/Card";
import Testimonial from "../Home/Testimonial";
import TestimonialAdmin from "./TestimonialAdmin";
import React from "react";
import {useState} from 'react';


function AdminHome() {
    const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <div>{/* <HeroSlider/> */}</div>

      <div className="Home">
        {/* <div className="HomeFeaturedCars">
          <h2>Featured Cars:</h2>
          <Card />
        </div> */}
        <div className="featuredcars">
          <h1>Featured Cars</h1>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {/* <Card/> */}
        </div>
      </div>
      <div>
        <Landingpage/>
      </div>

      <div className="testimonials">
        <h1 className="testimonial-title">Why Clients Love Us</h1>
        <p className="testimonials-p">
          Many clients are thrilled by the service we deliver and are happy to
          tell us. Read about what some have said about us here.
        </p>
        <div className="testi">
          <h1>Testimonials</h1>

          <Testimonial />
        </div>
        <TestimonialAdmin />
      </div>
    </div>
  );
}

export default AdminHome;




