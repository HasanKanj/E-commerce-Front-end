import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Helmet from "../Helmet/Helmet";
import CommonSection from "../UI/CommonSection.jsx";
import CarItem from "./CarItem.jsx";
import "../styles/Car-listing.css"; // <-- Import the CSS file
import { useParams } from "react-router";

const CarListing = () => {
  const { category } = useParams();
  const [carData, setCarData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("BMW");
  const navigate = useNavigate();

  useEffect(() => {
    category && setSelectedCategory(category);
    axios
      .get("http://localhost:5000/api/cars/")
      .then((response) => {
        setCarData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleCategorySelection = (categoryName) => {
    setSelectedCategory(categoryName);
    navigate(`/cars/${categoryName.toLowerCase()}`);
  };

  return (
    <Helmet title="Cars">
      <CommonSection title="Featured Cars" />
      <Container>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />

        <section>
          <div className="category-nav">
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
                    onClick={() => handleCategorySelection("BMW")}
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
                    onClick={() => handleCategorySelection("MERCEDES")}
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
                    onClick={() => handleCategorySelection("TOYOTA")}
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
                      selectedCategory === "GMC" ? " active" : ""
                    }`}
                    onClick={() => handleCategorySelection("GMC")}
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
                    onClick={() => handleCategorySelection("FORD")}
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
                    onClick={() => handleCategorySelection("AUDI")}
                    style={{
                      cursor: "pointer",
                      color: selectedCategory === "AUDI" ? "#8B0000" : "black",
                    }}
                  >
                    Audi
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className={`nav-link${
                      selectedCategory === "ELECTRIC CAR" ? " active" : ""
                    }`}
                    onClick={() => handleCategorySelection("ELECTRIC CAR")}
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