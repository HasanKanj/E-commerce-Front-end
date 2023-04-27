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
                <img className="home-payicon" src={choose}></img>
                <h2>Choose A Car </h2>
                <h4>
                  Make a reservation to come and check the car you like at your
                  preferred time.
                </h4>
              </div>
              <div className="homethird-img">
                <img className="home-payicon" src={Pay}></img>
                <h2>Pay In Cash</h2>
                <h4>
                  Pay the amount agreed on in dollars and get ready to receive
                  your car.
                </h4>
              </div>
              <div className="homethird-img">
                <img className="home-payicon" src={drive}></img>
                <h2>Drive Ahead</h2>
                <h4>
                  Feel free driving around with your brand new car and enjoy
                  your freedom.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
