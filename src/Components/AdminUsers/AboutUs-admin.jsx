import { useEffect, useState } from "react";

import "./Aboutus.css";

import NavBar from "../Header/NavBar/NavBar";
import aboutImg from "../../assets/aboutImg.png";
import dollar from "../../assets/dollar.png";

import customer from "../../assets/customer.png";
import thumb from "../../assets/thumb.png";
import Helmet from "../Helmet/Helmet";
import CommonSection from "../UI/CommonSection.jsx";
import axios from "axios";

function AboutUsAdmin() {
  const [about, setAbout] = useState([]);
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchAbout = async () => {
    setIsLoading(true);

    const res = await axios.get("http://localhost:5000/api/about");
    // console.log(res.data.data);
    setAbout(res.data.data);
    setIsLoading(false);

  };

  useEffect(() => {
    fetchAbout();
    handleChange();
  }, []);

  const handleChange = async (_id) => {
    const res = await axios.put(`http://localhost:5000/api/about/${_id}`, {
      description: description,
    });
    fetchAbout();
    //  console.log(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleChange();
    setDescription("");
  };

  return (
    <div>
      <Helmet title="About Us">
        <CommonSection title="About Us" />
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/> */}

        <div className="about-everything">
          <h5 className="about-welcome"> Welcome to RoadCar</h5>
          <div className="about-titDescImg">
            <div className="about-titDesc">
              <h1 className="about-title">About Us</h1>
              <br />
              <br />
              <div>
                {about.map((item, index) => (
                  <div className="about-section" key={index}>
                    <form onSubmit={handleSubmit}>
                      <p className="about-description"> {item.description}</p>

                      <div className="about-textarea">
                        <textarea
                          className="about-input"
                          type="text"
                          required
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                        <button
                          className="buttonAbout-edit"
                          type="submit"
                          value="submit"
                          onClick={() => handleChange(item._id)}
                        >
                          Edit
                        </button>
                      </div>
                    </form>
                  </div>
                ))}
              </div>
            </div>

            <img className="aboutimage" src={aboutImg} alt="aboutimage"></img>
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
                    Our shop provides competitive prices to make sure you get
                    the best value for your money.
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
    </div>
  );
}

export default AboutUsAdmin;
