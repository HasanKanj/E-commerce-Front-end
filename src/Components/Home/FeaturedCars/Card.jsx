import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import logo from "./images/3gl-navigation.png";
import mercedes from "./images/mercedes.png";
import gmc from "./images/gmc.webp";
import toyota from './images/toyota-logo-freelogovectors.net_.svg'
function Card() {
  return (
      <div class="featured-cars-cardFlex">
        <div class="featured-cars-cardBody">
          <div class="featured-cars-container">
            <div class="featured-cars-card featured-cars-cardone">
              <div class="featured-cars-imgBx">
                <img class="featured-cars-cardImg" src={logo} alt="image" />
              </div>
              <div class="featured-cars-contentBx">
                <div class="featured-cars-size"></div>
                <Link to="/Cars" class="featured-cars-button">
                  Go to gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="featured-cars-cardBody">
          <div class="featured-cars-container">
            <div class="featured-cars-card featured-cars-cardtwo">
              <div class="featured-cars-imgBx">
                <img class="featured-cars-cardImg" src={mercedes} alt="image" />
              </div>
              <div class="featured-cars-contentBx">
                <div class="featured-cars-size"></div>
                <Link to="/Cars" class="featured-cars-button">
                  Go to gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="featured-cars-cardBody">
          <div class="featured-cars-container">
            <div class="featured-cars-card featured-cars-cardthree">
              <div class="featured-cars-imgBx">
                <img class="featured-cars-cardImg" src={gmc} alt="image" />
              </div>
              <div class="featured-cars-contentBx">
                <div class="featured-cars-size"></div>
                <Link to="/Cars" class="featured-cars-button">
                  Go to gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="featured-cars-cardBody">
        <div class="featured-cars-container">
          <div class="featured-cars-card cardfour">
            <div class="featured-cars-imgBx">
              <img class="featured-cars-cardImg" src={toyota} alt="image" />
            </div>
            <div class="featured-cars-contentBx">
              <div class="featured-cars-size"></div>
              <Link to="/Cars" class="featured-cars-button">
                Go to gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Card;
