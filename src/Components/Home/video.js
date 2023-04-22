import React from "react";
// import "./landingpage.css";
import Pay from "../Home/images/Pay.png";
import drive from "../Home/images/drive.png";
import choose from "../Home/images/choose.png";
import "./video.css"
import BgVideo from "../Home/images/video.mp4";

const Landingpage = () => {
  return (
    <div className="landingpage">
      <video src={BgVideo} autoPlay muted loop class="video-bg" />
      <div className="bg-overlay"></div>

      <div className="home-text">
        <div className="home-imageFooter">
          <h1>RoadCar</h1>
          <h2 className="home-resons">How It Works</h2>
          <div className="home-allimgs">
            <div className="homesecondsection">
              <div className="homethird-img">
                <img className="home-icon" src={choose}></img>
                <h3>Choose The Car You Like</h3>
                <i>
                  Make a reservation to come and check the car you like at your
                  preferred time.
                </i>
              </div>
              <div className="homethird-img home-2ndpic">
                <img className="home-icon" src={Pay}></img>
                <h3>Pay In Cash</h3>
                <i>Pay the amount agreed on in dollars.</i>
              </div>
              <div className="homethird-img">
                <img className="home-icon" src={drive}></img>
                <h3>Enjoy Your New Car</h3>
                <i>Get your dream car and enjoy your freedom.</i>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Landingpage;
