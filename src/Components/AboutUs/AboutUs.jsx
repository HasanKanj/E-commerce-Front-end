import NavBar from "../Header/NavBar/NavBar";
import aboutimg from "../AboutUs/images/about.png"
import dollar from "../../assets/dollar.png";
import customer from "../../assets/customer.png";
import thumb from "../../assets/thumb.png";
import Helmet from "../Helmet/Helmet";
import CommonSection from "../UI/CommonSection.jsx";
import "./AboutUs.css";
import { useEffect, useState } from "react";
import axios from "axios";

function AboutUs() {
  const [about, setAbout] = useState([]);
  const [description, setDescription] = useState("");

  const fetchAbout = async () => {
    const res = await axios.get("http://localhost:5000/api/about");
    setAbout(res.data.data);
  };

  useEffect(() => {
    fetchAbout();
  }, []);

  return (
    <Helmet title="About Us">
      <CommonSection title="About Us" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>

      <div className="about-everything">
        <h5 className="about-welcome"> Welcome to RoadCar</h5>
        <div className="about-titDescImg">
          <div className="about-titDesc">
           
            <br />
            <br />

            <div className="about-description">
              {about.map((item, index) => (
                <div className="about-section" key={index}>
                  <p className="about-cldescription"> {item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <img className="aboutimage" src={aboutimg} alt="aboutimage"></img>
        </div>

        <div className="about-imageFooter">
          <div className="about-allimgs">
            <h1 className="about-reasonTitle">Reasons to buy from RoadCar</h1>
            <div className="aboutsection">
              <div className="aboutthird-img">
                <img className="about-thumb" src={thumb}></img>
                <h3>Quality service</h3>
                <i>
                  We provide the best quality service that exceeds your
                  expectations.
                </i>
              </div>
              <div className="aboutfourth-img">
                <img className="about-dollar" src={dollar}></img>
                <h3>Competitive pricing</h3>
                <i>
                  Our shop provides competitive prices to make sure you get the
                  best value for your money.
                </i>
              </div>
              <div className="aboutthird-img">
                <img className="about-customer" src={customer}></img>
                <h3>Customer Service</h3>
                <i>
                  Our excellent customer service sets us apart from other car
                  shops.
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
}

export default AboutUs;
