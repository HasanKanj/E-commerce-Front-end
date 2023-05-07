import { Link } from "react-router-dom";
import bmlogo from "../Home/images/bmlogo.jpg";
import audilogo from "../Home/images/audilogo.jpg";
import merclogo from "../Home/images/merclogo.jpeg";
import toyota from "../Home/images/toyota.jpeg";


import "./Home.css";
import Testimonial from "./Testimonial";
import HeroSlider from "./Sliderhome";
import Landingpage from "./video";
import Testimonials from "./testimonialss";


function Home() {
  return (
    <div>
      <div>
        <HeroSlider />
      </div>
      <div className="home-stickyImage"></div>
    
        <div className="home-imagecollectionwithtitles">
          <div className="home-collectionwithtitles">
            <h1>MultiBrands Dealer</h1>
            <i>Best Solution For Your Needs</i>
          </div>

          <div className="home-imagecollection">
   
            <div className="container-home">
              <img className="home-audi" src={audilogo} alt="BMW"></img>
              <div className="overlay">
                <h1>Audi</h1>
                <br></br>
                <button className="button-overlay">
                  <Link to="/cars/AUDI">View Our Collection</Link>
                </button>
              </div>
            </div>

            <div className="container-home">
              <img className="home-audi" src={toyota} alt="BMW"></img>
              <div className="overlay">
                <h1>Toyota</h1>
                <br></br>
                <button className="button-overlay">
                  <Link to="/cars/TOYOTA">View Our Collection</Link>
                </button>
              </div>
            </div>
        

            <div className="container-home">
              <img className="home-audi" src={merclogo} alt="BMW"></img>
              <div className="overlay">
                <h1>Mercedes</h1>
                <br></br>
                <button className="button-overlay">
                  <Link to="/cars/MERCEDES">View Our Collection</Link>
                </button>
              </div>
            </div>

            <div className="container-home">
              <img className="home-audi" src={bmlogo} alt="BMW"></img>
              <div className="overlay">
                <h1>BMW</h1>
                <br></br>
                <button className="button-overlay">
                  <Link to="/cars/BMW">View Our Collection</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
     
      <div className="landingpage-vid">
        <Landingpage />
        
      </div>
      <div className="footer-lina-parrallax"></div>

      <div className="all-testimonials">
        <div className="testimonials">
          <div className="">
            <Testimonials /> 
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
