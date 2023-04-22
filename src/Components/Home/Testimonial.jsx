import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import "./Home.css"

const ContactUs = () => {
  const [testimonials, setTestimonials] = useState([]);

  const fetchTestimonials = async () => {
    const res = await axios.get("http://localhost:5000/testimonial");
    setTestimonials(res.data.data);
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      
      {testimonials.map((testimonial) => (
        <div className="testimonial py-4 px-3" key={testimonial.id}>
          <div>
            <p className="testi-quote">"</p>
          </div>
          <p className="section__description">{testimonial.description}</p>

          <div className="mt-3 d-flex align-items-center gap-4">
            <div>
              <h6 className="mb-0 mt-3">{testimonial.name}</h6>
              <p className="section__description">{testimonial.title}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ContactUs;
