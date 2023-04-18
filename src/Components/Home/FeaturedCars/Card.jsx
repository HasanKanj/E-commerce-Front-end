import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import logo from "./images/3gl-navigation.png";
import mercedes from "./images/mercedes.png";
import gmc from "./images/gmc.webp";
import toyota from './images/toyota-logo-freelogovectors.net_.svg'
function Card() {
  
  return (
      <div class="cardFlex">
        <div class="cardBody">
          <div class="container">
            <div class="card cardone">
              <div class="imgBx">
                <img class="cardImg" src={logo} alt="aaa" />
              </div>
              <div class="contentBx">
                <div class="size"></div>
                <Link to="/Cars" class="button">
                  Go to gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="cardBody">
          <div class="container">
            <div class="card cardtwo">
              <div class="imgBx">
                <img class="cardImg" src={mercedes} alt="aaa" />
              </div>
              <div class="contentBx">
                <div class="size"></div>
                <Link to="/Cars#mercedes" class="button">
                  Go to gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="cardBody">
          <div class="container">
            <div class="card cardthree">
              <div class="imgBx">
                <img class="cardImg" src={gmc} alt="aaa" />
              </div>
              <div class="contentBx">
                <div class="size"></div>
                <Link to="/Cars" class="button">
                  Go to gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="cardBody">
        <div class="container">
          <div class="card cardfour">
            <div class="imgBx">
              <img class="cardImg" src={toyota} alt="aaa" />
            </div>
            <div class="contentBx">
              <div class="size"></div>
              <Link to="/Cars" class="button">
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
