import "../Home/Home.css";
import Testimonial from "../Home/Testimonial";
import TestimonialAdmin from "./TestimonialAdmin";



function AdminHome() {
  return (
    <div>
      <div>{/* <HeroSlider/> */}</div>

      <div className="Home">
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




