import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";
import Helmet from "../Helmet/Helmet";
import CommonSection from "../UI/CommonSection.jsx";
import CarItem from "./CarItem.jsx";
import "../styles/Car-listing.css"; // <-- Import the CSS file


const CarListing = () => {
  const [carData, setCarData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("BMW");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/cars/")
      .then((response) => {
        setCarData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Helmet title="Cars">
      <CommonSection title="Featured Cars" />
      <Container>
        <section>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1 style={{ textAlign: "left" }}>{selectedCategory}</h1>

            <nav className="navbar-expand-lg navbar-light ">
              <ul
                className="navbar-nav me-auto mb-2 mb-lg-0"
                style={{ display: "flex" }}
              >
                <li className="nav-item" id="BMW">
                  <span
                    className={`nav-link${
                      selectedCategory === "BMW" ? " active" : ""
                    }`}
                    onClick={() => setSelectedCategory("BMW")}
                    style={{
                      cursor: "pointer",
                      color: selectedCategory === "BMW" ? "#8B0000" : "black",
                    }}
                  >
                    BMW
                  </span>
                </li>
                <li className="nav-item" id="mercedes">
                  <span
                    className={`nav-link${
                      selectedCategory === "MERCEDES" ? " active" : ""
                    }`}
                    onClick={() => setSelectedCategory("MERCEDES")}
                    style={{
                      cursor: "pointer",
                      color:
                        selectedCategory === "MERCEDES" ? "#8B0000" : "black",
                    }}
                  >
                    Mercedes
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className={`nav-link${
                      selectedCategory === "TOYOTA" ? " active" : ""
                    }`}
                    onClick={() => setSelectedCategory("TOYOTA")}
                    style={{
                      cursor: "pointer",
                      color:
                        selectedCategory === "TOYOTA" ? "#8B0000" : "black",
                    }}
                  >
                    Toyota
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className={`nav-link${
                      selectedCategory === "ELECTRIC CAR" ? " active" : ""
                    }`}
                    onClick={() => setSelectedCategory("ELECTRIC CAR")}
                    style={{
                      cursor: "pointer",
                      color:
                        selectedCategory === "ELECTRIC CAR"
                          ? "#8B0000"
                          : "black",
                    }}
                  >
                    Electric
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className={`nav-link${
                      selectedCategory === "GMC" ? " active" : ""
                    }`}
                    onClick={() => setSelectedCategory("GMC")}
                    style={{
                      cursor: "pointer",
                      color: selectedCategory === "GMC" ? "#8B0000" : "black",
                    }}
                  >
                    GMC
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className={`nav-link${
                      selectedCategory === "FORD" ? " active" : ""
                    }`}
                    onClick={() => setSelectedCategory("FORD")}
                    style={{
                      cursor: "pointer",
                      color: selectedCategory === "FORD" ? "#8B0000" : "black",
                    }}
                  >
                    Ford
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className={`nav-link${
                      selectedCategory === "AUDI" ? " active" : ""
                    }`}
                    onClick={() => setSelectedCategory("AUDI")}
                    style={{
                      cursor: "pointer",
                      color: selectedCategory === "AUDI" ? "#8B0000" : "black",
                    }}
                  >
                    Audi
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </Container>

      <section>
        <Container>
          <Row>
            <CarItem products={carData} selectedCategory={selectedCategory} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
