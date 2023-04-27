import bm from "../Home/images/bm.jpg";
import merc from "../Home/images/merc.jpg";
import audi from "../Home/images/audi.jpg";
import bmlogo from "../Home/images/bmlogo.jpg";
import audilogo from "../Home/images/audilogo.jpg";
import merclogo from "../Home/images/merclogo.jpeg";


import "../Home/Home.css";
import HeroSlider from "../Home/Sliderhome";
import Landingpage from "../Home/video";
import Card from "../Home/FeaturedCars/Card";
import Testimonial from "../Home/Testimonial";
import TestimonialAdmin from "./TestimonialAdmin";



function AdminHome() {
  return (
    <div>
      <div>
        <HeroSlider/>
      </div>
      <div className="home-allofabout">
        <div className="home-imagecollectionwithtitles">
          <div className="home-collectionwithtitles">
            <h1>MultiBrands Dealer</h1>
            <i>Best Solution For Your Needs</i>
          </div>
          <div className="home-imagecollection">
            <div className="container-home">
              <img className="home-audi" src={audilogo} alt="BMW"></img>
              <div className="overlay">
                <img className="home-BMW" src={audi} alt="BMW"></img>
              </div>
            </div>
            <div className="container-home">
              <img className="home-BMW" src={merclogo} alt="BMW"></img>
              <div className="overlay">
                <img className="home-BMW" src={merc} alt="BMW"></img>
              </div>
            </div>

            <div className="container-home">
              <img className="home-BMW" src={bmlogo} alt="BMW"></img>

              <div className="overlay">
                <img className="home-BMW" src={bm} alt="BMW"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
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
          <Card/>
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
          <Testimonial/>
              </div>
              <TestimonialAdmin/>
      </div>
    </div>
  );
}

export default AdminHome;




